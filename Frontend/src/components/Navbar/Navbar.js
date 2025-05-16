import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaShoppingCart } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const cartItems = useSelector(state => state.cart.items);
  const totalQty = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role'); // ✅ admin check

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">SmartBite</Link>
      </div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Menu</Link></li>

        {role === 'admin' && (
          <li><Link to="/admin/add-food">Add Food</Link></li> // ✅ visible for admin only
        )}

       

        {!token ? (
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
          </>
        ) : (
          <li>
            <button
              className="logout-btn"
              onClick={() => {
                localStorage.clear();
                window.location.href = '/login';
              }}
            >
              Logout
            </button>
          </li>
        )}
         <li>
          <Link to="/cart" className="cart-icon">
            <FaShoppingCart size={22} />
            {totalQty > 0 && <span className="cart-badge">{totalQty}</span>}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
