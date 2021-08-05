import React from 'react'
import Loader from 'react-loader-spinner'
import OrderItem from '../OrderItem'

import { useOrders } from '../../hooks'

import { NO_ORDERS_FOUND } from '../../constants'
import FetchErrorMessage from '../FetchErrorMessage'

import styles from './index.module.css'
import { useHistory } from 'react-router-dom'

function OrderList({ page }) {
  const { orders, isLoading, existingError } = useOrders(page)

  const history = useHistory()
  const onClickOrderItem = (id) => () => {
    history.push(`/mypage/order/${id}`)
  }

  if (isLoading) {
    return <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
  }

  if (existingError) {
    return <FetchErrorMessage errorMessage={NO_ORDERS_FOUND} />
  }

  return (
    <ul className={styles.container}>
      {orders.map((anOrder, index) => (
        <OrderItem
          key={index}
          id={anOrder.id}
          itemName={anOrder.itemName}
          onClick={onClickOrderItem(anOrder.id)}
        />
      ))}
    </ul>
  )
}

export default OrderList
