import Loading from '@/components/loading'
import Routes from '@/router'
import { BrowserRouter } from 'react-router-dom'
import { Suspense } from 'react'

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes />
      </Suspense>
    </BrowserRouter>
  )
}

export default App
