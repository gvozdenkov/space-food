import { createSlice, nanoid } from '@reduxjs/toolkit';
import { INGREDIENT } from '../utils/constants';
import { LOCAL_STORAGE } from '../utils/config';
import { findConstructorIngredient } from '../utils/utils';

const bun = localStorage.getItem(LOCAL_STORAGE.CONSTRUCTOR_BUN)
  ? JSON.parse(localStorage.getItem(LOCAL_STORAGE.CONSTRUCTOR_BUN))
  : {};

const ingredients = localStorage.getItem(LOCAL_STORAGE.CONSTRUCTOR_INGREDIENTS)
  ? JSON.parse(localStorage.getItem(LOCAL_STORAGE.CONSTRUCTOR_INGREDIENTS))
  : [];

const constructorItems = [bun, ...ingredients, bun];

const initialState = {
  bun,
  ingredients,
  constructorItems,
  totalPrice: 0,
};

const setConstructorItems = (state) => {
  return [state.bun, ...state.ingredients, state.bun];
};

const setLocalStorageIngredients = (state) => {
  localStorage.setItem(LOCAL_STORAGE.CONSTRUCTOR_INGREDIENTS, JSON.stringify(state.ingredients));
};

export const burgerConstructorSlice = createSlice({
  name: 'burgerConstructor',
  initialState,
  reducers: {
    ingredientAdded: {
      reducer(state, action) {
        if (action.payload.type === INGREDIENT.BUN && action.payload._id !== state.bun._id) {
          state.bun = action.payload;
          localStorage.setItem(LOCAL_STORAGE.CONSTRUCTOR_BUN, JSON.stringify(state.bun));
        } else if (action.payload.type !== INGREDIENT.BUN) {
          state.ingredients.push(action.payload);
          setLocalStorageIngredients(state);
        }

        state.constructorItems = setConstructorItems(state);
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
            _itemId: nanoid(),
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
        (item) => item._itemId !== action.payload._itemId,
      );

      state.constructorItems = setConstructorItems(state);

      setLocalStorageIngredients(state);
    },

    totalPriceCaluclated(state, action) {
      const ingredientsPrice = state.ingredients.reduce((total, item) => (total += item.price), 0);

      const bunPrice = Object.keys(state.bun).length !== 0 ? state.bun.price * 2 : 0;

      state.totalPrice = ingredientsPrice + bunPrice;
    },

    ingredientMoved(state, action) {
      const { id, toIndex } = action.payload;
      const { card, index: fromIndex } = findConstructorIngredient(state.ingredients, id);
      let rearrangedIngredients = state.ingredients;
      rearrangedIngredients.splice(fromIndex, 1);
      rearrangedIngredients.splice(toIndex, 0, card);
      state.ingredients = rearrangedIngredients;

      state.constructorItems = setConstructorItems(state);
      setLocalStorageIngredients(state);
    },
  },
});

export const { ingredientAdded, ingredientRemoved, totalPriceCaluclated, ingredientMoved } =
  burgerConstructorSlice.actions;

const burgerConstructorReducer = burgerConstructorSlice.reducer;

export { burgerConstructorReducer };
