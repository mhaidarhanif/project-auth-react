import React from 'react'
import { Link } from 'react-router-dom'

import Page from '../components/Page'

import { checkIsAuthenticated, getAuthenticatedUser } from '../utils/auth'

const HomePage = () => {
  const isAuthenticated = checkIsAuthenticated()
  const user = getAuthenticatedUser()

  return (
    <Page title='Welcome to Project Auth React'>
      {!isAuthenticated && (
        <div>
          <p>
            Please <Link to='/register'>register</Link> or{' '}
            <Link to='/login'>login</Link> to see the{' '}
            <Link to='/users'>users</Link> and{' '}
            <Link to='/dashboard'>dashboard</Link>.
          </p>
        </div>
      )}

      {isAuthenticated && <h2>Hello {user.name}!</h2>}

      <div>
        <p>The features:</p>
        <ul>
          <li>Register new user</li>
          <li>Login to existing user</li>
          <li>Dashboard to see user profile</li>
          <li>See all registered users</li>
          <li>Search users by name</li>
        </ul>
      </div>
    </Page>
  )
}

export default HomePage
