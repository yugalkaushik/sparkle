import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Joinus from './pages/Joinus';
import New from './pages/New';
import Men from './pages/Men';
import Women from './pages/Women';
import Sale from './pages/Sale';
import Sneakers from './pages/Sneakers';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/joinus" element={<Joinus />} />
          <Route path="/new" element={<New />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/sale" element={<Sale />} />
          <Route path="/sneakers" element={<Sneakers />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
