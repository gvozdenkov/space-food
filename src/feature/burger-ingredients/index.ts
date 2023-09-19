import { BurgerIngredients } from './components/burger-ingredients/burger-ingredients';
import { ingredientsLoader, useGetIngredientsQuery } from './api/use-ingredients-query';
import { IngrediensByTypes } from './types';
import { useBurgerIngredients } from './hooks/use-burger-ingredients';
import { IngredientDetails } from './components/ingredeint-details';

export {
  type IngrediensByTypes,
  useGetIngredientsQuery,
  BurgerIngredients,
  ingredientsLoader,
  useBurgerIngredients,
  IngredientDetails,
};
