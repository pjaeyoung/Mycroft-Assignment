import React from 'react'
import styles from './index.module.css'

function OrderItem({ id, itemName }) {
  return (
    <li className={styles.container}>
      <span>{id}</span>
      <span>{itemName}</span>
    </li>
  )
}

export default OrderItem
