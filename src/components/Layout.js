// In Layout.js
import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children, cartItemCount }) => {
  return (
    <>
      <Header cartItemCount={cartItemCount} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;

