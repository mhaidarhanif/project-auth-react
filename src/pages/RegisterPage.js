import React from 'react'

import Page from '../components/Page'

const RegisterPage = () => {
  return (
    <Page>
      <h2>Register</h2>

      <form>
        <input type='text' placeholder='Your Name' />
        <input type='email' placeholder='email@example.com' />
        <input type='password' placeholder='**********' />
        <input type='submit' value='Register' />
      </form>
    </Page>
  )
}

export default RegisterPage
