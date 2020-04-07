import React from 'react'
import { Link } from 'react-router-dom'
import styled from '@xstyled/emotion'

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
  return (
    <Form>
      <FormGroup>
        <Label htmlFor='user-name'>Your name</Label>
        <Input
          name='user-name'
          type='text'
          placeholder='How your name will be displayed'
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor='user-email'>Email</Label>
        <Input name='user-email' type='email' placeholder='name@example.com' />
      </FormGroup>
      <FormGroup>
        <Label htmlFor='user-password'>Password</Label>
        <Input name='user-password' type='password' placeholder='**********' />
      </FormGroup>

      <SubmitButton type='submit' value='Register' />

      <FormHelp>
        Already registered? <Link to='/login'>Login here</Link>
      </FormHelp>
    </Form>
  )
}

export default RegisterForm
