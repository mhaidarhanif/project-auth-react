import React from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import HomePage from './pages/HomePage'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import DashboardPage from './pages/DashboardPage'
import UsersPage from './pages/UsersPage'
import SearchPage from './pages/SearchPage'

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path='/' exact>
            <HomePage />
          </Route>
          <Route path='/register'>
            <RegisterPage />
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
        </Switch>
      </div>
    </Router>
  )
}

export default App
