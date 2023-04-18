import { actions } from './actions';

export const reducer = ({ ingredients }, { type, id }) => {
  switch (type) {
    case actions.SELECT_INGREDIENT: {
      return { ingredients: ingredients.find((ingredient) => ingredient._id === id) };
    }

    default:
      throw new Error(`Unknown action type: ${type}`);
  }
};
