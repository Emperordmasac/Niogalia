import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface UserState {
  user: any
}

const initialState: UserState = {
  user: null,
}

export const userSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    loggedIn: (state, action: PayloadAction<any>) => {
      state.user = action.payload
    },
    loggedOut: (state) => {
      state.user = null
    },
  },
})

// Action creators are generated for each case reducer function
export const { loggedIn, loggedOut } = userSlice.actions

export default userSlice.reducer
