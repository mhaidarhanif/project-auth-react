import React from 'react'

import Page from '../components/Page'
import { LinkButton } from '../components/Form'

const RegisterSuccessPage = () => {
  return (
    <Page title='Registration Successful'>
      <p>You might want to login now.</p>
      <LinkButton to='/login'>Login</LinkButton>
    </Page>
  )
}

export default RegisterSuccessPage
