import { createSlice } from '@reduxjs/toolkit';

import { fetchUsers, increaseUserFollowers, decreaseUserFollowers } from './users-operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
  foll: [],
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

      .addCase(increaseUserFollowers.pending, state => handlePending(state))
      .addCase(increaseUserFollowers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.foll = action.payload;
      })
      .addCase(increaseUserFollowers.rejected, (state, action) => handleRejected(state, action))

      .addCase(decreaseUserFollowers.pending, state => handlePending(state))
      .addCase(decreaseUserFollowers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.foll = action.payload;
      })
      .addCase(decreaseUserFollowers.rejected, (state, action) => handleRejected(state, action));
  },
});

export const usersReducer = usersSlice.reducer;
