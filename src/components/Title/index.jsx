import React from 'react'
import styles from './index.module.css'

function Title({ text }) {
  return <h1 className={styles.text}>{text}</h1>
}

export default Title
