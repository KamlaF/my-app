
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SingleProduct from '../components/singleProduct/singleProduct';

const ProductPage = ({ onAddToCart }) => {
    const [product, setProduct] = useState(null);
    const { productId } = useParams();

    useEffect(() => {
        const fetchProduct = async () => {
            const response = await fetch(`https://api.noroff.dev/api/v1/online-shop/${productId}`);
            const data = await response.json();
            setProduct(data);
        };

        fetchProduct();
    }, [productId]);

   // ProductPage.js
return product && <SingleProduct product={product} onAddToCart={onAddToCart} />;

};

export default ProductPage;

