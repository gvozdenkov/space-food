import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { serverConfig } from '../utils/config';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: serverConfig.baseUrl,
  }),
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

    loginUser: builder.mutation({
      query: ({ email, password }) => ({
        url: '/auth/login',
        method: 'POST',
        body: { email, password },
      }),
    }),

    createUser: builder.mutation({
      query: (user) => ({
        url: '/auth/register',
        method: 'POST',
        body: user,
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
  useCreateUserMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
  useLoginUserMutation,
} = apiSlice;
