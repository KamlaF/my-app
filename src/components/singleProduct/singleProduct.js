import React from 'react';
import './SingleProduct.scss';

const SingleProduct = ({ product, onAddToCart }) => {

    const handleAddToCart = () => {
        console.log("Adding to cart", product.title, 1);
        onAddToCart(product, 1);
      };
      

    // Calculate discount
    const discount = product.price - product.discountedPrice;
    const hasDiscount = discount > 0;

    return (
        <div className="singleProduct-card">
            <img src={product.imageUrl} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            {hasDiscount ? (
                <>
                    <p>Discounted Price: ${product.discountedPrice.toFixed(2)}</p>
                    <p>Original Price: <strike>${product.price.toFixed(2)}</strike></p>
                    <p>You save: ${discount.toFixed(2)}!</p>
                </>
            ) : (
                <p>Price: ${product.discountedPrice.toFixed(2)}</p>
            )}
            {/* Display reviews */}
            {product.reviews && product.reviews.length > 0 && (
                <div className="reviews">
                    <h4>Reviews:</h4>
                    {product.reviews.map(review => (
                        <div key={review.id} className="review">
                            <p>{review.description}</p>
                            <p>Rating: {review.rating}</p>
                        </div>
                    ))}
                </div>
            )}
            {/* Add to Cart functionality */}
            <div className="add-to-cart">
                <button onClick={handleAddToCart}>Add to cart</button>
                
            </div>
        </div>
    );
};

export default SingleProduct;

