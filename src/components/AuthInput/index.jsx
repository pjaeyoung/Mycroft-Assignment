import React from 'react'
import { Field } from 'formik'
import styles from './index.module.css'

function AuthInput({ name, type, disabled, placeholder, validate, children }) {
  return (
    <label className={styles.label}>
      {children}
      <Field
        name={name}
        className={styles.input}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        validate={validate}
      />
    </label>
  )
}

export default AuthInput
