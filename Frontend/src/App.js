import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Menu from './pages/Menu';
import Login from './pages/Login';
import Register from './pages/Register';
import PrivateRoute from './components/routing/PrivateRoute';
import Dashboard from './pages/Dashboard';
import AdminDashboard from './pages/AdminDashboard';
import AdminRoute from './components/routing/AdminRoute';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import AdminAddFood from './pages/AdminAddFood';
import OrderSuccess from './pages/OrderSuccess';




function App() {
   
  return (
    
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route path="/admin" element={<AdminRoute><AdminDashboard /></AdminRoute>} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-success" element={<OrderSuccess />} />
        <Route path="/admin/add-food" element={<AdminRoute><AdminAddFood /></AdminRoute>} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}


export default App;
