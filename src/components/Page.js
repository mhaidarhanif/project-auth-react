import React from 'react'
import styled from '@xstyled/emotion'

import Header from './Header'
import PageTitle from './PageTitle'
import PageContent from './PageContent'
import Footer from './Footer'

const PageStyled = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Page = ({ children }) => {
  return (
    <PageStyled>
      <Header></Header>

      <PageTitle></PageTitle>
      <PageContent>{children}</PageContent>

      <Footer></Footer>
    </PageStyled>
  )
}

export default Page
