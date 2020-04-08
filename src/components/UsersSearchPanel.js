import React, { useState } from 'react'
import styled from '@xstyled/emotion'

import UsersSearchForm from './UsersSearchForm'
import Users from './Users'

import fetch from '../utils/fetch'
import jwt from '../utils/jwt'

const UsersPanelStyled = styled.div`
  width: 500px;
`

const UsersSearchPanel = ({ search }) => {
  const [users, setUsers] = useState()

  const updateKeyword = (keyword) => {
    const loadData = async (keyword) => {
      try {
        const response = await fetch.get(`/users/search?name=${keyword}`, {
          headers: {
            Authorization: `Bearer ${jwt.getToken()}`,
          },
        })
        const users = response.data.users
        setUsers(users)
      } catch (error) {
        console.error(error)
      }
    }

    // Only fetch if there is a keyword at least 1 character
    // Set list of users to empty if otherwise
    if (keyword) {
      loadData(keyword)
    } else {
      setUsers([])
    }
  }

  return (
    <UsersPanelStyled>
      <UsersSearchForm updateKeyword={updateKeyword} />
      {users && <Users users={users} />}
    </UsersPanelStyled>
  )
}

export default UsersSearchPanel
