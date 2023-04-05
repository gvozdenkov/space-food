import { createContext } from 'react';

export const IngredientSelectedContext = createContext({
  ingredient: {},
  setIngredient: () => { },
});
