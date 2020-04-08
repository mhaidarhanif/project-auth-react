import storage from '../utils/storage'
import jwt from '../utils/jwt'
import fetch from '../utils/fetch'

export const checkIsAuthenticated = () => {
  const token = storage.getKey('token')

  // Asynchronous user validation
  const validate = async () => {
    try {
      const validatedUser = await fetch('/users/validate')
      if (validatedUser) return true
      else return false
    } catch (error) {
      console.log('Error when checkIsAuthenticated', error.message)
    }
  }

  // Return true if user is validated, false otherwise
  if (token) return validate()
  else return false
}

export const getAuthenticatedUser = () => {
  try {
    const token = storage.getKey('token') || null
    const user = jwt.decodeToken(token)
    if (user) return user
  } catch (error) {
    console.error(error)
  }
}
