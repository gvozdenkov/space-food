import { INGREDIENT_TYPES } from '#shared/config/const';

export type OrderStatus = 'pending' | 'cancel' | 'done';

export type Credentials = {
  name: string;
  email: string;
  password: string;
  refreshToken: string;
  token: string;
};

export type User = {
  name: string;
  email: string;
};

export type Order = {
  ingredients: string[];
  name: string;
  owner: string;
  status: OrderStatus;
  createdAt: string;
  updatedAt: string;
  __v: number;
  _id: string;
};

export type GetOrderRes = {
  success: boolean;
  orders: Order[];
};

export type FeedOrder = Omit<Order, '__v' | 'owner'> & { number: number };

export type IngredientType = (typeof INGREDIENT_TYPES)[number];

export type Ingredient = {
  readonly _id: string;
  readonly name: string;
  readonly type: IngredientType;
  readonly proteins: number;
  readonly fat: number;
  readonly carbohydrates: number;
  readonly calories: number;
  readonly price: number;
  readonly image: string;
  readonly image_mobile: string;
  readonly image_large: string;
  readonly __v: number;
};

export type Ingredients = {
  [key: string]: Ingredient;
};

export type IngredientsRes = {
  readonly data: Ingredient[];
  readonly success: boolean;
};
