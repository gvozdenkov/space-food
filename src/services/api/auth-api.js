import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { apiSlice } from '../../app/api/api-slice';
import { logOut } from '../auth-slice';

export const authApiSlice = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://norma.nomoreparties.space/api/auth' }),
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: ({ email, password, name }) => ({
        url: '/register',
        method: 'POST',
        body: { email, password, name },
      }),
    }),

    loginUser: builder.mutation({
      query: ({ email, password }) => ({
        url: '/login',
        method: 'POST',
        body: { email, password },
      }),
    }),

    logoutUser: builder.mutation({
      query: (refreshToken) => ({
        url: '/logout',
        method: 'POST',
        body: refreshToken,
      }),

      onQueryStarted: async (arg, { dispatch, queryFulfilled }) => {
        try {
          const { data } = await queryFulfilled;
          dispatch(logOut());
          setTimeout(() => {
            dispatch(apiSlice.util.resetApiState());
          }, 1000);
        } catch (err) {
          console.log(err);
        }
      },
    }),

    refresh: builder.mutation({
      query: (refreshToken) => ({
        url: '/token',
        method: 'POST',
        body: { token: refreshToken },
      }),
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useLogoutUserMutation,
  useRefreshMutation,
} = authApiSlice;
