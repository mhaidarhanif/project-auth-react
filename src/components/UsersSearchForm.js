import React from 'react'
import styled from '@xstyled/emotion'
import { useForm } from 'react-hook-form'

import { Label, Input } from './Form'

const SearchForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`

const UsersSearchForm = ({ updateKeyword }) => {
  const { register, handleSubmit, errors } = useForm()

  const onSubmit = (data) => {
    updateKeyword(data.keyword)
  }

  const handleChange = (event) => {
    const keyword = event.target.value
    updateKeyword(keyword)
  }

  return (
    <SearchForm onSubmit={handleSubmit(onSubmit)}>
      <Label htmlFor='filter'>Search users by name</Label>
      <Input
        name='keyword'
        type='text'
        placeholder='Keyword'
        ref={register({ required: true })}
        onChange={handleChange}
      />

      {errors.keyword && <span>Keyword is required</span>}
    </SearchForm>
  )
}

export default UsersSearchForm
