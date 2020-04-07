import React from 'react'
import styled from '@xstyled/emotion'

import UsersFilter from '../components/UsersFilter'
import UsersList from '../components/UsersList'

const UsersPanelStyled = styled.div`
  min-width: 500px;
`

const UsersPanel = () => {
  return (
    <UsersPanelStyled>
      <UsersFilter></UsersFilter>
      <UsersList></UsersList>
    </UsersPanelStyled>
  )
}

export default UsersPanel
