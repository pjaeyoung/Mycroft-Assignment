import React from 'react'
import { Field } from 'formik'
import styles from './index.module.css'
import classNames from 'classnames'

function AuthInput({
  name,
  existingError = false,
  type,
  disabled,
  placeholder,
  maxLength,
  validate,
  children,
}) {
  return (
    <label className={styles.label}>
      {children}
      <Field
        name={name}
        className={classNames(styles.input, {
          [`${styles.error}`]: existingError,
        })}
        type={type}
        placeholder={placeholder}
        maxLength={maxLength}
        disabled={disabled}
        validate={validate}
      />
    </label>
  )
}

export default AuthInput
