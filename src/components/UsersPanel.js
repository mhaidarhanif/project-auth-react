import React from 'react'
import styled from '@xstyled/emotion'

import UsersSearch from '../components/UsersSearch'
import UsersList from '../components/UsersList'

const UsersPanelStyled = styled.div`
  min-width: 500px;
`

const UsersPanel = () => {
  return (
    <UsersPanelStyled>
      <UsersSearch></UsersSearch>
      <UsersList></UsersList>
    </UsersPanelStyled>
  )
}

export default UsersPanel
