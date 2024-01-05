import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CartItemsList from '../components/CartPage/CartItemList';

const CartPage = ({ cartItems, clearCart }) => {
  const [checkoutInitiated, setCheckoutInitiated] = useState(false);
  const navigate = useNavigate();

  // Initiates the checkout process
  const onCheckout = () => {
    console.log("Initiating checkout");
    setCheckoutInitiated(true); // Flag to indicate checkout has started
  };

  // Completes the checkout process
  const onCheckoutComplete = () => {
    console.log("Checkout completed");
    clearCart(); // Clears the cart
    navigate('/checkout-success'); // Navigates to the success page
  };

  return (
    <div>
      <h1>Cart</h1>
      <CartItemsList cartItems={cartItems} onCheckout={onCheckout} />
      {checkoutInitiated && <button onClick={onCheckoutComplete}>Complete Checkout</button>}
    </div>
  );
};

export default CartPage;


