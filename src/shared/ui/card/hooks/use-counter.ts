import { useMemo } from 'react';
import { useCardContext } from '../context/card-context';
import { useAppSelector } from '#shared/model/hooks';
import { selectAllCartItems } from '#entities/cart';

export const useCounter = () => {
  const { ingredient } = useCardContext();
  const cartItems = useAppSelector(selectAllCartItems);

  const count = useMemo(() => {
    return cartItems.filter((item) => item._id === ingredient._id).length;
  }, [cartItems, ingredient]);

  return { count };
};
