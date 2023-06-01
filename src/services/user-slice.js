import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: () => initialState,
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { logout, setUser } = userSlice.actions;

export const selectCurrentUser = (state) => state.user.user;

const userReducer = userSlice.reducer;

export { userReducer };
