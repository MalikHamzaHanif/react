import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Input from '../components/Input';
import { useForm } from 'react-hook-form';
import { updateClient } from '../app/feature/authslice/authApi';
import { login } from '../app/feature/authslice/authSlice';

function Userprofile() {
  const user = useSelector((state) => state.auth.user);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm();
  const dispatch = useDispatch();

  useEffect(() => {
    setValue('name', user.name);
    setValue('email', user.email);
  }, [user]);

  async function updateUser(data) {
    setLoading(true);
    setError('');
    setSuccessMsg('');
    try {
      const userData = await updateClient(data);
      if (userData.success === true) {
        dispatch(
          login({
            userData: {
              email: userData.data.data.email,
              userId: userData.data.data.userId,
              name: userData.data.data.name
            }
          })
        );
        localStorage.setItem('x-auth-token', `Bearer ${userData.data.data.token}`);
        setSuccessMsg(userData.data.msg);
      } else {
   
        
        setError(userData.err.msg);
      }
    } catch (error) {
      setError('User updation failed');
    } finally {
      setLoading(false);
      setTimeout(() => {
        setError("")
        setSuccessMsg("")
      }, 5000);
    }
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <h1 className="text-xl font-semibold">Loading...</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4 py-8">
      <div className="w-full max-w-lg bg-white p-6 rounded-xl shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Welcome {user?.name || 'User'}
        </h1>

        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
        {successMsg && <p className="text-green-600 mb-4 text-center">{successMsg}</p>}

        <form onSubmit={handleSubmit(updateUser)} className="space-y-4">
          <div>
            <Input
              label="Name"
              placeholder="Enter your name here"
              type="text"
              {...register('name', { required: 'Name cannot be empty' })}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <Input
              label="Email"
              placeholder="Enter your email here"
              type="email"
              {...register('email', { required: 'Email cannot be empty' })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition duration-300"
          >
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
}

export default Userprofile;
