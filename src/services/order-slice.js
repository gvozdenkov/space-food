import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  orders: [],
};

export const activeOrdersSlice = createSlice({
  name: 'activeOrders',
  initialState,
  reducers: {
    orderCreated(state, action) {
      state.orders.push(action.payload);
    },
  },
});

export const { orderCreated } = activeOrdersSlice.actions;

const activeOrderReducer = activeOrdersSlice.reducer;

export { activeOrderReducer };
