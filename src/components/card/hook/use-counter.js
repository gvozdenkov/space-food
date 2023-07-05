import { useMemo } from 'react';
import { useCardContext } from './use-card-context';
import { useSelector } from 'react-redux';
import { selectOrder } from '../../../features/burger-constructor/services/order-slice';

export const useCounter = () => {
  const product = useCardContext();
  const { orderItems } = useSelector(selectOrder);

  const count = useMemo(() => {
    return orderItems.filter((item) => item === product._id).length;
  }, [orderItems, product._id]);

  return { count };
};
