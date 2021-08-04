import React from 'react'
import { useHistory } from 'react-router-dom'
import {
  Title,
  Button,
  AuthForm,
  AuthInput,
  AuthFormErrorMessage,
} from '../../components'
import Layout from '../../layout'

import { useAuth } from '../../hooks'

import { Formik } from 'formik'
import {
  validateEmail,
  validateMobile,
  validatePassword,
  validatePasswordDoubleCheck,
} from '../../utils/validation'

function Signup() {
  const { signup, isLoading } = useAuth()
  const history = useHistory()

  const onSubmit = async (values) => {
    await signup(values)
    history.push('/')
  }

  return (
    <Layout>
      <Title text="회원가입 화면" />
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ handleSubmit, values, touched, errors }) => (
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
            <AuthInput
              type="password"
              name="passwordDoubleCheck"
              disabled={isLoading}
              maxLength={15}
              validate={validatePasswordDoubleCheck(values.password)}
              existingError={
                touched.passwordDoubleCheck && errors.passwordDoubleCheck
              }>
              비밀번호 확인
            </AuthInput>
            <AuthFormErrorMessage name="passwordDoubleCheck" />
            <AuthInput
              type="tel"
              name="mobile"
              placeholder="010-0000-0000"
              disabled={isLoading}
              validate={validateMobile}
              existingError={touched.mobile && errors.mobile}>
              연락처
            </AuthInput>
            <AuthFormErrorMessage name="mobile" />
            <Button text="가입하기" disabled={isLoading} loading={isLoading} />
          </AuthForm>
        )}
      </Formik>
    </Layout>
  )
}

export default Signup

const initialValues = {
  email: '',
  password: '',
  passwordDoubleCheck: '',
  mobile: '',
}
