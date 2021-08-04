import React from 'react'
import { useHistory } from 'react-router-dom'
import { Title, Button } from '../../components'
import { NOT_ALLOWED_ORDER, ORDER_SUCCESS } from '../../constants'
import useAuth from '../../hooks/useAuth'
import Layout from '../../layout'

import styles from './index.module.css'

function Service() {
  const { existingToken } = useAuth()
  const history = useHistory()

  const onClickOrderButton = () => {
    if (existingToken()) {
      alertOrderSuccess()
    } else {
      alertOrderFail()
      history.push('/sign-up')
    }
  }
  return (
    <Layout>
      <Title text="서비스 화면" />
      <div className={styles.productContainer}>
        <img
          className={styles.productImg}
          src="/images/product.jpg"
          alt="product"
          width={300}
          height={250}
        />
        <Button text="주문하기" primary onClick={onClickOrderButton} />
      </div>
    </Layout>
  )
}

export default Service

const alertOrderSuccess = () => {
  alert(ORDER_SUCCESS)
}

const alertOrderFail = () => {
  alert(NOT_ALLOWED_ORDER)
}
