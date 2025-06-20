// import { useContext, useEffect, createContext } from "react"
// import { useState } from "react"
// import { useNavigate } from "react-router-dom"
// import { getAccount, getCurrentUser } from "../appwrite/auth"

// const initial_user = {
//   id: '',
//   name: '',
//   email: '',
//   imageUrl: '',
// }

// const initial_state = {
//   user: initial_user,
//   isAuthenticated: false,
//   isLoading: false,
//   setUser: () => { },
//   setIsAuthenticated: () => { },
//   checkAuthUser: async () => { },
// }

// const AuthContext = createContext(initial_state)


// export function AuthProvider({ children }) {
//   const navigate = useNavigate()
//   const [user, setUser] = useState(initial_user)
//   const [isLoading, setIsLoading] = useState(false)
//   const [isAuthenticated, setIsAuthenticated] = useState(false)

//   async function checkAuthUser() {
//     try {
//       const currentAccount = await getCurrentUser() || await getAccount()
//       if (currentAccount) {
//         setUser({
//           id: currentAccount.$id,
//           name: currentAccount.name,
//           email: currentAccount.email,
//           imageUrl: currentAccount?.imageUrl,
//         })

//         setIsAuthenticated(true)
//       }

//       return true;
//     } catch (error) {
//       console.log(error);
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   useEffect(() => {
//     const cookies = localStorage.getItem('cookieFallback')
//     if (cookies === '[]' || cookies === null) {
//       navigate('/sign-in')
//     }

//     checkAuthUser()
//   }, [])

//   const values = {
//     user,
//     setUser,
//     isLoading,
//     setIsLoading,
//     isAuthenticated,
//     setIsAuthenticated,
//     checkAuthUser,
//   }


//   return (
//     <AuthContext.Provider value={values}>
//       {children}
//     </AuthContext.Provider>
//   )
// }
// export const useAuthContext = () => useContext(AuthContext)

import { useContext, useEffect, createContext, useState } from "react";
import { getCurrentUser, signOutAccount } from "../appwrite/auth";
import { useNavigate } from "react-router-dom";

const initial_user = {
  id: "",
  name: "",
  email: "",
  imageUrl: "",
};

const initial_state = {
  user: initial_user,
  isAuthenticated: false,
  isLoading: true,
  setUser: () => {},
  setIsAuthenticated: () => {},
  checkAuthUser: async () => {},
};

const AuthContext = createContext(initial_state);

export function AuthProvider({ children }) {
  const navigate = useNavigate()
  const [user, setUser] = useState(initial_user);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // ← start in loading state

  async function checkAuthUser() {
    try {
      const currentAccount = await getCurrentUser();

      if (currentAccount) {
        setUser({
          id: currentAccount.$id,
          name: currentAccount.name,
          email: currentAccount.email,
          imageUrl: currentAccount.imageUrl || "",
        });

        setIsAuthenticated(true);
      } else {
        setUser(initial_user);
        setIsAuthenticated(false);
      }

      return true;
    } catch (error) {
      console.log(error);
      setUser(initial_user);
      setIsAuthenticated(false);
    } finally {
      setIsLoading(false);
    }
  }

  async function logoutUser() {
    try {
      await signOutAccount();

      // Resetting state
      setUser(initial_user);
      setIsAuthenticated(false);
      setIsLoading(false);

      navigate("/sign-in");
    } catch (error) {
      console.log("Logout failed:", error);
    }
  }

  useEffect(() => {
    checkAuthUser();
  }, []);

  const values = {
    user,
    setUser,
    isLoading,
    setIsLoading,
    isAuthenticated,
    setIsAuthenticated,
    checkAuthUser,
    logoutUser,
  };

  return (
    <AuthContext.Provider value={values}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuthContext = () => useContext(AuthContext);
