import React, { useState } from 'react';
import Input from '../components/Input';
import { useForm } from 'react-hook-form';
import { signUp } from '../app/feature/authslice/authApi';

function Signup() {
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  async function registerUser(data) {

    setError("")
    setSuccessMsg("")
    try {
      const user = await signUp(data)
      console.log(user);


      if (user?.success === true) {
        setSuccessMsg(user.data.msg)
      } else {

        setError(user.err.msg);
      }

    } catch (error) {
      console.log(error);

      setError("error while registring the user");


    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <h1 className="text-3xl font-bold mb-6">Register Now</h1>
      <div>
        {error && (<p className='text-red-500 text-sm'>{error}</p>)}
        {successMsg && (<p className='text-green-500 text-sm'>{successMsg}</p>)}
      </div>
      <form
        onSubmit={handleSubmit(registerUser)}
        className="bg-white p-6 rounded-xl shadow-md w-full max-w-md space-y-4"
      >
        <div>
          <Input
            {...register('name', { required: 'Name is required' })}
            placeholder="Enter your name here"
            label="Name"
            type="text"
            className="w-full px-4 py-2 border rounded-lg"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
        </div>

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
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Signup;
