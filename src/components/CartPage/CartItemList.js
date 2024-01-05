import React from 'react';

const CartItemsList = ({ cartItems, onCheckout }) => {
  // Calculate the total price of the cart items
  const totalPrice = cartItems.reduce((total, item) => total + item.quantity * item.discountedPrice, 0);

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
          <button onClick={onCheckout}>Proceed to Checkout</button>
        </>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default CartItemsList;




