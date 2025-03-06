import React, { useState,useContext } from 'react'
import UserContext from '../context/UserContext';
function Login() {
    const [name,setName]=useState("")
    const [password,setPassword]=useState("")
    const {setUser}=useContext(UserContext)
    function handleLogin(e){
        e.preventDefault();
        setUser({name,password})
    }
  return (
    <div>
      <h1>Login</h1>
      <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/> 
      <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
      <input type="text" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login
