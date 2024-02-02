import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home title='Home' />} />
        <Route path='/projects' element={<Home title='Project' />} />
        <Route path='/about' element={<Home title='About' />} />
      </Routes>
    </Router>
  );
};

export default App;
