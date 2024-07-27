import { useEffect, useState, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const useNavigateWithTransition = (initialLoad: boolean) => {
  const [targetPath, setTargetPath] = useState<string | null>(null);
  const [showTransition, setShowTransition] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (initialLoad) {
      return;
    }
    if (targetPath) {
      setShowTransition(true);
      const timer = setTimeout(() => {
        setShowTransition(false);
        navigate(targetPath);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [targetPath, navigate, initialLoad]);

  const handleNavigation = useCallback((path: string) => {
    if (location.pathname !== path) {
      setTargetPath(path);
    }
  }, [location.pathname]);

  return { showTransition, handleNavigation };
};

export default useNavigateWithTransition;
