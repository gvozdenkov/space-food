import { createContext, useContext, useMemo, useState } from 'react';
import { useIngredientContext } from '../IngredientContext/IngredientContext';

const IngredientSelectedContext = createContext();

export const useIngredientSelectedContext = () => {
  const context = useContext(IngredientSelectedContext);

  if (context === undefined) {
    throw new Error('You try to use useIngredientSelectedContext outside of its provider!');
  }

  return context;
};

export const IngredientSelectedContextProvider = ({ children }) => {
  const { ingredients } = useIngredientContext();
  const [selectedId, setSelectedId] = useState(ingredients[0]._id);
  const [isOpen, setIsOpen] = useState(false);

  const contextValue = useMemo(
    () => ({ selectedId, setSelectedId, isOpen, setIsOpen }),
    [selectedId, setSelectedId, isOpen, setIsOpen],
  );

  return (
    <IngredientSelectedContext.Provider value={contextValue}>
      {children}
    </IngredientSelectedContext.Provider>
  );
};
