import React from 'react';




const CheckoutHandler = ({ onCheckoutComplete }) => {
  const handleCheckoutCompletion = () => {
    if (typeof onCheckoutComplete === 'function') {
      onCheckoutComplete(); // This will clear the cart
    }
  };

  return (
    <div>
      <button onClick={handleCheckoutCompletion}>Complete Checkout</button>
    </div>
  );
};




export default CheckoutHandler;

