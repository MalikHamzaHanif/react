import React from 'react'
import {NavLink} from "react-router-dom"
function HomeHeader() {
  return (
    <div>
      <NavLink to={""} >Child One</NavLink>
      <NavLink to={"/childtwo"} >Child Two</NavLink>
    </div>
  )
}

export default HomeHeader
