import { useState, useEffect, useContext, createContext } from 'react'
import fetchUser from '../services/user'

// 1. create the context
const UserContext = createContext()

// 2. create the provider
const UserProvider = ({ children }) => {
  const [user, setUser] = useState({})
  useEffect(() => {
    fetchUser()
      .then((fetchedUser) => {
        setUser(fetchedUser)
      })
      .catch((error) => {
        throw new Error(`Error: ${error}`)
      })
  }, [])
  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>
}

// 3. create the hook

// three steps to use context:
// also export provider and hook
