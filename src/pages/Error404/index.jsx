import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

import styles from './index.module.css'

function Error404() {
  const location = useLocation()
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.errorMessage}>
        입력하신 주소({location.pathname})를 찾을 수 없습니다.
      </p>
      <NavLink className={styles.btnHome} to="/">
        서비스 화면으로 돌아가기
      </NavLink>
    </div>
  )
}

export default Error404
