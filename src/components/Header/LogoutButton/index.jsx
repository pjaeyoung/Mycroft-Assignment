import React from 'react'
import { useHistory } from 'react-router-dom'
import { useAuth } from '../../../hooks'

import styles from '../index.module.css'

function LogoutButton() {
  const { logout } = useAuth()

  const history = useHistory()
  const onClickLogoutButton = async () => {
    await logout()
    history.push('/')
  }
  return (
    <button className={styles.navItem} onClick={onClickLogoutButton}>
      로그아웃
    </button>
  )
}

export default LogoutButton
