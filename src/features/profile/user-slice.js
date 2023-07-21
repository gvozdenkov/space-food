import { createSlice } from '@reduxjs/toolkit';
import { PURGE } from 'redux-persist';

const initialState = {
  user: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { user } = action.payload;
      state.user = user;
    },

    removeUser: () => initialState,
  },

  // clear cached data with persistor.purge();
  extraReducers: (builder) => {
    builder.addCase(PURGE, () => {
      return initialState;
    });
  },
});

const userReducer = userSlice.reducer;

export const { setUser, removeUser } = userSlice.actions;

export const selectUser = (state) => state.user.user;

export { userReducer };
