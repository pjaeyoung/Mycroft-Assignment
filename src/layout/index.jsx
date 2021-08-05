import React from 'react'
import { Header } from '../components'
import styles from './index.module.css'

function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>{children}</main>
    </div>
  )
}

export default Layout
