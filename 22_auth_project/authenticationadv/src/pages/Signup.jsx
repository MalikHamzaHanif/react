import React, { useState } from 'react'
import Input from '../components/Input'
import { useForm } from 'react-hook-form'
import { registerUser } from '../app/feature/auth/authApi'

function Signup() {
    const [error, setError] = useState("")
    const [successMsg, setSucessMsg] = useState("")
    const { register, handleSubmit, formState: { errors } } = useForm()

    async function registerClient(data) {
        try {
            const userData = await registerUser(data)
            
            
            if (userData.success === true) {
                setSucessMsg(userData.data.msg)
            } else {
                setError(userData.data.msg)
            }
        } catch (error) {
            setError("Something went wrong during registration")
        }
    }

    return (
        <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md">
            <h1 className="text-2xl font-semibold mb-4">Register Now</h1>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            {successMsg && <p className="text-green-500 text-sm">{successMsg}</p>}
            <form onSubmit={handleSubmit(registerClient)}>

                <Input
                    label="Name"
                    type="text"
                    placeholder="Enter Your name"
                    className="mb-4"
                    {...register("name", { required: "Name is required" })}
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}


                <Input
                    label="Email"
                    type="email"
                    placeholder="Enter Your email"
                    className="mb-4"
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
                    placeholder="Enter Your password"
                    className="mb-4"
                    {...register("password", { required: "Password is required" })}
                />
                {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}


                <button
                    type="submit"
                    className="w-full py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
                >
                    SignUp
                </button>
            </form>
        </div>
    )
}

export default Signup
