import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'

import { emailPattern } from '../utils/regex'
import {
  Form,
  InputGroup,
  Label,
  LabelError,
  Input,
  SubmitButton,
  FormHelp,
} from './Form'

const LoginForm = () => {
  const { register, handleSubmit, errors } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <div>
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

        <SubmitButton type='submit' value='Login' />

        <FormHelp>
          New here? <Link to='/register'>Register yourself</Link>
        </FormHelp>
      </Form>
    </div>
  )
}

export default LoginForm
