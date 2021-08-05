import useSWR from 'swr'
import orderAPI from '../api/orderAPI'

function useOrders(id) {
  const { data, error } = useSWR(`order/${id}`, orderAPI.fetchOrder)

  return {
    order: data,
    isLoading: !error && !data,
    existingError: error,
  }
}

export default useOrders
