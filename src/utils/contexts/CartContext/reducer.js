import { INGREDIENT } from '../../constants';
import { actions } from './actions';

export const reducer = (state, { type, ingredient }) => {
  switch (type) {
    case actions.ADD_INGREDIENT: {
      // User can only replace buns on top and bottom
      if (ingredient.type === INGREDIENT.BUN && ingredient._id !== state.buns[0]._id) {
        return { ...state, buns: [ingredient, ingredient] };
      } else if (ingredient.type === INGREDIENT.BUN && ingredient._id === state.buns[0]._id) {
        return state;
      }

      return { ...state, ingredients: [...state.ingredients, ingredient] };
    }

    default:
      throw new Error(`Unknown action type: ${type}`);
  }
};
