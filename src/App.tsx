import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import styles from './App.module.scss';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import useNavigateWithTransition from './hooks/useNavigateWithTransition';

const App: React.FC = () => {
  const [initialLoad, setInitialLoad] = useState(true);
  const { showTransition, handleNavigation } = useNavigateWithTransition(initialLoad);

  useEffect(() => {
    if (initialLoad) {
      setInitialLoad(false);
      return;
    }
  }, []);

  return (
    <div className={styles.main}>
      <div className={styles.site_background} />
      <Header onNavigate={handleNavigation} />
      <div
        className={`${styles.page_transition} ${showTransition && styles.active}`}
      />
      <Routes>
        <Route path="/" element={<Home onNavigate={handleNavigation}/>} />
        <Route path="/about" element={<div />} />
        <Route path="/work" element={<div />} />
        <Route path="/contact" element={<div />} />
      </Routes>
      <Footer />
    </div>
  );
};

const RouterApp: React.FC = () => (
  <Router>
    <App />
  </Router>
);

export default RouterApp;
