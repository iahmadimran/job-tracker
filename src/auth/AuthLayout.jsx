import { Navigate, Outlet } from 'react-router-dom'
import { useAuthContext } from '../context/AuthContext'

function AuthLayout() {
  const { isAuthenticated } = useAuthContext()

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
