import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'

function RootLayout() {
  return (
    <div className='w-full '>
      <Header />
      <section className="flex">
        <Sidebar />
        <Outlet />
      </section>
    </div>
  )
}

export default RootLayout
