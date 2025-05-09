import Header from "../components/Header"
import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <div>
        <Header />
        <main>
            <Outlet />
        </main>
    </div>
  )
}

export default Layout