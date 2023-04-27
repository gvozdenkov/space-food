import { configureStore } from '@reduxjs/toolkit';
import { burgerConstructorReducer } from '../features/burger-constructor/burger-constructor-slice';
import { ingredientDetailsReducer } from '../features/ingredient-details/ingredient-details-slice';
import { ingredientsReducer } from '../features/ingredients/ingredients-slice';

export const store = configureStore({
  reducer: {
    ingredients: ingredientsReducer,
    ingredientDetails: ingredientDetailsReducer,
    burgerConstructor: burgerConstructorReducer,
  },
});
