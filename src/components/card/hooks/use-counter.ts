import { useMemo } from 'react';
import { useCardContext } from '../context/card-context';
import { useAppSelector } from '#app/store';
import { selectAllOrderItems } from '#app/store/order-slice';

export const useCounter = () => {
  const { ingredient } = useCardContext();
  const orderItems = useAppSelector(selectAllOrderItems);

  const count = useMemo(() => {
    return orderItems.filter((item) => item === ingredient._id).length;
  }, [orderItems, ingredient]);

  return { count };
};
