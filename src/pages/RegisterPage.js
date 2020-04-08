import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'

import Page from '../components/Page'
import RegisterForm from '../components/RegisterForm'

import { checkIsAuthenticated } from '../utils/auth'

const RegisterPage = () => {
  const isAuthenticated = checkIsAuthenticated()
  const [isRegistered, setIsRegistered] = useState()

  return (
    <Page title='Get Started'>
      {!isAuthenticated && <RegisterForm setIsRegistered={setIsRegistered} />}
      {isRegistered && <Redirect to='/register/success' />}
    </Page>
  )
}

export default RegisterPage
