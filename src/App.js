import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/homepage/HomePage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import CheckoutSuccessPage from './pages/CheckoutSuccessPage';
import ContactPage from './pages/ContactPage/ContactPage';
import Layout from './components/Layout';
import './scss/main.scss'; // Adjust the path based on your file structure


function App() {
  const [cartItems, setCartItems] = useState([]);

  const onAddToCart = (product, quantity) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      setCartItems(cartItems.map(item => 
        item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity }]);
    }
  };

 const clearCart = () => {
  setCartItems([]); // This should update the state and cause a re-render
};

  const cartItemCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  return (
    <Router>
      <Layout cartItemCount={cartItemCount}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products/:productId" element={<ProductPage onAddToCart={onAddToCart} />} />
          <Route path="/cart" element={<CartPage cartItems={cartItems} clearCart={clearCart} />} />
          <Route path="/checkout-success" element={<CheckoutSuccessPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
