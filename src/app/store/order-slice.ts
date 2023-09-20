import { IngredientType } from '#api/ingredients.types';
import { RootState } from '#app/store/store';
import { PayloadAction, createSlice, nanoid } from '@reduxjs/toolkit';
// import { arrayMove } from '@dnd-kit/sortable';

type Order = {
  bun: string | null;
  ingredients: {
    _id: string;
    uuid: string;
  }[];
  orderItems: string[];
  dragTarget: {
    type: IngredientType;
    id: string;
  } | null;
};

const initialState: Order = {
  bun: null,
  ingredients: [],
  orderItems: [],
  dragTarget: null,
};

const setOrderItems = (state: Order) => {
  const ingredientIds = [...state.ingredients].map((item) => item._id);

  return state.bun ? [state.bun, ...ingredientIds, state.bun] : [...ingredientIds];
};

// const findIndex = (state, id) => {
//   const element = state.ingredients.find((element) => element._itemId === id);
//   return state.ingredients.indexOf(element);
// };

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    // setDragTarget(state, action) {
    //   const { type, id } = action.payload;

    //   state.dragTarget = { type, id };
    // },

    // removeDragTarget(state, action) {
    //   state.dragTarget = null;
    // },

    bunAdded(state, action: PayloadAction<string>) {
      state.bun = action.payload;
      state.orderItems = setOrderItems(state);
    },

    ingredientAdded(state, action: PayloadAction<string>) {
      state.ingredients.push({
        _id: action.payload,
        uuid: nanoid(),
      });
      state.orderItems = setOrderItems(state);
    },

    // ingredientRemoved(state, action) {
    //   const deletedId = action.payload;

    //   state.ingredients = state.ingredients.filter((item) => item._itemId !== deletedId);
    //   state.orderItems = setOrderItems(state);
    // },

    // ingredientMoved: {
    //   reducer(state, action) {
    //     const { activeId, overId } = action.payload;
    //     const activeIndex = findIndex(state, activeId);
    //     const overIndex = findIndex(state, overId);
    //     // state.ingredients = arrayMove(state.ingredients, activeIndex, overIndex);
    //     state.orderItems = setOrderItems(state);
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

    orderReseted(state) {
      state.bun = null;
      state.ingredients = [];
      state.orderItems = [];
    },
  },
});

export const {
  bunAdded,
  ingredientAdded,
  // ingredientRemoved,
  // setDragTarget,
  // removeDragTarget,
  // ingredientMoved,
  orderReseted,
} = orderSlice.actions;

const orderReducer = orderSlice.reducer;

export const selectOrderBun = (state: RootState) => state.order.bun;
export const selectOrderIngredients = (state: RootState) => state.order.ingredients;
export const selectAllOrderItems = (state: RootState) => state.order.orderItems;
export const selectDragTarget = (state: RootState) => state.order.dragTarget;

export { orderReducer };
