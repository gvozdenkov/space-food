import { createSlice } from '@reduxjs/toolkit';
import { LOCAL_STORAGE } from '../utils/config';

const user = localStorage.getItem(LOCAL_STORAGE.USER)
  ? JSON.parse(localStorage.getItem(LOCAL_STORAGE.USER))
  : null;

const initialState = {
  accessToken: user ? user.accessToken : null,
  refreshToken: user ? user.refreshToken : null,
  user: {
    name: user ? user.user.name : null,
    email: user ? user.user.email : null,
  },
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    userLogedIn(state, action) {
      const { user, accessToken, refreshToken } = action.payload;
      state.user.name = user.name;
      state.user.email = user.email;
      state.accessToken = accessToken;
      state.refreshToken = refreshToken;
      localStorage.setItem(LOCAL_STORAGE.USER, JSON.stringify(action.payload));
    },

    userLogedOut(state) {
      state.accessToken = null;
      state.refreshToken = null;
      state.user.name = null;
      state.user.email = null;
      localStorage.removeItem(LOCAL_STORAGE.USER);
    },
  },
});

export const { userLogedIn, userLogedOut } = authSlice.actions;

const authReducer = authSlice.reducer;

export { authReducer };

export const selectCurrentUser = (state) => state.auth.user;
export const selectCurrentUserRefreshToken = (state) => state.auth.refreshToken;
