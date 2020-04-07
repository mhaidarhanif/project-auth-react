import React from 'react'
import styled from '@xstyled/emotion'

const PageTitleStyled = styled.h2`
  text-transform: uppercase;
`

const PageTitle = ({ children }) => {
  return <PageTitleStyled>{children}</PageTitleStyled>
}

export default PageTitle
