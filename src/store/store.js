import { configureStore } from '@reduxjs/toolkit'
import { likesSlice } from './likes/LikesSlice'


export const store = configureStore({
  reducer: {
    likes: likesSlice.reducer,
  },
})