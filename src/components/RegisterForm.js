import React, { useState } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { useForm } from 'react-hook-form'

import fetch from '../utils/fetch'
import { fullNamePattern, emailPattern } from '../utils/regex'
import {
  Form,
  InputGroup,
  Label,
  LabelError,
  Input,
  Button,
  FormHelp,
} from './Form'

import jwt from '../utils/jwt'

const RegisterForm = (props) => {
  const { register, handleSubmit, errors } = useForm()
  const [message, setMessage] = useState('')

  const onSubmit = async (userData) => {
    try {
      await fetch.post('/users/register', userData, {
        headers: {
          Authorization: `Bearer ${jwt.getToken()}`,
        },
      })
      props.setIsRegistered(true)
      // Don't use props.history.push() as
      // it causes race condition problem with the token retrieval
    } catch (error) {
      setMessage(error.response.data.message)
    }
  }

  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputGroup>
          <Label htmlFor='name'>Your name</Label>
          {errors.name && <LabelError>{errors.name.message}</LabelError>}
          <Input
            name='name'
            type='text'
            placeholder='Your Full Name'
            ref={register({
              required: {
                value: true,
                message: 'Full name is required',
              },
              minLength: {
                value: 2,
                message: 'Name length is at least 2 characters',
              },
              maxLength: {
                value: 100,
                message: 'Name length is too long',
              },
              pattern: {
                value: fullNamePattern,
                message: 'Only use alphabets',
              },
            })}
          />
        </InputGroup>

        <InputGroup>
          <Label htmlFor='email'>Email</Label>
          {errors.email && <LabelError>{errors.email.message}</LabelError>}
          <Input
            name='email'
            type='email'
            placeholder='name@example.com'
            ref={register({
              required: {
                value: true,
                message: 'Email is required',
              },
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
          {errors.password && (
            <LabelError>{errors.password.message}</LabelError>
          )}
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

        <Button type='submit' value='Register' />

        <FormHelp>
          Already registered? <Link to='/login'>Login here</Link>
        </FormHelp>
      </Form>
    </div>
  )
}

export default withRouter(RegisterForm)
