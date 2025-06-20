import React from 'react'
import { Outlet } from 'react-router-dom'

function RootLayout() {
  return (
    <section className="h-full flex flex-1">
      <Outlet />
    </section>
  )
}

export default RootLayout
