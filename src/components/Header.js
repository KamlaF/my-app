
import React from 'react';
import { Link } from 'react-router-dom';
import CartIcon from './cartIcon/CartIcon';

// The Header component with navigation links and the CartIcon.
// The cartItemCount is passed as a prop from the parent component.
const Header = ({ cartItemCount }) => {
    // Header.js
console.log("Cart item count in Header:", cartItemCount);

  return (
    <header className="header">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      {/* CartIcon is included and receives the cartItemCount as a prop */}
      <CartIcon count={cartItemCount} />
    </header>
  );
};

export default Header;


