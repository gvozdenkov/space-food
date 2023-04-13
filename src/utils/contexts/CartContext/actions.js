export const actions = {
  ADD_INGREDIENT: 'ADD_INGREDIENT',
  REMOVE_INGREDIENT: 'REMOVE_INGREDIENT',
};

export const addIngredient = ({ ingredient }) => ({
  type: actions.ADD_INGREDIENT,
  ingredient,
});
