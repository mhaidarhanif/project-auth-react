import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Page from '../components/Page'
import UsersList from '../components/UsersList'

import fetch from '../utils/fetch'

const UsersPage = () => {
  const [users, setUsers] = useState()

  useEffect(() => {
    const CancelToken = axios.CancelToken
    const source = CancelToken.source()

    const loadData = async () => {
      try {
        const response = await fetch.get('/users', {
          cancelToken: source.token,
        })
        const users = response.data.data
        setUsers(users)
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log('cancelled')
        } else {
          throw error
        }
      }
    }

    loadData()

    return () => {
      source.cancel()
    }
  }, [])

  return (
    <Page title='All Users'>
      <UsersList users={users}></UsersList>
    </Page>
  )
}

export default UsersPage
