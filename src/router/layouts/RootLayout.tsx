import { Outlet } from 'react-router-dom'
import Navbar from '../../components/layout/Navbar';

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