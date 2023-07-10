import { useMemo } from 'react';
import { useCardContext } from './use-card-context';
import { useSelector } from 'react-redux';
import { selectAllOrderItems } from '../../../features/burger-constructor/services/order-slice';

export const useCounter = () => {
  const product = useCardContext();
  const orderItems = useSelector(selectAllOrderItems);

  const count = useMemo(() => {
    return orderItems.filter((item) => item === product._id).length;
  }, [orderItems, product._id]);

  return { count };
};
