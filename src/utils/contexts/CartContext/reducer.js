import { INGREDIENT } from '../../constants';
import { actions } from './actions';

export const reducer = ({ cartItems }, { type, ingredient }) => {
  switch (type) {
    case actions.ADD_INGREDIENT: {
      // User can only replace buns on top and bottom
      const newBuns = ingredient.type === INGREDIENT.BUN ? [ingredient, ingredient] : [];
      const currentBuns = cartItems.filter((ingredient) => ingredient.type === INGREDIENT.BUN);

      if (
        newBuns.length === currentBuns.length &&
        currentBuns.every((bun, index) => bun === newBuns[index])
      ) {
        return { cartItems: cartItems };
      }

      if (newBuns.length > 0) {
        const newIngredients = [...cartItems].map(
          (obj) => newBuns.find((o) => o._id !== obj._id && o.type === obj.type) || obj,
        );

        return { cartItems: newIngredients };
      } else {
        const first = [...cartItems].slice(0, -1);
        const last = [...cartItems].pop();

        return {
          cartItems: [...first, ingredient, last],
        };
      }
    }

    default:
      throw new Error(`Unknown action type: ${type}`);
  }
};
