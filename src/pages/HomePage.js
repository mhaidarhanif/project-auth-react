import React from 'react'
import { Link } from 'react-router-dom'

import Page from '../components/Page'

const HomePage = () => {
  return (
    <Page title='Welcome to Project Auth React'>
      <div>
        <p>
          Please <Link to='/register'>register</Link> or{' '}
          <Link to='/login'>login</Link> to see the{' '}
          <Link to='/users'>users</Link> and{' '}
          <Link to='/dashboard'>dashboard</Link>.
        </p>
        <p>
          The goal is that you can later see list of users in the dashboard.
        </p>
        <p>
          All features:
          <ul>
            <li>Register new user</li>
            <li>Login to existing user</li>
            <li>See all users</li>
            <li>Search users by name</li>
          </ul>
        </p>
      </div>
    </Page>
  )
}

export default HomePage
