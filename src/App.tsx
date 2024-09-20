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
import { ContactModal } from './components/ContactModal/ContactModal';
import About from './pages/About/About';

const App: React.FC = () => {
  const [initialLoad, setInitialLoad] = useState(true);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const toggleContactModal = () => {
    setIsContactModalOpen(!isContactModalOpen);
  };

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
      <Header toggleContactModal={toggleContactModal}/>
      <Routes>
        <Route path="/" element={<Home toggleContactModal={toggleContactModal}/>} />
        <Route path="/about" element={<About toggleContactModal={toggleContactModal}/>} />
        <Route path="/work" element={<div />} />
      </Routes>
      <ContactModal isOpen={isContactModalOpen} toggleContactModal={toggleContactModal}/>
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
