import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {
  FETCH_STATE,
  LOGIN_FAIL_MESSAGE,
  SIGNUP_FAIL_MESSAGE,
} from '../constants'
import { authAPI } from '../api'

const initialState = {
  state: FETCH_STATE.IDLE,
  error: null,
  token: null,
}

export const fetchLogin = createAsyncThunk(
  'auth/fetchLogin',
  async ({ email, password }) => {
    const response = await authAPI.fetchLogin({ email, password })
    return response.data
  },
)

export const fetchSignup = createAsyncThunk(
  'auth/fetchSignup',
  async ({ email, password, mobile }) => {
    const response = await authAPI.fetchSignup({ email, password, mobile })
    return response.data
  },
)

const callbackFulfilled = (state, action) => {
  state.token = action.payload.token
  state.state = FETCH_STATE.IDLE
}

const callbackRejected = (state, action) => {
  state.state = FETCH_STATE.FAIL
  const errorMessage = action.type.includes('fetchLogin')
    ? LOGIN_FAIL_MESSAGE
    : SIGNUP_FAIL_MESSAGE
  state.error = errorMessage
}

const callbackPending = (state) => {
  state.state = FETCH_STATE.PENDING
  state.token = null
  state.error = null
}

const asyncThunks = [fetchLogin, fetchSignup]

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.token = null
    },
  },
  extraReducers: (builder) => {
    asyncThunks.forEach((aAsyncThunk) => {
      builder
        .addCase(aAsyncThunk.fulfilled, callbackFulfilled)
        .addCase(aAsyncThunk.pending, callbackPending)
        .addCase(aAsyncThunk.rejected, callbackRejected)
    })
  },
})

export const { logout } = authSlice.actions

export default authSlice.reducer
