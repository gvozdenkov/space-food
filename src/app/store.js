import { configureStore } from '@reduxjs/toolkit';
import { burgerConstructorReducer } from '../services/burger-constructor-slice';
import { ingredientDetailsReducer } from '../services/ingredient-details-slice';
import { api } from '../services/api/api';
import { ordersReducer } from '../services/order-slice';
import { authApi } from '../services/api/auth-api';
import { userApi } from '../services/api/user-api';
import { userReducer } from '../services/user-slice';
import { apiSlice } from './api/api-slice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    ingredientDetails: ingredientDetailsReducer,
    burgerConstructor: burgerConstructorReducer,
    orders: ordersReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});
