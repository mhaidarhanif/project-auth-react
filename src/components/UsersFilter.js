import React from 'react'
import styled from '@xstyled/emotion'

import { Label, Input, SubmitButton } from '../components/Form'

const UsersSearchStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`

const UsersSearch = () => {
  return (
    <UsersSearchStyled>
      <Label htmlFor='filter'>Filter users by name</Label>
      <Input name='filter' type='text' placeholder='Keyword' />
      <SubmitButton type='submit' value='Filter' />
    </UsersSearchStyled>
  )
}

export default UsersSearch
