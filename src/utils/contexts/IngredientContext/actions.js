export const actions = {
  SELECT_INGREDIENT: 'SELECT_INGREDIENT',
};

export const selecteIngredient = (id) => ({
  type: actions.SELECT_INGREDIENT,
  id,
});
