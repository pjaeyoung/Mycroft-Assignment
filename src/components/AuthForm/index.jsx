import React from 'react'
import styles from './index.module.css'

function AuthForm({ children, onSubmit, onChange }) {
  return (
    <form className={styles.form} onChange={onChange} onSubmit={onSubmit}>
      {children}
    </form>
  )
}

export default AuthForm
