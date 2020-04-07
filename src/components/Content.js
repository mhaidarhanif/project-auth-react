import React from 'react'
import styled from '@xstyled/emotion'

import ContentTitle from './ContentTitle'

const ContentStyled = styled.main`
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`

const Content = ({ title, children }) => {
  return (
    <ContentStyled>
      <ContentTitle>{title}</ContentTitle>

      {children}
    </ContentStyled>
  )
}

export default Content
