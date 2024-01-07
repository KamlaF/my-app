import React from 'react';
import './CartItemList.scss';

const CartItemsList = ({ cartItems, onCheckout }) => {
  // Calculate the total price of the cart items
  const totalPrice = cartItems.reduce((total, item) => total + item.quantity * item.discountedPrice, 0);

 return (
  <div className="cart-container">
    <h2 className="cart-title">Your Cart</h2>
    {cartItems.length > 0 ? (
      <>
        {cartItems.map(item => (
          <div key={item.id} className="cart-item">
            <h3 className="item-title">{item.title}</h3>
            <p className="item-quantity">Quantity: {item.quantity}</p>
            <p className="item-price">Price per item: ${item.discountedPrice.toFixed(2)}</p>
          </div>
        ))}
        <h3 className="total-price">Total: ${totalPrice.toFixed(2)}</h3>
        <button onClick={onCheckout} className="checkout-button">Proceed to Checkout</button>
      </>
    ) : (
      <p className="empty-cart-message">Your cart is empty.</p>
    )}
  </div>
);
};

export default CartItemsList;




