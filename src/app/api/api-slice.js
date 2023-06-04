import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { logOut, setCredentials, setUser } from '../../services/auth-slice';
import Cookies from 'universal-cookie';
import { JWT } from '../../utils/config';
import { authApiSlice } from '../../services/api/auth-api';

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://norma.nomoreparties.space/api',
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token;

    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }

    return headers;
  },
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
  // console.log(args);
  // console.log(api);
  // console.log(extraOptions);
  const cookie = new Cookies();

  let result = await baseQuery(args, api, extraOptions);

  if (result.error && result?.error?.status === 401) {
    console.log('sending refresh token');

    const refreshToken = cookie.get(JWT.REFRESH);
    console.log('refresh token', refreshToken);

    const refreshResult = await api.dispatch(authApiSlice.endpoints.refresh.initiate(refreshToken));

    if (refreshResult?.data) {
      const refreshToken = refreshResult.data.refreshToken;
      const token = refreshResult.data.accessToken;
      const accessToken = token.split(' ')[1];

      console.log('new refresh token', refreshToken);
      console.log('new access token', accessToken);

      cookie.set(JWT.REFRESH, refreshToken);
      api.dispatch(setCredentials({ accessToken }));
      result = await baseQuery(args, api, extraOptions);

      if (result?.data) {
        const { user } = result.data;
        console.log('fetched user', user);
        api.dispatch(setUser({ user }));
      }
    } else {
      console.log('refresh token expired. Logout');
      api.dispatch(logOut());
    }
  }

  return result;
};

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithReauth,
  tagTypes: ['Orders'],
  endpoints: (builder) => ({}),
});
