import { createSlice, nanoid } from '@reduxjs/toolkit';
import { INGREDIENT } from '../../../utils/constants';
import { arrayMove } from '@dnd-kit/sortable';

const initialState = {
  bun: {},
  ingredients: [],
  orderItems: [],
  totalPrice: 0,
};

const setOrderItems = (state) => {
  return [state.bun, ...state.ingredients, state.bun];
};

const findIndex = (state, id) => {
  const element = state.ingredients.find((element) => element._itemId === id);
  return state.ingredients.indexOf(element);
};

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    ingredientAdded: {
      reducer(state, action) {
        if (action.payload.type === INGREDIENT.BUN && action.payload._id !== state.bun._id) {
          state.bun = action.payload;
          state.orderItems = setOrderItems(state);
        } else if (action.payload.type !== INGREDIENT.BUN) {
          state.ingredients.push(action.payload);

          state.orderItems = setOrderItems(state);
        }
      },

      prepare(ingredient) {
        return {
          payload: {
            type: ingredient.type,
            thumbnail: ingredient.image_mobile,
            text: ingredient.name,
            price: ingredient.price,
            _id: ingredient._id,
            _itemId: nanoid(),
          },
        };
      },
    },

    ingredientRemoved(state, action) {
      const deletedId = action.payload;

      state.ingredients = state.ingredients.filter((item) => item._itemId !== deletedId);
      state.orderItems = setOrderItems(state);
    },

    totalPriceCaluclated(state, action) {
      const ingredientsPrice = state.ingredients.reduce((total, item) => (total += item.price), 0);
      const bunPrice = Object.keys(state.bun).length !== 0 ? state.bun.price * 2 : 0;

      state.totalPrice = ingredientsPrice + bunPrice;
    },

    ingredientMoved: {
      reducer(state, action) {
        const { activeId, overId } = action.payload;
        const activeIndex = findIndex(state, activeId);
        const overIndex = findIndex(state, overId);
        state.ingredients = arrayMove(state.ingredients, activeIndex, overIndex);
        state.orderItems = setOrderItems(state);
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

    orderReseted(state, action) {
      state.bun = {};
      state.ingredients = [];
      state.orderItems = setOrderItems(state);
    },
  },
});

export const {
  ingredientAdded,
  ingredientRemoved,
  totalPriceCaluclated,
  ingredientMoved,
  orderReseted,
} = orderSlice.actions;

const orderReducer = orderSlice.reducer;

export const selectOrder = (state) => state.order;
export const selectOrderIngredients = (state) => state.order.ingredients;

export { orderReducer };
