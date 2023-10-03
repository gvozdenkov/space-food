import { PayloadAction, createSlice, nanoid } from '@reduxjs/toolkit';
import { type Cart } from './types';
import { Ingredient } from '#api/ingredients.types';
// import { arrayMove } from '@dnd-kit/sortable';

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

// const findIndex = (state, id) => {
//   const element = state.ingredients.find((element) => element._itemId === id);
//   return state.ingredients.indexOf(element);
// };

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // setDragTarget(state, action) {
    //   const { type, id } = action.payload;

    //   state.dragTarget = { type, id };
    // },

    // removeDragTarget(state, action) {
    //   state.dragTarget = null;
    // },

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

    ingredientRemoved(state, action) {
      const deletedId = action.payload;
      state.ingredients = state.ingredients.filter((item) => item.uuid !== deletedId);
      state.cartItems = setCartItems(state);
    },

    // ingredientMoved: {
    //   reducer(state, action) {
    //     const { activeId, overId } = action.payload;
    //     const activeIndex = findIndex(state, activeId);
    //     const overIndex = findIndex(state, overId);
    //     // state.ingredients = arrayMove(state.ingredients, activeIndex, overIndex);
    //     state.cartItems = setCartItems(state);
    //   },

    //   prepare(activeId, overId) {
    //     return {
    //       payload: {
    //         activeId,
    //         overId,
    //       },
    //     };
    //   },
    // },

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
  // setDragTarget,
  // removeDragTarget,
  // ingredientMoved,
  cartReseted,
} = cartSlice.actions;

export const selectCartBun = (state: RootState) => state.cart.bun;
export const selectCartIngredients = (state: RootState) => state.cart.ingredients;
export const selectAllCartItems = (state: RootState) => state.cart.cartItems;
export const selectTotalPrice = (state: RootState) =>
  Object.values(state.cart.cartItems).reduce((acc, item) => acc + item.price, 0);
export const selectDragTarget = (state: RootState) => state.cart.dragTarget;
