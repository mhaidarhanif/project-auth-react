import React from 'react'

import Page from '../components/Page'
import { LinkButton } from '../components/Form'

import demoUsers from '../data/demoUsers.json'

const AboutPage = () => {
  return (
    <Page title='About'>
      <div>
        <h3>Welcome to Project Auth React</h3>
        <p>You can login with existing demo users mentioned here.</p>
      </div>
      <div>
        <h3>Demo Users</h3>
        <table>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
          {demoUsers.map((user, index) => {
            return (
              <tr>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td class='code'>{user.password}</td>
              </tr>
            )
          })}
        </table>
      </div>
      <LinkButton to='/login'>Login </LinkButton>
    </Page>
  )
}

export default AboutPage
