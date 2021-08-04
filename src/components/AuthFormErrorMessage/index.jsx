import React from 'react'
import { ErrorMessage } from 'formik'
import styles from './index.module.css'

function AuthFormErrorMessage({ name }) {
  return (
    <ErrorMessage
      className={styles.errorMessage}
      name={name}
      component="label"
    />
  )
}

export default AuthFormErrorMessage
