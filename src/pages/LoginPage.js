import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'

import Page from '../components/Page'
import LoginForm from '../components/LoginForm'

import { checkIsAuthenticated } from '../utils/auth'

const LoginPage = () => {
  const isAuthenticated = checkIsAuthenticated()
  const [isLoggedIn, setIsLoggedIn] = useState(isAuthenticated)

  return (
    <Page title='Login'>
      {!isAuthenticated && <LoginForm setIsLoggedIn={setIsLoggedIn} />}
      {isAuthenticated && isLoggedIn && <Redirect to='/' />}
    </Page>
  )
}

export default LoginPage
