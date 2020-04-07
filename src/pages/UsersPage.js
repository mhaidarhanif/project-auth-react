import React from 'react'

import Page from '../components/Page'
import UsersList from '../components/UsersList'

const UsersPage = () => {
  return (
    <Page title='All Users'>
      <UsersList></UsersList>
    </Page>
  )
}

export default UsersPage
