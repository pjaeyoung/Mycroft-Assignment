import React from 'react'
import styles from './index.module.css'

function OrderItem({ id, itemName, onClick }) {
  return (
    <li className={styles.container} onClick={onClick}>
      <span className={styles.orderId}>{id}</span>
      <span>{itemName}</span>
    </li>
  )
}

export default OrderItem
