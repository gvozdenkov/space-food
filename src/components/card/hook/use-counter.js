import { useMemo } from 'react';
import { useCardContext } from './use-card-context';
import { useSelector } from 'react-redux';

export const useCounter = () => {
  const product = useCardContext();
  const { constructorItems } = useSelector((state) => state.burgerConstructor);

  const count = useMemo(() => {
    return constructorItems.filter((item) => item._id === product._id).length;
  }, [constructorItems, product._id]);

  return { count };
};
