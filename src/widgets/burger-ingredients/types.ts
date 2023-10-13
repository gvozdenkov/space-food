import { IngredientType } from '#shared/api/types';

export type IngrediensByTypes = {
  title: string;
  type: IngredientType;
  ingredientIds: string[];
};
