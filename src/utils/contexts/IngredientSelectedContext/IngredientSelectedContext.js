import { createContext, useContext, useState } from 'react';

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

  return (
    <IngredientSelectedContext.Provider value={{ selectedId, setSelectedId }}>
      {children}
    </IngredientSelectedContext.Provider>
  );
};
