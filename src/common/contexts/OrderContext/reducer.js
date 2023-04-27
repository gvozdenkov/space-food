import { actions } from './actions';

export const reducer = (state, {type, order}) => {
  switch (type) {
    case actions.ADD_ORDER: {
      const orders = [...state.orders, order];
      return { orders };
    }

    default:
      throw new Error(`Unknown action type: ${type}`);
  }
};
