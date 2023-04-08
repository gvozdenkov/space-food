import { useContext } from 'react';
import { CardContext } from '../context/card-context';

export const useCardContext = () => {
  const context = useContext(CardContext);

  if (!context) {
    throw new Error('Child components of Card cannot be rendered outside the Card component!');
  }

  return context;
};
