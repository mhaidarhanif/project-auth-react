import React from 'react'

import Page from '../components/Page'

const LoginPage = () => {
  return (
    <Page>
      <h2>Login</h2>

      <form>
        <input type='email' placeholder='email@example.com' />
        <input type='password' placeholder='**********' />
        <input type='submit' value='Login' />
      </form>
    </Page>
  )
}

export default LoginPage
