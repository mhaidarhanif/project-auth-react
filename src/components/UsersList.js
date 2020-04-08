import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Users from '../components/Users'

import fetch from '../utils/fetch'
import jwt from '../utils/jwt'

const UsersList = () => {
  const [users, setUsers] = useState()

  useEffect(() => {
    const CancelToken = axios.CancelToken
    const source = CancelToken.source()

    const loadData = async () => {
      try {
        const response = await fetch.get('/users', {
          cancelToken: source.token,
          headers: {
            Authorization: `Bearer ${jwt.getToken()}`,
          },
        })
        const users = response.data.users
        setUsers(users)
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log(
            'Fetch users is cancelled because user is not authenticated'
          )
        } else {
          console.error(error)
        }
      }
    }

    loadData()

    return () => {
      source.cancel()
    }
  }, [])

  return (
    <div>
      <Users users={users} />
    </div>
  )
}

export default UsersList
