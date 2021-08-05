import React from 'react'
import Loader from 'react-loader-spinner'

import styles from './index.module.css'

function Button({ text, disabled = false, loading = false, onClick }) {
  return (
    <button disabled={disabled} onClick={onClick} className={styles.button}>
      {loading ? (
        <Loader type="TailSpin" color="#00BFFF" height={20} width={20} />
      ) : (
        text
      )}
    </button>
  )
}

export default Button
