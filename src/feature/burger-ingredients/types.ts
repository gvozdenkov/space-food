import { Ingredient, IngredientType } from '#api/ingredients.types';

export type IngrediensByTypes = {
  title: string;
  type: IngredientType;
  list: Ingredient[];
};
