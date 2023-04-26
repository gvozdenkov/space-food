import { createContext, useCallback, useContext, useState } from 'react';
import { useIngredientContext } from '../IngredientContext';

const IngredientSelectedContext = createContext();

export const useIngredientSelectedContext = () => {
  const context = useContext(IngredientSelectedContext);

  if (context === undefined) {
    throw new Error('You try to use useIngredientSelectedContext outside of its provider!');
  }

  return context;
};

export const IngredientSelectedContextProvider = ({ children }) => {
  const [selectedId, setSelectedId] = useState(null);
  const { ingredients } = useIngredientContext();

  const selectedIngredient = selectedId ? ingredients.find((ingr) => ingr._id === selectedId) : {};
  const closeModal = useCallback(() => setSelectedId(null), []);

  return (
    <IngredientSelectedContext.Provider
      value={{ selectedId, setSelectedId, selectedIngredient, closeModal }}>
      {children}
    </IngredientSelectedContext.Provider>
  );
};
