import React from 'react'
import { Title, Button } from '../../components'
import Layout from '../../layout'

import styles from './index.module.css'

function Service() {
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
        <Button text="주문하기" primary />
      </div>
    </Layout>
  )
}

export default Service
