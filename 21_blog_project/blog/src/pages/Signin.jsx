import React, { useState } from 'react';
import Input from '../components/Input';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { logIn as loginClient } from '../app/feature/authslice/authApi';
import { login } from "../app/feature/authslice/authSlice"
function Signin() {
  const dispatch = useDispatch()
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  async function loginUser(data) {
    try {
      const user = await loginClient(data)

      if (user?.success === true) {
        dispatch(login({userData:{
          email:user.data.data.email,
          userId:user.data.data.userId,
          name:user.data.data.name
        }}))
        localStorage.setItem("x-auth-token",`Bearer ${user.data.data.token}`)
      } else {
        setError(user.err.msg);
      }
    } catch (error) {
      console.error(error);
      setError("Something went wrong while login");
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <h1 className="text-3xl font-bold mb-6">Login Now</h1>
      <div>
        {error && (<p className='text-red-500 text-sm'>{error}</p>)}
      </div>
      <form
        onSubmit={handleSubmit(loginUser)}
        className="bg-white p-6 rounded-xl shadow-md w-full max-w-md space-y-4"
      >
        <div>
          <Input
            {...register('email', { required: 'Email is required' })}
            placeholder="Enter your email here"
            label="Email"
            type="email"
            className="w-full px-4 py-2 border rounded-lg"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>

        <div>
          <Input
            {...register('password', { required: 'Password is required' })}
            placeholder="Enter your password here"
            label="Password"
            type="password"
            className="w-full px-4 py-2 border rounded-lg"
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Sign In
        </button>
      </form>
      <button  className="mt-4 px-6 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition duration-300" onClick={()=>{loginUser({email:"demouser@demo.com","password":"demo"})}}>Demo User</button>
    </div>
  );
}

export default Signin;
