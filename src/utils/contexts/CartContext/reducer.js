import { actions } from './actions';

export const reducer = (state, action) => {
  switch (action.type) {
    case actions.ADD_INGREDIENT:
      return {
        ingredients: [...state.ingredients, action.ingredient],
      };

    default:
      return state;
  }
};
