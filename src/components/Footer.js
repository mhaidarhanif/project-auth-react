import React from 'react'
import styled from '@xstyled/emotion'

const FooterStyled = styled.footer`
  text-align: center;
  padding: 1rem;
  text-transform: uppercase;
  background: #111;
  color: #fd3;
`

const Footer = () => {
  return (
    <FooterStyled>
      <small>2020 &copy; Project Auth React</small>
    </FooterStyled>
  )
}

export default Footer
