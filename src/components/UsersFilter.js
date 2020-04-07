import React from 'react'
import styled from '@xstyled/emotion'

import { Label, Input } from '../components/Form'

const UsersFilterStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`

const UsersFilter = () => {
  return (
    <UsersFilterStyled>
      <Label htmlFor='filter'>Filter users by name</Label>
      <Input name='filter' type='text' placeholder='Keyword' />
    </UsersFilterStyled>
  )
}

export default UsersFilter
