import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  token: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: () => initialState,
    setUser: (state, action) => {
      const { user, accessToken } = action.payload;
      state.user = user;
      state.token = accessToken;
    },
  },
});

export const { logout, setUser } = userSlice.actions;

export const selectCurrentUser = (state) => state.user.user;
export const selectToken = (state) => state.user.token;

const userReducer = userSlice.reducer;

export { userReducer };
