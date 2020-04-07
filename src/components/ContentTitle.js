import React from 'react'
import styled from '@xstyled/emotion'

const ContentTitleStyled = styled.h2`
  font-size: 2em;
`

const ContentTitle = ({ children }) => {
  return <ContentTitleStyled>{children}</ContentTitleStyled>
}

export default ContentTitle
