import { useContext, useEffect, createContext } from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { getCurrentUser } from "../appwrite/auth"

const initial_user = {
  id: '',
  name: '',
  email: '',
  imageUrl: '',
}

// const initial_state = {
//   user: initial_user,
//   isAuthenticated: false,
//   isLoading: false,
//   setUser: () => {},
//   setIsAuthenticated: () => {},
//   checkAuthUser: async () => {}, 
// }

const AuthContext = createContext()


export function AuthProvider({children}) {
  const navigate = useNavigate()
  const [user, setUser] = useState(initial_user)
  const [isLoading, setIsLoading] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  async function checkAuthUser() {
    try {
      const currentAccount = await getCurrentUser()
      if (currentAccount) {
        setUser({
          id: currentAccount.$id,
          name: currentAccount.name,
          email: currentAccount.email,
          imageUrl: currentAccount.imageUrl,
        })
  
        setIsAuthenticated(true)
      }

      return true
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    const cookies = localStorage.getItem('cookieFallback')
    if (cookies === '[]' || cookies === null) {
      navigate('sign-in')
    }

    checkAuthUser()
  }, [])

  const values = {
    user,
    setUser,
    isLoading,
    setIsLoading,
    isAuthenticated,
    setIsAuthenticated,
    checkAuthUser,
  }


  return (
    <AuthContext.Provider value={values}>
      {children}
    </AuthContext.Provider>
  )
}
export const useAuthContext = () => useContext(AuthContext)