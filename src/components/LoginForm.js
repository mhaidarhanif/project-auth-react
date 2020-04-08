import React, { useState } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { useForm } from 'react-hook-form'

import fetch from '../utils/fetch'
import storage from '../utils/storage'
import { emailPattern } from '../utils/regex'

import {
  Form,
  InputGroup,
  Label,
  LabelError,
  Input,
  Button,
  FormHelp,
} from './Form'

const LoginForm = (props) => {
  const { register, handleSubmit, errors } = useForm()
  const [message, setMessage] = useState('')

  const onSubmit = async (userData) => {
    try {
      const response = await fetch.post('/users/login', userData)
      if (response) {
        storage.setKey('token', response.data.token)
        props.setIsLoggedIn(true)
        // Don't use props.history.push() as it causes race condition problem
      }
    } catch (error) {
      setMessage(error.response.data.message)
    }
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <InputGroup>
        <Label htmlFor='email'>Email</Label>
        {errors.email && <LabelError>{errors.email.message}</LabelError>}
        <Input
          name='email'
          type='email'
          placeholder='name@example.com'
          ref={register({
            required: true,
            minLength: {
              value: 3,
              message: 'Email address length is at least 3 characters',
            },
            pattern: {
              value: emailPattern,
              message: 'Email has to be valid',
            },
          })}
        />
      </InputGroup>

      <InputGroup>
        <Label htmlFor='password'>Password</Label>
        {errors.password && <LabelError>{errors.password.message}</LabelError>}
        <Input
          name='password'
          type='password'
          placeholder='**********'
          ref={register({
            required: {
              value: true,
              message: 'Password is required',
            },
            minLength: {
              value: 8,
              message: 'Password length need at least 8 characters',
            },
          })}
        />
      </InputGroup>

      {message && <FormHelp error>{message}</FormHelp>}

      <Button type='submit' value='Login' />

      <FormHelp>
        New here? <Link to='/register'>Register yourself</Link>
      </FormHelp>
    </Form>
  )
}

export default withRouter(LoginForm)
