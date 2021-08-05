import React from 'react'
import { FetchErrorMessage, Title } from '../../../components'

import { useParams } from 'react-router-dom'

import { useOrder } from '../../../hooks'
import Loader from 'react-loader-spinner'
import { NO_ORDER_FOUND } from '../../../constants'

import styles from './index.module.css'

function MyPageDetail() {
  const { id } = useParams()
  const { existingError, isLoading, order } = useOrder(id)

  if (existingError) {
    return <FetchErrorMessage errorMessage={NO_ORDER_FOUND} />
  }

  if (isLoading) {
    return <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
  }

  return (
    <>
      <Title text="마이페이지 상세 화면" />
      <div className={styles.container}>
        <span className={styles.orderId}>{order.id}</span>
        <span className={styles.orderName}>{order.itemName}</span>
      </div>
    </>
  )
}

export default MyPageDetail
