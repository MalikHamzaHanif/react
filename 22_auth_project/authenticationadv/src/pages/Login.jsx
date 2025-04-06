import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import Input from '../components/Input';
import { login } from '../app/feature/auth/authSlice';
import { useDispatch } from 'react-redux';
import { loginUser } from '../app/feature/auth/authApi';

function Login() {
  const [error, setError] = useState("")
  const { register, handleSubmit, formState: { errors } } = useForm()
  const dispatch=useDispatch()

  async function loginClient(data) {
    try {
      const userData = await loginUser(data)
      if (userData.success === true) {
          localStorage.setItem("x-auth-token",`Bearer ${userData.data.token}`)
          dispatch(login(userData))
      } else {
          setError(userData.data.msg)
      }
  } catch (error) {
      setError("Something went wrong during login")
  }
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-semibold mb-4">Login Now</h1>
      {error && (<p className="text-red-500">{error}</p>)}

      <form onSubmit={handleSubmit(loginClient)}>

        <Input
          label="Email"
          type="email"
          className="mb-4"
          placeholder="Enter your email"
          {...register("email", {
            required: "Email is required",
            validate: {
              matchPattern: (value) =>
                /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                "Email address must be a valid address",
            }
          })}
        />
       
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

        <Input
          label="Password"
          type="password"
          className="mb-4"
          placeholder="Enter your password"
          {...register("password", {
            required: "Password is required"
          })}
        />
       
        {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}

        <button type='submit' className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          Login
        </button>
      </form>
    </div>
  )
}

export default Login;
