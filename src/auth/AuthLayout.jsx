// import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuthContext } from '../context/AuthContext'

function AuthLayout() {
  // const navigate = useNavigate()
  const { isAuthenticated } = useAuthContext()

  // if (isLoading) return null;
  // if (!isAuthenticated) {
  //   navigate("/sign-in");
  //   return null;
  // }

  return (
    <>
      {isAuthenticated ? (
        <Navigate to='/' />
      ) : (
        <>
          <section className='flex justify-center items-center h-screen w-screen'>
            <Outlet />
          </section>
        </>
      )}
    </>
  )
}

export default AuthLayout
