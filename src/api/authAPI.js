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

function fetchSignup({ email, password, mobile }) {
  return axios.post(`${SERVER_URL}/sign-up`, {
    headers,
    data: {
      email,
      password,
      mobile,
    },
  })
}

const authAPI = {
  fetchLogin,
  fetchSignup,
}

export default authAPI
