import React, { useEffect, useState } from 'react'
import Header from './components/header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './components/footer/Footer'
import { getUserData } from "./app/feature/auth/authApi"
import { useDispatch } from 'react-redux'
import { login, logout } from './app/feature/auth/authSlice'
function App() {
  const dispatch = useDispatch()
  const [loading, setLoader] = useState(true)
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getUserData()
        if (data.success === true) { 
          dispatch(login({ userData: data.data }))
        } else {
          dispatch(logout())

        }
        setLoader(false)
      } catch (error) {
        setLoader(false)
      }
    }
    fetchData()
  }, [])
  return loading ? (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-12 h-12 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
        <p className="text-lg font-medium text-gray-700">Loading...</p>
      </div>
    </div>
  ) : (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App
