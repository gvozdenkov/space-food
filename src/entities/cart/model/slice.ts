import { PayloadAction, createSelector, createSlice, nanoid } from '@reduxjs/toolkit';
import { arrayMove } from '@dnd-kit/sortable';
import { UniqueIdentifier } from '@dnd-kit/core';
import { type Cart } from './types';
import { Ingredient } from '#api/ingredients.types';

type CartSliceState = Cart;

const initialState: CartSliceState = {
  bun: null,
  ingredients: [],
  cartItems: [],
  dragTarget: null,
};

const setCartItems = (state: CartSliceState) => {
  const ingredients = [...state.ingredients].map((item) => item.ingredient);

  return state.bun ? [state.bun, ...ingredients, state.bun] : [...ingredients];
};

const findIndex = (state: CartSliceState, id: UniqueIdentifier) => {
  const element = state.ingredients.find((element) => element.uuid === id);

  if (element) {
    return state.ingredients.indexOf(element);
  }

  return undefined;
};

type IngredientMoved = {
  activeId: UniqueIdentifier;
  overId: UniqueIdentifier;
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setDragTarget(state, action) {
      const { type, id } = action.payload;

      state.dragTarget = { type, id };
    },

    removeDragTarget(state) {
      state.dragTarget = null;
    },

    bunAdded(state, action: PayloadAction<Ingredient>) {
      state.bun = action.payload;
      state.cartItems = setCartItems(state);
    },

    ingredientAdded(state, action: PayloadAction<Ingredient>) {
      state.ingredients.push({
        ingredient: action.payload,
        uuid: nanoid(),
      });
      state.cartItems = setCartItems(state);
    },

    ingredientRemoved(state, action: PayloadAction<string>) {
      const deletedId = action.payload;
      state.ingredients = state.ingredients.filter((item) => item.uuid !== deletedId);
      state.cartItems = setCartItems(state);
    },

    ingredientMoved: {
      reducer(state, action: PayloadAction<IngredientMoved>) {
        const { activeId, overId } = action.payload;
        const activeIndex = findIndex(state, activeId)!;
        const overIndex = findIndex(state, overId)!;
        state.ingredients = arrayMove(state.ingredients, activeIndex, overIndex);
        state.cartItems = setCartItems(state);
      },

      prepare(activeId, overId) {
        return {
          payload: {
            activeId,
            overId,
          },
        };
      },
    },

    cartReseted(state) {
      state.bun = null;
      state.ingredients = [];
      state.cartItems = [];
    },
  },
});

export const {
  bunAdded,
  ingredientAdded,
  ingredientRemoved,
  setDragTarget,
  removeDragTarget,
  ingredientMoved,
  cartReseted,
} = cartSlice.actions;

export const selectCartBun = (state: RootState) => state.cart.bun;
export const selectCartIngredients = (state: RootState) => state.cart.ingredients;
export const selectAllCartItems = (state: RootState) => state.cart.cartItems;
export const selectTotalPrice = (state: RootState) =>
  Object.values(state.cart.cartItems).reduce((acc, item) => acc + item.price, 0);

export const selectAllCartIds = createSelector([selectAllCartItems], (cartItems) =>
  cartItems.map((item) => item._id),
);

export const selectIsMinimalOrder = (state: RootState) =>
  Boolean(state.cart.bun?.name && state.cart.ingredients.length > 0);
export const selectDragTarget = (state: RootState) => state.cart.dragTarget;
