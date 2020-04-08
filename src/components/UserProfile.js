import React, { Fragment } from 'react'
import styled from '@xstyled/emotion'

import { getAuthenticatedUser } from '../utils/auth'

const User = styled.div`
  display: flex;
  align-items: center;
`

const UserAvatar = styled.img`
  background: #eee;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-right: 1rem;
`

const UserName = styled.h3`
  margin: 0;
  font-size: 2em;
`

const UserEmail = styled.p`
  margin: 0;
  font-size: 1.5em;
`

const UserProfile = () => {
  const user = getAuthenticatedUser()

  return (
    <User>
      {user && (
        <Fragment>
          <UserAvatar src='/assets/avatar.jpg' />
          <div>
            <UserName>{user.name}</UserName>
            <UserEmail>{user.email}</UserEmail>
          </div>
        </Fragment>
      )}
    </User>
  )
}

export default UserProfile
