import { useDispatch, useSelector } from 'react-redux'
import { FETCH_STATE } from '../constants'
import {
  fetchLogin,
  fetchSignup,
  logout as logoutAction,
} from '../store/authSlice'
import { storage } from '../utils'

function useAuth() {
  const { token, state, error } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  const existingToken = !!token

  const login = ({ email, password }) => {
    return dispatch(fetchLogin({ email, password }))
  }

  const logout = () => {
    dispatch(logoutAction())
    storage.clearToken()
  }

  const signup = ({ email, password, mobile }) => {
    return dispatch(fetchSignup({ email, password, mobile }))
  }

  const isLoading = state === FETCH_STATE.PENDING

  return {
    token,
    state,
    error,
    isLoading,
    existingToken,
    login,
    logout,
    signup,
  }
}

export default useAuth
