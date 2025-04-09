import React, { useEffect, useState } from 'react'
import Header from './components/header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import { getUserData } from './app/feature/authslice/authApi'
import { useDispatch } from 'react-redux'
import { login, logout } from './app/feature/authslice/authSlice'

function App() {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function getData() {
      try {
        const userData = await getUserData()
        if (userData) {
          dispatch(login({
            userData: {
              email: userData.data.data.email,
              userId: userData.data.data.userId
            }
          }))
        } else {
          dispatch(logout())
        }
      } catch (error) {
        dispatch(logout())
      } finally {
        setLoading(false)
      }
    }

    getData()
  }, [dispatch])

  if (loading) {
    return (
      <div className="h-screen w-screen flex flex-col items-center justify-center bg-gray-50 text-gray-800">
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-lg font-semibold">Loading, please wait...</p>
      </div>
    )
  }

  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
