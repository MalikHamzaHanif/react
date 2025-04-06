import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {logout} from "../../app/feature/auth/authSlice"
function Logout() {
    const navigate = useNavigate()
   const dispatch=useDispatch()
    return (
        <button
            onClick={() => {
                 dispatch(logout())
                navigate("/login")
                localStorage.removeItem("x-auth-token")
            }}
            className="px-4 py-2 bg-red-500 text-white font-medium rounded-md hover:bg-red-600 transition"
        >
            Logout
        </button>
    )
}

export default Logout
