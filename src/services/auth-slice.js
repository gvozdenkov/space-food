import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: null,
  user: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { accessToken } = action.payload;
      state.token = accessToken;
    },

    setUser: (state, action) => {
      const { user } = action.payload;
      state.user = user;
    },

    logOut: () => initialState,
  },
});

const authReducer = authSlice.reducer;

export const { setCredentials, setUser, logOut } = authSlice.actions;

export const selectCurrentToken = (state) => state.auth.token;
export const selectCurrentUser = (state) => state.auth.user;

export { authReducer };
