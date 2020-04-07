import React from 'react'
import { Link } from 'react-router-dom'

import Page from '../components/Page'

const HomePage = () => {
  return (
    <Page>
      <h2>Welcome to Project Auth React</h2>
      <h3>
        Please <Link to='/register'>register</Link> or{' '}
        <Link to='/login'>login</Link> to see the{' '}
        <Link to='/dashboard'>dashboard</Link>.
      </h3>
    </Page>
  )
}

export default HomePage
