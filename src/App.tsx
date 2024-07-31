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
import { NavigationProvider } from './context/NavigationContext';

const App: React.FC = () => {
  const [initialLoad, setInitialLoad] = useState(true);

  useEffect(() => {
    if (initialLoad) {
      setInitialLoad(false);
      return;
    }
  }, []);

  return (
    <NavigationProvider>
    <div className={styles.main}>
      <div className={styles.site_background} />
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<div />} />
        <Route path="/work" element={<div />} />
        <Route path="/contact" element={<div />} />
      </Routes>
      <Footer />
    </div>
    </NavigationProvider>
  );
};

const RouterApp: React.FC = () => (
  <Router>
    <App />
  </Router>
);

export default RouterApp;
