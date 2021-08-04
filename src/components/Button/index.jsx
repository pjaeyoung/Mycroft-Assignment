import React from 'react'
import classNames from 'classnames'
import styles from './index.module.css'

function Button({ text, primary = true, secondary = false, onClick }) {
  return (
    <button
      onClick={onClick}
      className={classNames(styles.button, {
        [`${styles.primary}`]: primary,
        [`${styles.secondary}`]: secondary,
      })}>
      {text}
    </button>
  )
}

export default Button