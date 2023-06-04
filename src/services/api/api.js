import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { serverConfig } from '../../utils/config';

export const api = createApi({
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
    createOrder: builder.mutation({
      query: (initialOrder) => ({
        url: '/orders',
        method: 'POST',
        body: initialOrder,
      }),
    }),
  }),
});

export const { useCreateOrderMutation } = api;
