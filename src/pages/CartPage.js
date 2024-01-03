import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CartItemsList from '../components/CartPage/CartItemList';
import CheckoutHandler from '../components/CheckOutHandler';


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
    setCheckoutInitiated(false); // Resets the checkout initiated flag
    navigate('/checkout-success'); // Navigates to the success page
  };

  return (
    <div>
      <h1>Cart</h1>
      <CartItemsList cartItems={cartItems} onCheckout={onCheckout} />

      {checkoutInitiated && (
        <CheckoutHandler onCheckoutComplete={onCheckoutComplete} />
      )}
    </div>
  );
};

export default CartPage;

