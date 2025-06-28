import { Link, Navigate, Outlet } from 'react-router-dom'
import { useAuthContext } from '../context/AuthContext'

function AuthLayout() {
  const { isAuthenticated, user } = useAuthContext()

  return (
    <>
      <header className="absolute top-0 right-0 left-0 bg-white border-b border-slate-200 px-4 sm:px-10 py-4 sm:py-3.5">
        <div className="flex items-center justify-between">
          <Link to='/'>
            <div className="flex items-center space-x-2 cursor-pointer sm:space-x-4">
              <div className="size-5">
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" fill="currentColor"></path></svg>
              </div>
              <h2 className="text-[18px] font-bold text-black">
                JobTracker AI
              </h2>
            </div>
          </Link>
          <div>
            <Link to='/'>
              <button className='bg-black px-8 py-2.5 text-[14px] text-white transition-all duration-100 hover:bg-[rgb(14,14,14)] rounded-lg  cursor-pointer' style={{ fontWeight: 700 }}>
                Go back to home
              </button>
            </Link>
          </div>
        </div>
      </header>

      {isAuthenticated ? (
        <Navigate to={`/dashboard/${user.id}`} />
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
