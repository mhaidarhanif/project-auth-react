import jwtDecode from 'jwt-decode'

import storage from './storage'

const jwt = {
  getToken: () => {
    try {
      const token = storage.getKey('token')
      return token
    } catch (error) {
      console.error(error)
      return null
    }
  },

  decodeToken: (token) => {
    if (token) return jwtDecode(token)
    else return null
  },
}

export default jwt
