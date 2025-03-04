import React from 'react'
import { Outlet } from 'react-router-dom'
import HomeHeader from './HomeHeader'
function Home() {
  return (
    <div>
    <h1>Home</h1>
    <HomeHeader/>
    <Outlet/>
    </div>
  )
}

export default Home
