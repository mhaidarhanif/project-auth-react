import styled from '@xstyled/emotion'

export const Form = styled.form`
  background: #eee;
  padding: 2rem;
  border-radius: 0.5rem;
  width: 500px;
  display: flex;
  flex-direction: column;
`

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
`

export const Label = styled.label`
  font-size: 1.2em;
  padding: 0.5em 0;
  font-weight: 700;
`

export const LabelError = styled.span`
  color: red;
  font-weight: 400;
`

export const Input = styled.input`
  font-size: 1.2em;
  padding: 1em;
  border-radius: 0.5rem;
  border: 3px solid #aaa;
  &:focus {
    outline: none;
    border-color: #fd3;
  }
`

export const SubmitButton = styled.input`
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

export const FormHelp = styled.p`
  text-align: center;
`
