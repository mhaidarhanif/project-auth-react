import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'

import { emailPattern } from '../utils/regex'
import {
  Form,
  FormGroup,
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
        <FormGroup>
          <Label htmlFor='userName'>Your name</Label>
          {errors.userName && (
            <LabelError>{errors.userName.message}</LabelError>
          )}
          <Input
            name='userName'
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
        </FormGroup>
        <FormGroup>
          <Label htmlFor='userEmail'>Email</Label>
          {errors.userEmail && (
            <LabelError>{errors.userEmail.message}</LabelError>
          )}
          <Input
            name='userEmail'
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
        </FormGroup>
        <FormGroup>
          <Label htmlFor='userPassword'>Password</Label>
          {errors.userPassword && (
            <LabelError>{errors.userPassword.message}</LabelError>
          )}
          <Input
            name='userPassword'
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
        </FormGroup>

        <SubmitButton type='submit' value='Register' />

        <FormHelp>
          Already registered? <Link to='/login'>Login here</Link>
        </FormHelp>
      </Form>
    </div>
  )
}

export default RegisterForm
