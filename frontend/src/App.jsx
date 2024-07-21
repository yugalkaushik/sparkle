import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import New from './pages/New';
import Men from './pages/Men';
import Women from './pages/Women';
import Sale from './pages/Sale';
import Sneakers from './pages/Sneakers';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import Nav from './components/Nav';
import Admin from './pages/Admin'
import { AuthProvider } from './context/AuthContext';

const AppContent = () => {
  const location = useLocation();
  const hideNavPaths = ['/login', '/signup' , '/profile', '/wishlist', '/cart', '/admin'];

  return (
    <>
      {!hideNavPaths.includes(location.pathname) && <Nav />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/sale" element={<Sale />} />
        <Route path="/sneakers" element={<Sneakers />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
};

export default App;
