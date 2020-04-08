import React from 'react'
import { Redirect } from 'react-router-dom'

import Page from '../components/Page'
import UserProfile from '../components/UserProfile'

import { checkIsAuthenticated } from '../utils/auth'

const DashboardPage = () => {
  const isAuthenticated = checkIsAuthenticated()

  return (
    <Page title='Dashboard'>
      {isAuthenticated ? <UserProfile /> : <Redirect to='/login' />}
    </Page>
  )
}

export default DashboardPage
