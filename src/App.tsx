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
import Work from './pages/Work/Work';
import Projects from './pages/Projects/Projects';

const App: React.FC = () => {
  const [initialLoad, setInitialLoad] = useState(true);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [shouldRunAnimation, setShouldRunAnimation] = useState(() => {
    return sessionStorage.getItem('hasRunAnimation') === null;
  });

  const toggleContactModal = () => {
    setIsContactModalOpen(!isContactModalOpen);
  };

  useEffect(() => {
    if (initialLoad) {
      setInitialLoad(false);
      return;
    }
  }, []);

  useEffect(() => {
    const hasRunAnimation = sessionStorage.getItem('hasRunAnimation');

    if (!hasRunAnimation) {
      sessionStorage.setItem('hasRunAnimation', 'true');
    } else {
      const timeout = setTimeout(() => {
        setShouldRunAnimation(false);
      }, 12500);

      return () => clearTimeout(timeout);
    }
  }, [shouldRunAnimation]);

  const turnOffAnimation = () => {
    setShouldRunAnimation(false);
  };

  return (
    <NavigationProvider>
    <div className={styles.main}>
      <div className={styles.site_background} />
      <Header turnOffAnimation={turnOffAnimation} toggleContactModal={toggleContactModal}/>
      <Routes>
        <Route path='/' element={<Home shouldRunAnimation={shouldRunAnimation} toggleContactModal={toggleContactModal}/>} />
        <Route path='/about' element={<About toggleContactModal={toggleContactModal}/>} />
        <Route path='/work' element={<Work toggleContactModal={toggleContactModal}/>} />
        <Route path='/projects' element={<Projects/>}/>
      </Routes>
      <ContactModal isOpen={isContactModalOpen} toggleContactModal={toggleContactModal}/>
      {/* <Footer /> */}
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
