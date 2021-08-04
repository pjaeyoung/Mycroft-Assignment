import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { FETCH_STATE, LOGIN_FAIL_MESSAGE } from '../constants'
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

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLogin.fulfilled, (state, action) => {
        state.token = action.payload.token
        state.state = FETCH_STATE.IDLE
      })
      .addCase(fetchLogin.pending, (state, action) => {
        state.state = FETCH_STATE.PENDING
        state.token = null
        state.error = null
      })
      .addCase(fetchLogin.rejected, (state, action) => {
        state.state = FETCH_STATE.FAIL
        state.error = action.error?.message ?? LOGIN_FAIL_MESSAGE
      })
  },
})

export default authSlice.reducer
