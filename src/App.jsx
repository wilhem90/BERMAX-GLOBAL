import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import AboutPage from './pages/about/AboutPage'
import HomePage from './pages/home/HomePage'
import AuthUser from './pages/auth/AuthUser'
import Footer from './components/footer/Footer'
import Contact from './pages/contact/Contact'
import { useEffect, useState } from 'react'
import Loading from './components/loading/Loading'

function App() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false)
    }, 30_000)

    return () => clearTimeout(timeout)
  }, [])

  return (
    <>

    {loading && <Loading />}
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<HomePage setLoading={setLoading} />} />
        <Route path='/about' element={<AboutPage setLoading={setLoading} />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/auth' element={<AuthUser />} />
        <Route path='*' element={<HomePage />} />
      </Routes>
    </BrowserRouter>

    <Footer />
    </>
  )
}

export default App
