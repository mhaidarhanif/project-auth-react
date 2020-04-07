import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import styled from '@xstyled/emotion'

import { emailPattern } from '../utils/regex'

const Form = styled.form`
  background: #eee;
  padding: 2rem;
  border-radius: 0.5rem;
  min-width: 500px;
  display: flex;
  flex-direction: column;
`

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`

const Label = styled.label`
  font-size: 1.2em;
  padding: 0.5em 0;
  font-weight: 700;
`

const LabelError = styled.span`
  color: red;
  font-weight: 400;
`

const Input = styled.input`
  font-size: 1.2em;
  padding: 1em;
  border-radius: 0.5rem;
  border: 3px solid #aaa;
  &:focus {
    outline: none;
    border-color: #fd3;
  }
`

const SubmitButton = styled.input`
  background-color: hsl(50, 100%, 60%);
  border: none;
  border-radius: 0.5rem;
  color: #000;
  font-size: 1.2em;
  padding: 1rem 2rem;
  text-align: center;
  text-decoration: none;
  margin: 1rem 0;
  cursor: pointer;
  transition-property: background-color;
  transition-duration: 0.5s;

  &:hover {
    background-color: hsl(50, 100%, 40%);
  }
  &:focus {
    background-color: hsl(50, 100%, 30%);
  }
`

const FormHelp = styled.p`
  text-align: center;
`

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
