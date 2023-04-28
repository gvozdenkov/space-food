import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { api } from '../../api/api';
import { FETCH_STATUS } from '../../utils/constants';

const initialState = {
  ingredients: [],
  status: FETCH_STATUS.IDLE,
  error: null,
};

export const fetchIngredients = createAsyncThunk('ingredients/fetchIngredients', async () => {
  const res = await api.getIngredients();
  return res.data;
});

export const ingredientsSlice = createSlice({
  name: 'ingredients',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchIngredients.pending, (state) => {
        state.status = FETCH_STATUS.LOADING;
      })
      .addCase(fetchIngredients.fulfilled, (state, action) => {
        state.status = FETCH_STATUS.SUCCESSED;
        state.ingredients = action.payload;
      })
      .addCase(fetchIngredients.rejected, (state, action) => {
        state.status = FETCH_STATUS.FAILED;
        state.error = action.error.message;
      });
  },
});

export const selectAllIngredients = (state) => state.ingredients.ingredients;

const ingredientsReducer = ingredientsSlice.reducer;

export { ingredientsReducer };
