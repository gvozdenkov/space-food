import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { serverConfig } from '../../utils/config';
import { userApi } from './user-api';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${serverConfig.baseUrl}/auth/`,
  }),

  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (data) => ({
        url: 'register',
        method: 'POST',
        body: data,
      }),
    }),

    loginUser: builder.mutation({
      query: (data) => ({
        url: 'login',
        method: 'POST',
        body: data,
        credentials: 'include',
      }),

      transformResponse: (res) => {
        const user = {
          user: res.user,
          accessToken: res.accessToken,
          refreshToken: res.refreshToken,
        };
        return user;
      },

      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          await dispatch(userApi.endpoints.getMe.initiate(null));
        } catch (err) {}
      },
    }),

    logoutUser: builder.mutation({
      query: (refreshToken) => ({
        url: 'logout',
        method: 'POST',
        body: refreshToken,
        // credentials: 'include',
      }),
    }),
  }),
});

export const { useRegisterUserMutation, useLoginUserMutation, useLogoutUserMutation } = authApi;
