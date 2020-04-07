import React, { useState, useEffect } from 'react'
import axios from 'axios'

import fetch from '../utils/fetch'

const Users = () => {
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
    <div>
      <h2>List of Users</h2>
      {!users ? (
        <div>Loading users...</div>
      ) : (
        <div>
          {users.map((user, index) => {
            return (
              <div key={index}>
                <h3>{user.name}</h3>
                <p>{user.email}</p>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default Users
