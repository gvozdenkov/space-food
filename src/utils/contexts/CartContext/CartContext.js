import { createContext, useContext, useReducer } from 'react';
import { useIngredientContext } from '../IngredientContext';
import { addIngredient } from './actions';
import { reducer } from './reducer';

const CartContext = createContext();

export const useCartContext = () => {
  const context = useContext(CartContext);

  if (context === undefined) {
    throw new Error('You try to use useCartContext outside of its provider!');
  }

  return context;
};

export const CartContextProvider = ({ children }) => {
  const { ingredients } = useIngredientContext();

  const buns = ingredients.filter((ingredient) => ingredient.type === 'bun');
  const randomBun = buns[Math.floor(Math.random() * buns.length)];
  const initialState = {
    ingredients: [randomBun, randomBun],
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const value = {
    ingredients: state.ingredients,

    getTotalPrice: () => {
      return [...state.ingredients].reduce((sum, ingredient) => sum + ingredient.price, 0);
    },

    addIngredient: (ingredient) => {
      dispatch(addIngredient({ ingredient }));
    },
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
