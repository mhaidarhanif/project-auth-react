const storage = {
  // Set key's value into storage
  // doesn't need to return
  setKey: (keyName, value) => {
    localStorage.setItem(keyName, JSON.stringify(value))
  },

  // Get key's value from storage
  // return the value
  getKey: (keyName) => {
    try {
      const item = localStorage.getItem(keyName)
      return JSON.parse(item)
    } catch (error) {
      console.error(error)
      return false
    }
  },

  // Remove key from the storage
  removeKey: (keyName) => {
    return localStorage.removeItem(keyName)
  },
}

export default storage
