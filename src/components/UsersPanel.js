import React, { useState } from 'react'
import styled from '@xstyled/emotion'

import UsersSearch from '../components/UsersSearch'
import UsersList from '../components/UsersList'

import fetch from '../utils/fetch'

const UsersPanelStyled = styled.div`
  width: 500px;
`

const UsersPanel = ({ search }) => {
  const [users, setUsers] = useState()

  const updateKeyword = (keyword) => {
    const loadData = async (keyword) => {
      try {
        const response = await fetch.get(`/users/search?name=${keyword}`)
        const users = response.data.data
        setUsers(users)
      } catch (error) {
        throw error
      }
    }

    loadData(keyword)
  }

  return (
    <UsersPanelStyled>
      <UsersSearch updateKeyword={updateKeyword} />
      {users && <UsersList users={users} />}
    </UsersPanelStyled>
  )
}

export default UsersPanel
