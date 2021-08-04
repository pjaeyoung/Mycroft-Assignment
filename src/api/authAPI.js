import axios from 'axios'
import { SERVER_URL } from '../constants'

const headers = {
  'Content-type': 'application/json',
}

function fetchLogin({ email, password }) {
  return axios.post(`${SERVER_URL}/login`, {
    headers,
    data: {
      email,
      password,
    },
  })
}

const authAPI = {
  fetchLogin,
}

export default authAPI
