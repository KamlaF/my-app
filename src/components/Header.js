
import React from 'react';
import { Link } from 'react-router-dom';
import CartIcon from './CartIcon';

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <CartIcon />
    </header>
  );
};

export default Header;

