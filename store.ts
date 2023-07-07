import { configureStore } from '@reduxjs/toolkit';

import userReducer from '@/src/redux/userSlice';
import cartReducer from '@/src/redux/cartSlice';

export const store = configureStore({
  reducer: {
    User: userReducer,
    Cart: cartReducer,
  },
});

// Infer the `RootState and the `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferes type: {posts: PostStates, commits:  CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
