import { Link } from 'react-router-dom';
import './CheckOutSuccessPage.scss';

const CheckoutSuccessPage = () => {
   return (
  <div className="checkout-success">
    <h1 className='checkOutSuccess-H1'>Checkout Successful!</h1>
    <p className='checkOutSuccess-P'>Your order has been placed successfully.</p>
    <Link to="/" className='home-link'>Return to Home</Link>
  </div>
);

};

export default CheckoutSuccessPage