import React from 'react';
import { logout } from "../../app/feature/authslice/authSlice";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeBlogs } from '../../app/feature/dataslice/dataSlice';

function Logout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function logoutUser() {
    localStorage.removeItem("x-auth-token")
    dispatch(logout());
    dispatch(removeBlogs())
    navigate("/login");
  }

  return (
    <button
      onClick={logoutUser}
      className="ml-4 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md text-sm transition duration-200"
    >
      Logout
    </button>
  );
}

export default Logout;
