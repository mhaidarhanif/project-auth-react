import React from 'react'
import styled from '@xstyled/emotion'

import Header from './Header'
import Content from './Content'
import Footer from './Footer'

const PageStyled = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Page = ({ title, children }) => {
  return (
    <PageStyled>
      <Header />

      <Content title={title}>{children}</Content>

      <Footer />
    </PageStyled>
  )
}

export default Page
