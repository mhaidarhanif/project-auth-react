import React, { useState, useEffect } from 'react'

import fetch from '../utils/fetch'

const Users = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('/users')
        const users = response.data.data
        setUsers(users)
      } catch (error) {
        console.error(error)
      }
    }
    fetchUsers()
  })

  return (
    <div>
      <h2>List of Users</h2>
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
    </div>
  )
}

export default Users
