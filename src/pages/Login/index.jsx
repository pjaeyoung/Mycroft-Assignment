import React from 'react'
import { useHistory } from 'react-router-dom'

import {
  AuthForm,
  AuthFormErrorMessage,
  AuthInput,
  Button,
  Title,
} from '../../components'
import Layout from '../../layout'

import { Formik } from 'formik'
import { useAuth } from '../../hooks'
import { validateEmail, validatePassword } from '../../utils/validation'
import { LOGIN_FAIL_MESSAGE } from '../../constants'

function Login() {
  const { isLoading, login } = useAuth()
  const history = useHistory()
  const onSubmit = async ({ email, password }) => {
    const res = await login({ email, password })
    if (res.error) {
      alert(LOGIN_FAIL_MESSAGE)
    } else {
      history.push('/')
    }
  }

  return (
    <Layout>
      <Title text="로그인 화면" />
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ handleSubmit, touched, errors }) => (
          <AuthForm onSubmit={handleSubmit}>
            <AuthInput
              type="email"
              name="email"
              placeholder="user@example.com"
              disabled={isLoading}
              validate={validateEmail}
              existingError={touched.email && errors.email}>
              이메일
            </AuthInput>
            <AuthFormErrorMessage name="email" />
            <AuthInput
              type="password"
              name="password"
              placeholder="8~15 자를 입력하세요"
              disabled={isLoading}
              maxLength={15}
              validate={validatePassword}
              existingError={touched.password && errors.password}>
              비밀번호
            </AuthInput>
            <AuthFormErrorMessage name="password" />
            <Button text="로그인" disabled={isLoading} loading={isLoading} />
          </AuthForm>
        )}
      </Formik>
    </Layout>
  )
}

export default Login

const initialValues = {
  email: '',
  password: '',
}
