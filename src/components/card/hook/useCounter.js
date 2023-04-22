import { useCartContext } from '../../../utils/contexts/CartContext';
import { useCardContext } from './useCardContext';

export const useCounter = () => {
  const product = useCardContext();
  const { cart } = useCartContext();

  const count = cart.cartItems.filter((cartItem) => cartItem._id === product._id).length;
  
  return { count };
};
