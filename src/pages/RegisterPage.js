import React from 'react'
import { Redirect } from 'react-router-dom'

import Page from '../components/Page'
import RegisterForm from '../components/RegisterForm'

import { checkIsAuthenticated } from '../utils/auth'

const RegisterPage = () => {
  const isAuthenticated = checkIsAuthenticated()

  return (
    <Page title='Get Started'>
      {!isAuthenticated ? <RegisterForm /> : <Redirect to='/' />}
    </Page>
  )
}

export default RegisterPage
