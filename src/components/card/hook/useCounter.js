import { useMemo } from 'react';
import { useCardContext } from './useCardContext';
import { useSelector } from 'react-redux';

export const useCounter = () => {
  const product = useCardContext();
  const { bun, ingredients } = useSelector((state) => state.burgerConstructor);

  const count = useMemo(() => {
    const cart = [bun, ...ingredients, bun];
    return cart.filter((item) => item._id === product._id).length;
  }, [bun, ingredients, product._id]);

  return { count };
};
