import React from 'react'
import { Redirect } from 'react-router-dom'

import Page from '../components/Page'
import UsersList from '../components/UsersList'

import { checkIsAuthenticated } from '../utils/auth'

const UsersPage = () => {
  const isAuthenticated = checkIsAuthenticated()

  return (
    <Page title='All Users'>
      {isAuthenticated ? <UsersList /> : <Redirect to='/login' />}
    </Page>
  )
}

export default UsersPage
