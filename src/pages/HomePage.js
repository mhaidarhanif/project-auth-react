import React from 'react'
import { Link } from 'react-router-dom'

import Page from '../components/Page'

const HomePage = () => {
  return (
    <Page title='Welcome to Project Auth React'>
      <p>
        Please <Link to='/register'>register</Link> or{' '}
        <Link to='/login'>login</Link> to see the{' '}
        <Link to='/dashboard'>dashboard</Link>.
      </p>
    </Page>
  )
}

export default HomePage
