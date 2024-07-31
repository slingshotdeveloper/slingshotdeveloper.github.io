import React, { createContext, ReactNode, useContext, useState, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styles from '../App.module.scss';

interface NavigationContextProps {
  navigateWithTransition: (path: string) => void;
  showTransition: boolean;
}

interface NavigationProviderProps {
  children: ReactNode;
}

const NavigationContext = createContext<NavigationContextProps | undefined>(undefined);

export const NavigationProvider: React.FC<NavigationProviderProps> = ({ children }) => {
  const navigate = useNavigate();
  const [showTransition, setShowTransition] = useState(false);
  const location = useLocation();

  const navigateWithTransition = useCallback((path: string) => {
    if (location.pathname !== path) {
      setShowTransition(true);
      setTimeout(() => {
        navigate(path);
      }, 500);
      setTimeout(() => {
        setShowTransition(false);
      }, 750);
    }
  }, [location.pathname, navigate]);

  return (
    <NavigationContext.Provider value={{ navigateWithTransition, showTransition }}>
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
