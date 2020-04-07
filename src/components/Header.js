import React from 'react'
import { Link } from 'react-router-dom'
import styled from '@xstyled/emotion'

const HeaderStyled = styled.header`
  background: #111;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const LinkHome = styled(Link)`
  text-decoration: none;
`

const AppName = styled.h1`
  color: #fd3;
  margin: 0;
`

const Navigation = styled.nav``

const NavigationList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  li {
    text-transform: uppercase;
    margin: 0 10px;
    a {
      text-decoration: none;
      letter-spacing: 0.1em;
    }
  }
`

const Header = () => {
  return (
    <HeaderStyled>
      <LinkHome to='/'>
        <AppName>Project Auth React</AppName>
      </LinkHome>

      <Navigation>
        <NavigationList>
          <li>
            <Link to='/register'>Register</Link>
          </li>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          <li>
            <Link to='/users'>Users</Link>
          </li>
          <li>
            <Link to='/dashboard'>Dashboard</Link>
          </li>
        </NavigationList>
      </Navigation>
    </HeaderStyled>
  )
}

export default Header
