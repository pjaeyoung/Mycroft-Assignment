import axios from 'axios'
import { SERVER_URL } from '../constants'

const headers = {
  'Content-type': 'application/json',
}

function fetchAllOrders(path) {
  return axios.get(`${SERVER_URL}/${path}`, { headers }).then((res) => res.data)
}

function fetchOrder(path) {
  return axios.get(`${SERVER_URL}/${path}`, { headers }).then((res) => res.data)
}

const orderAPI = {
  fetchAllOrders,
  fetchOrder,
}

export default orderAPI
