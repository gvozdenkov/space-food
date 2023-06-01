import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { serverConfig } from '../../utils/config';
import { setUser } from '../user-slice';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${serverConfig.baseUrl}/auth/`,
  }),
  tagTypes: ['User'],

  endpoints: (builder) => ({
    getMe: builder.query({
      query: () => ({
        url: 'user',
      }),

      transformResponse: (response) => response.user,

      onQueryStarted: async (args, { dispatch, queryFulfilled }) => {
        try {
          const { user } = await queryFulfilled;
          dispatch(setUser(user));
        } catch (err) {}
      },
    }),

    updateUser: builder.mutation({
      query: (user) => ({
        url: 'user',
        method: 'PATCH',
        body: user,
      }),
    }),
  }),
});

export const { useGetMeQuery, useUpdateUserMutation } = userApi;
