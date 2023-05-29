import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { serverConfig } from '../utils/config';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: serverConfig.baseUrl,
  }),
  prepareHeaders: (headers, { getState }) => {
    const accessToken = getState().auth.accessToken;
    console.log('accessToken:', accessToken);
    if (accessToken) {
      headers.set('authorization', `Bearer ${accessToken}`);
    }
    return headers;
  },
  endpoints: (builder) => ({
    getIngredients: builder.query({
      query: () => 'ingredients',
    }),

    createOrder: builder.mutation({
      query: (initialOrder) => ({
        url: '/orders',
        method: 'POST',
        body: initialOrder,
      }),
    }),

    forgotPassword: builder.mutation({
      query: (email) => ({
        url: '/password-reset',
        method: 'POST',
        body: email,
      }),
    }),

    resetPassword: builder.mutation({
      query: (data) => ({
        url: '/password-reset/reset',
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const {
  useGetIngredientsQuery,
  useCreateOrderMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
} = apiSlice;
