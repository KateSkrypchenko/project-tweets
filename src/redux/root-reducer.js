import { combineReducers } from '@reduxjs/toolkit';

import { usersReducer } from './users/users-slice';

export const rootReducer = combineReducers({
  users: usersReducer,
});
