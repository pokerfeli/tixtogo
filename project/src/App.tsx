import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { HomePage } from './pages/HomePage';
import { AttractionsPage } from './pages/AttractionsPage';
import { AttractionDetails } from './pages/AttractionDetails';
import { ShoppingCart } from './pages/ShoppingCart';
import { PaymentPage } from './pages/PaymentPage';
import { WholesalePage } from './pages/WholesalePage';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/attractions" element={<AttractionsPage />} />
        <Route path="/attractions/:id" element={<AttractionDetails />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/wholesale" element={<WholesalePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;