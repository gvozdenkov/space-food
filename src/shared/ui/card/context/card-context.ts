import { Ingredient } from '#shared/api/types';
import { createContext, useContext } from 'react';

type CardContext = {
  ingredient: Ingredient;
};

export const CardContext = createContext<CardContext | undefined>(undefined);

export const useCardContext = () => {
  const context = useContext(CardContext);

  if (!context) {
    throw new Error('Child components of `Card` can not be rendered outside the `Card` component!');
  }

  return context;
};
