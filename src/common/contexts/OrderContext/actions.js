export const actions = {
  ADD_ORDER: 'ADD_ORDER',
};

export const addOrderAction = (order) => ({
  type: actions.ADD_ORDER,
  order,
});
