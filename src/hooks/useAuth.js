import { useDispatch, useSelector } from 'react-redux'
import { fetchLogin, logout as logoutAction } from '../store/authSlice'

function useAuth() {
  const { token, state, error } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  const existingToken = () => !!token

  const login = ({ email, password }) => {
    dispatch(fetchLogin({ email, password }))
  }

  const logout = () => {
    dispatch(logoutAction())
  }
  return { token, state, error, existingToken, login, logout }
}

export default useAuth
