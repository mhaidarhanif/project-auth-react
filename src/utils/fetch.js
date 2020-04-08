import axios from 'axios'

const fetch = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:8000',
  timeout: 2000,
})

export default fetch
