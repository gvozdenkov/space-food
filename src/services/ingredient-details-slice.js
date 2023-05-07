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
    },

    unselected() {
      return {};
    },
  },
});

export const { selected, unselected } = ingredientDetailsSlice.actions;

const ingredientDetailsReducer = ingredientDetailsSlice.reducer;

export { ingredientDetailsReducer };
