import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './index.module.css'

function Header() {
  return (
    <header className={styles.header}>
      <img
        className={styles.logo}
        src="/images/logo.svg"
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
              to="/sign-up"
              className={styles.navItem}
              activeClassName={styles.active}>
              회원가입
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className={styles.navItem}
              activeClassName={styles.active}>
              로그인
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
