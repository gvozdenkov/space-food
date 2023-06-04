import { apiSlice } from '../../app/api/api-slice';

export const resetApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    forgotPassword: builder.mutation({
      query: (email) => ({
        url: '/password-reset',
        method: 'POST',
        body: email,
      }),
    }),

    resetPassword: builder.mutation({
      query: ({ password, token }) => ({
        url: '/password-reset/reset',
        method: 'POST',
        body: { password, token },
      }),
    }),
  }),
});

export const { useForgotPasswordMutation, useResetPasswordMutation } = resetApiSlice;
