import { Ingredient, IngredientType } from '#api/ingredients.types';

export type Cart = {
  bun: Ingredient | null;
  ingredients: {
    ingredient: Ingredient;
    uuid: string;
  }[];
  cartItems: Ingredient[];
  dragTarget: {
    type: IngredientType;
    id: string;
  } | null;
};
