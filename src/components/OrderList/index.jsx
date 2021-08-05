import React from 'react'
import Loader from 'react-loader-spinner'
import OrderItem from '../OrderItem'

import { useOrders } from '../../hooks'

import { NO_ORDERS_FOUND } from '../../constants'
import FetchErrorMessage from '../FetchErrorMessage'

import styles from './index.module.css'

function OrderList() {
  const { orders, isLoading, existingError } = useOrders()

  if (isLoading) {
    return <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
  }

  if (existingError) {
    return <FetchErrorMessage errorMessage={NO_ORDERS_FOUND} />
  }

  return (
    <ul className={styles.container}>
      {orders.map((anOrder, index) => (
        <OrderItem key={index} id={anOrder.id} itemName={anOrder.itemName} />
      ))}
    </ul>
  )
}

export default OrderList
