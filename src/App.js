import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import axios from 'axios'

import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import RegisterPage from './pages/RegisterPage'
import RegisterSuccessPage from './pages/RegisterSuccessPage'
import LoginPage from './pages/LoginPage'
import DashboardPage from './pages/DashboardPage'
import UsersPage from './pages/UsersPage'
import SearchPage from './pages/SearchPage'
import LogoutPage from './pages/LogoutPage'

import fetch from './utils/fetch'

const App = () => {
  // Check connection whether the Internet and backend is alive
  useEffect(() => {
    const CancelToken = axios.CancelToken
    const source = CancelToken.source()
    const checkConnection = async () => {
      try {
        await fetch.get('/', {
          cancelToken: source.token,
        })
        console.log('Connection is online')
      } catch (error) {
        if (axios.isCancel(error)) {
          console.error('cancelled')
        } else {
          console.error('Connection is offline')
          console.error(error)
        }
      }
    }
    checkConnection()
    return () => {
      source.cancel()
    }
  }, [])

  return (
    <Router>
      <div>
        <Switch>
          <Route path='/' exact>
            <HomePage />
          </Route>
          <Route path='/about'>
            <AboutPage />
          </Route>
          <Route path='/register' exact>
            <RegisterPage />
          </Route>
          <Route path='/register/success'>
            <RegisterSuccessPage />w
          </Route>
          <Route path='/login'>
            <LoginPage />
          </Route>
          <Route path='/dashboard'>
            <DashboardPage />
          </Route>
          <Route path='/users'>
            <UsersPage />
          </Route>
          <Route path='/search'>
            <SearchPage />
          </Route>
          <Route path='/logout'>
            <LogoutPage />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
