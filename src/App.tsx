import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styles from "./App.module.scss";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const App: React.FC = () => {
  
  return (
    <div id={styles.main}>
      <div className={styles.site_background}/>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<div />} />
            <Route path="/projects" element={<div />} />
            <Route path="/contact" element={<div/>} />
          </Routes>
        </Router>
        <Footer/>
    </div>
  );
};

export default App;
