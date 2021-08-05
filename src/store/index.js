import { configureStore } from '@reduxjs/toolkit'
import authReducer from './authSlice'
import { storage } from '../utils'

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
})

store.subscribe(() => {
  storage.setToken(store.getState().auth.token)
})
