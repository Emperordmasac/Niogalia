import { configureStore } from '@reduxjs/toolkit'

import userReducer from '@/src/redux/userSlice'

export const store = configureStore({
  reducer: {
    User: userReducer,
  },
})

// Infer the `RootState and the `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

// Inferes type: {posts: PostStates, commits:  CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
