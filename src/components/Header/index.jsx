import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../../hooks'
import LogoutButton from './LogoutButton'

import styles from './index.module.css'

function Header() {
  const { existingToken } = useAuth()

  return (
    <header className={styles.header}>
      <img
        className={styles.logo}
        src={`${process.env.PUBLIC_URL}/images/logo.svg`}
        alt="logo"
        width={50}
        height={50}
      />
      <nav>
        <ul className={styles.nav}>
          <li>
            <NavLink
              exact
              to="/"
              className={styles.navItem}
              activeClassName={styles.active}>
              서비스
            </NavLink>
          </li>
          <li>
            <NavLink
              to={existingToken ? '/mypage/order' : '/sign-up'}
              className={styles.navItem}
              activeClassName={styles.active}>
              {existingToken ? '마이페이지' : '회원가입'}
            </NavLink>
          </li>
          <li>
            {existingToken ? (
              <LogoutButton />
            ) : (
              <NavLink
                to="/login"
                className={styles.navItem}
                activeClassName={styles.active}>
                로그인
              </NavLink>
            )}
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
