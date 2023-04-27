import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

export const ingredientDetailsSlice = createSlice({
  name: 'ingredient',
  initialState,
  reducers: {
    selected: {
      reducer(state, action) {
        return action.payload;
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
            __v: 0,
          },
        };
      },
    },

    unselected() {
      return {};
    },
  },
});

export const { selected, unselected } = ingredientDetailsSlice.actions;

const ingredientDetailsReducer = ingredientDetailsSlice.reducer;

export { ingredientDetailsReducer };
