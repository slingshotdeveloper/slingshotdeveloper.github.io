import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Background from "./components/Background/Background";
import StartUpScreen from "./components/StartUpScreen/StartUpScreen";

const App: React.FC = () => {
  
  return (
    <div id='main'>
      <Background />
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<div />} />
            <Route path="/projects" element={<div />} />
            <Route path="/contact" element={<div/>} />
          </Routes>
        </Router>
    </div>
  );
};

export default App;
