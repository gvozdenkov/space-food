export const actions = {
  ADD_INGREDIENT: 'ADD_INGREDIENT',
  REMOVE_INGREDIENT: 'REMOVE_INGREDIENT',
  GET_TOTAL_PRICE: 'GET_TOTAL_PRICE',
};

export const addIngredient = ({ ingredient }) => ({
  type: actions.ADD_INGREDIENT,
  ingredient,
});

export const getTotalPrice = () => ({
  type: actions.GET_TOTAL_PRICE,
});
