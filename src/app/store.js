import { configureStore } from '@reduxjs/toolkit';
import { burgerConstructorReducer } from '../features/burger-constructor/burger-constructor-slice';
import { ingredientDetailsReducer } from '../features/ingredient-details/ingredient-details-slice';
import { apiSlice } from '../features/api/api-slice';
import { ordersReducer } from '../features/order/order-slice';

export const store = configureStore({
  reducer: {
    ingredientDetails: ingredientDetailsReducer,
    burgerConstructor: burgerConstructorReducer,
    orders: ordersReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});
