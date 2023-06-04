import { configureStore } from '@reduxjs/toolkit';
import { burgerConstructorReducer } from '../services/burger-constructor-slice';
import { ingredientDetailsReducer } from '../services/ingredient-details-slice';
import { ordersReducer } from '../services/order-slice';
import { apiSlice } from './api/api-slice';
import { authReducer } from '../services/auth-slice';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { authApiSlice } from '../services/api/auth-api';

export const store = configureStore({
  reducer: {
    ingredientDetails: ingredientDetailsReducer,
    burgerConstructor: burgerConstructorReducer,
    orders: ordersReducer,

    [apiSlice.reducerPath]: apiSlice.reducer,
    [authApiSlice.reducerPath]: authApiSlice.reducer,
    auth: authReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([apiSlice.middleware, authApiSlice.middleware]),
});

setupListeners(store.dispatch);
