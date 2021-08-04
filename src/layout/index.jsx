import React from 'react'
import { Header } from '../components'
import styles from './index.module.css'

function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.main}>{children}</div>
    </div>
  )
}

export default Layout
