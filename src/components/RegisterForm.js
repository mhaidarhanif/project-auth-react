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

const RegisterForm = () => {
  const { register, handleSubmit, errors } = useForm()

  const onSubmit = (data) => {
    console.log(data)
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
              required: true,
              minLength: {
                value: 2,
                message: 'Name length is at least 2 characters',
              },
              maxLength: {
                value: 100,
                message: 'Name length is too long',
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

        <SubmitButton type='submit' value='Register' />

        <FormHelp>
          Already registered? <Link to='/login'>Login here</Link>
        </FormHelp>
      </Form>
    </div>
  )
}

export default RegisterForm
