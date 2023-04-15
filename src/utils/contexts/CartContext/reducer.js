import { log } from '../../utils';
import { actions } from './actions';

export const reducer = ({ ingredients }, { type, ingredient }) => {
  switch (type) {
    case actions.ADD_INGREDIENT: {
      // User can only replace buns on top and bottom
      const newBuns = ingredient.type === 'bun' ? [ingredient, ingredient] : [];
      const currentBuns = ingredients.filter((ingredient) => ingredient.type === 'bun');

      if (
        newBuns.length === currentBuns.length &&
        currentBuns.every((bun, index) => bun === newBuns[index])
      ) {
        return { ingredients };
      }

      if (newBuns.length > 0) {
        const newIngredients = [...ingredients].map(
          (obj) => newBuns.find((o) => o._id !== obj._id && o.type === obj.type) || obj,
        );

        return { ingredients: newIngredients };
      } else {
        const first = [...ingredients].slice(0, -1);
        const last = [...ingredients].pop();

        return {
          ingredients: [...first, ingredient, last],
        };
      }
    }

    default:
      throw new Error(`Unknown action type: ${type}`);
  }
};
