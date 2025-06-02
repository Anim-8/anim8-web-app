import React from 'react';
import Navbar from '../../components/layouts/NavBar'
import { Outlet } from 'react-router'

const RootLayout = () => {
  return (
    <>
    <Navbar />
      <main className="pt-[80px]">
        <Outlet />
      </main>
    </>
  )
}

export default RootLayout