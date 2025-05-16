import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';
import heroBg from '../../assets/hero-bg.jpg'; // ⬅️ Import the image

const Hero = () => {
  return (
    <div className="hero" style={{ backgroundImage: `url(${heroBg})` }}>
      <h1>Delicious Food, Delivered Fast.</h1>
      <p>Order from your favorite restaurants in seconds.</p>
     <Link to="/menu">
        <button className="browse-menu-btn">Browse Menu</button>
      </Link>
    </div>
    
  );
};

export default Hero;
