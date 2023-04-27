export const actions = {
  ADD_INGREDIENT: 'ADD_INGREDIENT',
  REMOVE_INGREDIENT: 'REMOVE_INGREDIENT',
};

export const addIngredientAction = ({ ingredient }) => ({
  type: actions.ADD_INGREDIENT,
  ingredient,
});
