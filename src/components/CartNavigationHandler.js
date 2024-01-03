import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CartNavigationHandler = ({ cartItems, checkoutInitiated }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (cartItems.length === 0 && checkoutInitiated) {
      navigate('/checkout-success');
    }
  }, [cartItems, navigate, checkoutInitiated]);

  return null;
};


export default CartNavigationHandler
