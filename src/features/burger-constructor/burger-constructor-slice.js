import { createSlice, nanoid } from '@reduxjs/toolkit';
import { INGREDIENT } from '../../utils/constants';
import { LOCAL_STORAGE } from '../../utils/config';

const initialState = {
  bun: localStorage.getItem(LOCAL_STORAGE.CART_BUN)
    ? JSON.parse(localStorage.getItem(LOCAL_STORAGE.CART_BUN))
    : {},
  ingredients: localStorage.getItem(LOCAL_STORAGE.CART_INGREDIENTS)
    ? JSON.parse(localStorage.getItem(LOCAL_STORAGE.CART_INGREDIENTS))
    : [],
  totalPrice: 0,
};

export const burgerConstructorSlice = createSlice({
  name: 'burgerConstructor',
  initialState,
  reducers: {
    ingredientAdded: {
      reducer(state, action) {
        if (action.payload.type === INGREDIENT.BUN && action.payload._id !== state.bun._id) {
          state.bun = action.payload;
          localStorage.setItem(LOCAL_STORAGE.CART_BUN, JSON.stringify(state.bun));
        } else if (action.payload.type !== INGREDIENT.BUN) {
          state.ingredients.push(action.payload);
          localStorage.setItem(LOCAL_STORAGE.CART_INGREDIENTS, JSON.stringify(state.ingredients));
        }
      },

      prepare({
        _id,
        name,
        type,
        proteins,
        fat,
        carbohydrates,
        calories,
        price,
        image,
        image_mobile,
        image_large,
        __v,
      }) {
        return {
          payload: {
            _id,
            constructorItemId: nanoid(),
            name,
            type,
            proteins,
            fat,
            carbohydrates,
            calories,
            price,
            image,
            image_mobile,
            image_large,
            __v,
          },
        };
      },
    },

    ingredientRemoved(state, action) {
      state.ingredients = state.ingredients.filter(
        (item) => item.constructorItemId !== action.payload.constructorItemId,
      );
      localStorage.setItem(LOCAL_STORAGE.CART_INGREDIENTS, JSON.stringify(state.ingredients));
    },

    getTotalPrice(state, action) {
      const ingredientsPrice = state.ingredients.reduce((total, item) => (total += item.price), 0);

      const bunPrice = state.bun.price * 2;

      state.totalPrice = ingredientsPrice + bunPrice;
    },
  },
});

export const { ingredientAdded, ingredientRemoved, getTotalPrice } = burgerConstructorSlice.actions;

const burgerConstructorReducer = burgerConstructorSlice.reducer;

export { burgerConstructorReducer };
