import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  orders: [],
};

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    orderCreated(state, action) {
      state.orders.push(action.payload);
    },
  },
});

export const { orderCreated } = orderSlice.actions;

const ordersReducer = orderSlice.reducer;

export { ordersReducer };
