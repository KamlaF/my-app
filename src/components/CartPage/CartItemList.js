import React from 'react';
import { useNavigate } from 'react-router-dom';

const CartItemsList = ({ cartItems, onCheckout }) => {
  const navigate = useNavigate();

  const totalPrice = cartItems.reduce((total, item) => total + item.quantity * item.discountedPrice, 0);

  
  const handleCheckout = () => {
    console.log("Proceed to checkout");

    // Check if onCheckout is a function before calling it
    if (typeof onCheckout === 'function') {
      onCheckout(); // Reset the cart items or perform other checkout actions
      navigate('/checkout-success'); // Navigate to success page
    } else {
      console.error('onCheckout is not a function');
      // Handle the case where onCheckout is not provided or not a function
      // For example, you could navigate to an error page or show an error message
    }
  };

  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.length > 0 ? (
        <>
          {cartItems.map(item => (
            <div key={item.id}>
              <h3>{item.title}</h3>
              <p>Quantity: {item.quantity}</p>
              <p>Price per item: ${item.discountedPrice.toFixed(2)}</p>
            </div>
          ))}
          <h3>Total: ${totalPrice.toFixed(2)}</h3>
          <button onClick={handleCheckout}>Checkout</button>
        </>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default CartItemsList;



