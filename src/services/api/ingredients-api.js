import { createEntityAdapter, createSelector } from '@reduxjs/toolkit';
import { apiSlice } from '../../app/api/api-slice';

const ingredientsAdapter = createEntityAdapter({
  selectId: (ingredient) => ingredient._id,
});

const initialState = ingredientsAdapter.getInitialState();

export const ingredientsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getIngredients: builder.query({
      query: () => '/ingredients',
      validateStatus: (res, result) => {
        return res.status === 200 && !result.isError;
      },
      transformResponse: (responseData) =>
        ingredientsAdapter.setAll(initialState, responseData.data),
    }),
  }),
});

export const { useGetIngredientsQuery } = ingredientsApiSlice;

// return the query result object
const selectIngredientsResult = ingredientsApiSlice.endpoints.getIngredients.select();

// create memoized selector
const selectIngredientsData = createSelector(
  selectIngredientsResult,
  (ingredientsResult) => ingredientsResult.data,
);

// memoized selectors (uses Reselect lib) from .getSelectors()
export const {
  selectAll: selectAllIngredients,
  selectById: selectIngredientById,
  selectIds: selectIngredientIds,
} = ingredientsAdapter.getSelectors(selectIngredientsData);
