import useSWR from 'swr'
import orderAPI from '../api/orderAPI'

function useOrders(page = 0) {
  const { data, error } = useSWR(`order?page=${page}`, orderAPI.fetchAllOrders)

  return {
    orders: data?.content,
    currentPage: data?.currentPage,
    totalPage: data?.totalPage,
    isLoading: !error && !data,
    existingError: error,
  }
}

export default useOrders
