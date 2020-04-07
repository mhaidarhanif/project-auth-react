import React from 'react'
import styled from '@xstyled/emotion'

import { Label, Input } from './Form'

const UsersSearchStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`

const UsersSearch = () => {
  return (
    <UsersSearchStyled>
      <Label htmlFor='filter'>Search users by name</Label>
      <Input name='filter' type='text' placeholder='Keyword' />
    </UsersSearchStyled>
  )
}

export default UsersSearch
