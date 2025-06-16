import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

function AuthLayout() {
  const isAuthenticated = false

  return (
    <>
      {isAuthenticated ? (
        <Navigate to='/' />
      ) : (
        <section className='flex justify-center items-center h-screen w-screen'>
          <Outlet />
        </section>
      )}
    </>
  )
}

export default AuthLayout
