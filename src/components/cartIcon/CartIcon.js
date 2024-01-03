// CartIcon.js
// CartIcon.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import './cartIcon.scss';

const CartIcon = ({ count }) => {
  const navigate = useNavigate(); // Initialize navigate function

  // Function to handle click on the cart icon
  const handleCartClick = () => {
    navigate('/cart'); // Navigate to CartPage
  };

  return (
    <div className="cart-icon" onClick={handleCartClick}> {/* Add onClick event */}
      <button className="cart-button">
        🛒
        {count > 0 && <span className="cart-count">{count}</span>}
      </button>
    </div>
  );
};

export default CartIcon;


