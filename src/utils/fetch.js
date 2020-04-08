import axios from 'axios'

import storage from './storage'

const fetch = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:8000',
  timeout: 2000,
  headers: {
    // Will be replaced by actual JWT or token header if authenticated
    Authorization: storage.getKey('token')
      ? `Bearer ${storage.getKey('token')}`
      : '',
    'X-App-Header': 'project-auth-react',
  },
})

export default fetch
