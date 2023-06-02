import { createSlice } from '@reduxjs/toolkit';

import { fetchUsers, updateUserFollowers } from './users-operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchUsers.pending, state => handlePending(state))
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => handleRejected(state, action))

      .addCase(updateUserFollowers.pending, state => handlePending(state))
      .addCase(updateUserFollowers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(updateUserFollowers.rejected, (state, action) => handleRejected(state, action));
  },
});

export const usersReducer = usersSlice.reducer;
