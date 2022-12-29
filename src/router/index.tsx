import Layout from '@/layouts/Layout'
import { lazy } from 'react'
import { RouteObject, useRoutes } from 'react-router-dom'
const Home = lazy(() => import('@/pages/home'))
const NotFound = lazy(() => import('@/pages/error/NotFound'))

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: 'home',
        index: true,
        element: <Home />
      }
    ]
  },
  {
    path: '*',
    element: <NotFound />
  }
]

export default () => useRoutes(routes)
