import React from 'react'

import Page from '../components/Page'
import { LinkButton } from '../components/Form'

import storage from '../utils/storage'

const LogoutPage = () => {
  storage.removeKey('token')

  return (
    <Page title='Logged Out'>
      <p>Want to go to the homepage?</p>
      <LinkButton to='/'>Go to the homepage</LinkButton>
      <p>Or login to another account?</p>
      <LinkButton to='/login'>Login again</LinkButton>
    </Page>
  )
}

export default LogoutPage
