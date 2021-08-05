import React, { useState } from 'react'
import OrderList from '../OrderList'
import Pagination from '../Pagination'

import styles from './index.module.css'

function MyPageBody() {
  const [currentPage, setCurrentPage] = useState(1)

  const onChangePage = (page) => {
    setCurrentPage(page)
  }

  return (
    <div className={styles.container}>
      <OrderList page={currentPage - 1} />
      <div className={styles.pagination}>
        <Pagination currentPage={currentPage} onChange={onChangePage} />
      </div>
    </div>
  )
}

export default MyPageBody
