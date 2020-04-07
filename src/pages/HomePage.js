import React from 'react'
import { Link } from 'react-router-dom'

import Page from '../components/Page'

const HomePage = () => {
  return (
    <Page title='Welcome to Project Auth React'>
      <h3>Welcome!</h3>
      <p>
        Please <Link to='/register'>register</Link> or{' '}
        <Link to='/login'>login</Link> to see the{' '}
        <Link to='/dashboard'>dashboard</Link>.
      </p>
      <p>The goal is that you can later see list of users in the dashboard.</p>
      <p>
        All features:
        <ul>
          <li>Register new user</li>
          <li>Login to existing user</li>
          <li>Get all users</li>
          <li>Get one user</li>
        </ul>
      </p>
    </Page>
  )
}

export default HomePage
