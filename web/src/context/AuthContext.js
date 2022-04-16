import { createContext } from 'react'
import { useAuth } from '@redwoodjs/auth'

const AuthContext = createContext()

const AuthProviderContext = (props) => {
  const { isAuthenticated, currentUser, logIn, logOut, signUp } = useAuth()
  return (
    <AuthContext.Provider
      value={{ isAuthenticated, currentUser, logIn, logOut, signUp }}
      {...props}
    />
  )
}

export { AuthProviderContext, AuthContext }
