import React from 'react'

import Page from '../components/Page'
import UsersPanel from '../components/UsersPanel'

const DashboardPage = () => {
  return (
    <Page title='Dashboard'>
      <UsersPanel></UsersPanel>
    </Page>
  )
}

export default DashboardPage
