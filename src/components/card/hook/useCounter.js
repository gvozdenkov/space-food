import { useMemo } from 'react';
import { useCartContext } from '../../../common/contexts/CartContext';
import { useCardContext } from './useCardContext';

export const useCounter = () => {
  const product = useCardContext();
  const { cart } = useCartContext();

  const count = useMemo(
    () =>
      cart.buns.filter((bun) => bun._id === product._id).length +
      cart.ingredients.filter((ingredient) => ingredient._id === product._id).length,
    [cart.buns, cart.ingredients, product._id],
  );
  return { count };
};
