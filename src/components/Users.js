import React, { useState, useEffect } from 'react'
import styled from '@xstyled/emotion'
import axios from 'axios'
import MoonLoader from 'react-spinners/MoonLoader'

import fetch from '../utils/fetch'

const UsersContainer = styled.div``

const UsersSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const User = styled.div`
  background: #eee;
  padding: 1rem;
  margin: 0.5rem;
  border-radius: 0.5rem;
  min-width: 500px;
`

const UserName = styled.h3`
  margin: 0;
`

const UserEmail = styled.p`
  margin: 0;
`

const Users = () => {
  const [users, setUsers] = useState()

  useEffect(() => {
    const CancelToken = axios.CancelToken
    const source = CancelToken.source()

    const loadData = async () => {
      try {
        const response = await fetch.get('/users', {
          cancelToken: source.token,
        })
        const users = response.data.data
        setUsers(users)
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log('cancelled')
        } else {
          throw error
        }
      }
    }

    loadData()

    return () => {
      source.cancel()
    }
  }, [])

  return (
    <UsersContainer>
      {!users ? (
        <UsersSection>
          <MoonLoader size={50} color={'#333'} loading={!users}></MoonLoader>
          <p> Loading users...</p>
        </UsersSection>
      ) : (
        <UsersSection>
          {users.map((user, index) => {
            return (
              <User key={index}>
                <UserName>{user.name}</UserName>
                <UserEmail>{user.email}</UserEmail>
              </User>
            )
          })}
        </UsersSection>
      )}
    </UsersContainer>
  )
}

export default Users
