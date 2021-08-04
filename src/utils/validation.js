import { FORM_VALIDATION } from '../constants'

function validateInput({ value, validateExtra, extraError }) {
  let error
  if (!value) {
    error = FORM_VALIDATION.REQUIRED
  } else if (!validateExtra(value)) {
    error = extraError
  }
  return error
}

function emailValidator(value) {
  return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
}

export function validateEmail(value) {
  return validateInput({
    value,
    validateExtra: emailValidator,
    extraError: FORM_VALIDATION.EMAIL,
  })
}

function passwordValidator(value) {
  return value.length > 8
}

export function validatePassword(value) {
  return validateInput({
    value,
    validateExtra: passwordValidator,
    extraError: FORM_VALIDATION.PASSWORD,
  })
}

function equalPassword({ password, value }) {
  return () => password === value
}

export function validatePasswordDoubleCheck(password) {
  return function (value) {
    return validateInput({
      value,
      validateExtra: equalPassword({ value, password }),
      extraError: FORM_VALIDATION.PASSWORD_DOUBLE_CHECK,
    })
  }
}

function mobileValidator(value) {
  return /^[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}$/.test(value)
}

export function validateMobile(value) {
  return validateInput({
    value,
    validateExtra: mobileValidator,
    extraError: FORM_VALIDATION.MOBILE,
  })
}
