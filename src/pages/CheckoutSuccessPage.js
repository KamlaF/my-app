import { Link } from 'react-router-dom';

const CheckoutSuccessPage = () => {
    return (
        <div className="checkout-success">
            <h1>Checkout Successful!</h1>
            <p>Your order has been placed successfully.</p>
            <Link to="/">Return to Home</Link>
        </div>
    );
};

export default CheckoutSuccessPage