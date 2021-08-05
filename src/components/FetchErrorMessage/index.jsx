import React from 'react'
import styles from './index.module.css'

function FetchErrorMessage({ errorMessage }) {
  return <div className={styles.errorMessage}>{errorMessage}</div>
}

export default FetchErrorMessage
