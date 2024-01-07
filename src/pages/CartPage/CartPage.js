import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CartItemsList from '../../components/CartPage/CartItemList';
import './CartPage.scss';

const CartPage = ({ cartItems, clearCart }) => {
  const [checkoutInitiated, setCheckoutInitiated] = useState(false);
  const navigate = useNavigate();

  
  const onCheckout = () => {
    console.log("Initiating checkout");
    setCheckoutInitiated(true); 
  };

  
  const onCheckoutComplete = () => {
    console.log("Checkout completed");
    clearCart(); 
    navigate('/checkout-success'); 
  };

 return (
  <div>
    <h1 className='cartPage-H1'>Cart</h1>
    <CartItemsList cartItems={cartItems} onCheckout={onCheckout} />
    {checkoutInitiated && 
      <button 
        onClick={onCheckoutComplete} 
        className='complete-checkout-button'
      >
        Complete Checkout
      </button>
    }
  </div>
);
};

export default CartPage;


