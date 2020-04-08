import React from 'react'
import styled from '@xstyled/emotion'

import MoonLoader from 'react-spinners/MoonLoader'

const UsersContainer = styled.div``

const UsersSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const User = styled.div`
  background: #eee;
  margin: 0.5rem 0;
  border-radius: 0.5rem;
  width: 500px;
`

const UserProfile = styled.div`
  margin: 1rem;
`

const UserName = styled.h3`
  margin: 0;
`

const UserEmail = styled.p`
  margin: 0;
`

const Users = ({ users }) => {
  return (
    <UsersContainer>
      {!users ? (
        <UsersSection>
          <MoonLoader size={50} color={'#333'} loading={!users} />
          <p>Loading users...</p>
        </UsersSection>
      ) : (
        <UsersSection>
          {users.map((user, index) => {
            return (
              <User key={index}>
                <UserProfile>
                  <UserName>{user.name}</UserName>
                  <UserEmail>{user.email}</UserEmail>
                </UserProfile>
              </User>
            )
          })}
        </UsersSection>
      )}
    </UsersContainer>
  )
}

export default Users
