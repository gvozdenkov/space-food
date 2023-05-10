import { createSlice, nanoid } from '@reduxjs/toolkit';
import { INGREDIENT } from '../utils/constants';
import { LOCAL_STORAGE } from '../utils/config';
import { arrayMove } from '@dnd-kit/sortable';

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

const findIndex = (state, id) => {
  const element = state.ingredients.find((element) => element._itemId === id);
  return state.ingredients.indexOf(element);
};

export const burgerConstructorSlice = createSlice({
  name: 'burgerConstructor',
  initialState,
  reducers: {
    ingredientAdded: {
      reducer(state, action) {
        if (action.payload.type === INGREDIENT.BUN && action.payload._id !== state.bun._id) {
          state.bun = action.payload;
          state.constructorItems = setConstructorItems(state);
          localStorage.setItem(LOCAL_STORAGE.CONSTRUCTOR_BUN, JSON.stringify(state.bun));
        } else if (action.payload.type !== INGREDIENT.BUN) {
          state.ingredients.push(action.payload);
          setLocalStorageIngredients(state);
          state.constructorItems = setConstructorItems(state);
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

      state.constructorItems = setConstructorItems(state);

      setLocalStorageIngredients(state);
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
        state.constructorItems = setConstructorItems(state);
        setLocalStorageIngredients(state);
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

    constructorReseted(state, action) {
      state.bun = {};
      state.ingredients = [];
      state.constructorItems = setConstructorItems(state);
      localStorage.removeItem(LOCAL_STORAGE.CONSTRUCTOR_BUN);
      localStorage.removeItem(LOCAL_STORAGE.CONSTRUCTOR_INGREDIENTS);
    },
  },
});

export const {
  ingredientAdded,
  ingredientRemoved,
  totalPriceCaluclated,
  ingredientMoved,
  constructorReseted,
} = burgerConstructorSlice.actions;

const burgerConstructorReducer = burgerConstructorSlice.reducer;

export { burgerConstructorReducer };
