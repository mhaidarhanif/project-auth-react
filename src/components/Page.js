import React from 'react'

import Header from './Header'
import Footer from './Footer'

const Page = ({ children }) => {
  return (
    <div>
      <Header></Header>
      <main>{children}</main>
      <Footer></Footer>
    </div>
  )
}

export default Page
