import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { serverConfig } from '../../utils/config';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: serverConfig.baseUrl,
  }),
  endpoints: (builder) => ({
    getIngredients: builder.query({
      query: () => 'ingredients',
    }),
  }),
});

export const { useGetIngredientsQuery } = apiSlice;
