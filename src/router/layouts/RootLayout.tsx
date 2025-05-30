import Navbar from '../../components/layouts/Navbar'
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