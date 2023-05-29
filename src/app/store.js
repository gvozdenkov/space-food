import { configureStore } from '@reduxjs/toolkit';
import { burgerConstructorReducer } from '../services/burger-constructor-slice';
import { ingredientDetailsReducer } from '../services/ingredient-details-slice';
import { apiSlice } from '../services/api-slice';
import { ordersReducer } from '../services/order-slice';
import { authReducer } from '../services/auth-slice';
import { authApi } from '../services/api/auth-api';
import { userApi } from '../services/api/user-api';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    ingredientDetails: ingredientDetailsReducer,
    burgerConstructor: burgerConstructorReducer,
    orders: ordersReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([apiSlice.middleware, authApi.middleware, userApi.middleware]),
});
