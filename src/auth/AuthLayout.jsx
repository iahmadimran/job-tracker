import { Link, Navigate, Outlet } from 'react-router-dom'
import { useAuthContext } from '../context/AuthContext'

function AuthLayout() {
  const { isAuthenticated } = useAuthContext()

  return (
    <>
      <div className='absolute top-0 right-0 left-0 flex justify-end items-end pr-5 pt-3'>
        <Link to='/'>
          <button className='bg-black px-8 py-2.5 text-[14px] text-white transition-all duration-100 hover:bg-[rgb(14,14,14)] rounded-lg  cursor-pointer' style={{fontWeight: 700}}>
            Go back to home
          </button>
        </Link>
      </div>

      {isAuthenticated ? (
        <Navigate to='/dashboard' />
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
