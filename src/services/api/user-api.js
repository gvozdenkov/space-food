import { apiSlice } from '../../app/api/api-slice';

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMe: builder.query({
      query: () => '/auth/user',
      validateStatus: (res, result) => {
        return res.status === 200 && !result.isError;
      },

      transformResponse: (response) => response.user,
    }),

    updateUser: builder.mutation({
      query: (user) => ({
        url: '/auth/user',
        method: 'PATCH',
        body: user,
      }), 
    }),
  }),
});

export const { useGetMeQuery, useUpdateUserMutation } = userApiSlice;
