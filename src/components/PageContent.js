import React from 'react'
import styled from '@xstyled/emotion'

const PageContentStyled = styled.main`
  max-width: 600px;
  margin: 0 auto;
  flex: 1;
`

const PageContent = ({ children }) => {
  return <PageContentStyled>{children}</PageContentStyled>
}

export default PageContent
