import React, { createContext, ReactNode, useContext, useState, useCallback, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styles from '../App.module.scss';
import { split } from 'postcss/lib/list';

interface NavigationContextProps {
  navigateWithTransition: (path: string) => void;
  showTransition: boolean;
  hash: string | null;
}

interface NavigationProviderProps {
  children: ReactNode;
}

const NavigationContext = createContext<NavigationContextProps | undefined>(undefined);

export const NavigationProvider: React.FC<NavigationProviderProps> = ({ children }) => {
  const navigate = useNavigate();
  const [showTransition, setShowTransition] = useState(false);
  const location = useLocation();
  const [hash, setHash] = useState<string | null>(null);

  const navigateWithTransition = useCallback((path: string) => {
    const [basePath, hashValue] = path.split('#');
    setHash(hashValue || null);

    if (location.pathname !== basePath) {
      setShowTransition(true);
      setTimeout(() => {
        navigate(basePath);
      }, 500);
      setTimeout(() => {
        setShowTransition(false);
      }, 750);
    }
  }, [location.pathname, navigate]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <NavigationContext.Provider value={{ navigateWithTransition, showTransition, hash }}>
      {children}
      <div className={`${styles.page_transition} ${showTransition && styles.active}`} />
    </NavigationContext.Provider>
  );
};

export const useNavigation = (): NavigationContextProps => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};
