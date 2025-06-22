import { useState } from 'react'
import React from 'react'
import sideImage from '../assets/side_image.png'
import { useAuth } from '../context/Authcontext'
import axios from 'axios'
const api_url= import.meta.env.VITE_API_URL
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const {login} = useAuth()
  const [email_or_phone, setEmail_or_phone] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
        const res = await axios.post(`${api_url}login/`, {
        email_or_phone,
        password,
      });

      const { user_id, name, email, phone_number, access_token, refresh_token } = res.data;

      login({ user_id, name, email, phone_number }, access_token, refresh_token);
      navigate('/')
    } catch (err) {
      console.error("Login error", err);
    }
  };
  return (
    <div className='flex container lg:max-w-[90%] mt-[4%] justify-between items-center'>
      <div className='hidden md:block w-[50%]'>
        <div className='flex justify-between items-center'>
          <img src={sideImage} alt="Logo" width={640} />
        </div>
      </div>
      <div className="flex justify-center items-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-[400px] sm:w-[400px]">
          {/* Header */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold">Login in to Exclusive</h1>
            <p className="text-sm mt-1">Enter your details below</p>
          </div>

          {/* Input Fields */}
          <div className="flex flex-col gap-4">
            <input
              className="border border-gray-300 rounded-lg p-3 w-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="email"
              placeholder="Email or Phone Number"
              value={email_or_phone}
              onChange={(e) => setEmail_or_phone(e.target.value)}
              required
            />
            <input
              className="border border-gray-300 rounded-lg p-3 w-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div className='flex justify-between items-center'>
                <button onClick={handleLogin} className='text-sm text-white bg-red-500 p-2 w-[30%] rounded-sm hover:bg-red-400 transition-all duration-300'>Log In</button>
                <button className='text-sm text-red-500 hover:underline hover:text-red-600 transition-all duration-300'>Forgot Password?</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Login
