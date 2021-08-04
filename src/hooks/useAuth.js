import { useSelector } from 'react-redux'

function useAuth() {
  const { token, state, error } = useSelector((state) => state.auth)

  const existingToken = () => !!token
  return { token, state, error, existingToken }
}

export default useAuth
