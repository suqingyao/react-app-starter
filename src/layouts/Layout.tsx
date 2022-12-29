import { FC } from 'react'
import { Outlet } from 'react-router-dom'

const Layout: FC = () => {
  return (
    <div>
      <header>
        <h1>Header</h1>
      </header>
      <Outlet />
      <footer>
        <h1>Footer</h1>
      </footer>
    </div>
  )
}

export default Layout
