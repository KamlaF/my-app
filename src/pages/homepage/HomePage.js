import React, { useEffect, useState } from 'react';
import Product from '../../components/product/Product';
import SearchBar from '../../components/SearchBar/SearchBar';
import './homePage.scss';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://api.noroff.dev/api/v1/online-shop');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data); 
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };
  
    fetchProducts();
  }, []);
  
  

 
  const filteredProducts = searchTerm
    ? products.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : products;

  
  console.log('Products:', products);
  console.log('Filtered Products:', filteredProducts);

  return (
    <div className="home-page">
      <SearchBar onSearchTermChange={setSearchTerm} />
      <div className='parent-container'>
      <h1 className='homeH1'>Products</h1>
      </div>
      <div className="products-list">
        {filteredProducts.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;




