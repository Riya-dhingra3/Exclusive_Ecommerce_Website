import React from 'react'
import sideImage from '../assets/side_image.png'
import Google from '../assets/google.png'
import { Link } from 'react-router-dom'
const Signup = () => {
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
            <h1 className="text-2xl font-bold">Create an account</h1>
            <p className="text-sm mt-1">Enter your details below</p>
          </div>

          {/* Input Fields */}
          <div className="flex flex-col gap-4">
            <input
              className="border border-gray-300 rounded-lg p-3 w-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              placeholder="Name"
              required
            />
            <input
              className="border border-gray-300 rounded-lg p-3 w-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="email"
              placeholder="Email or Phone Number"
              required
            />
            <input
              className="border border-gray-300 rounded-lg p-3 w-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="password"
              placeholder="Password"
              required
            />

            {/* Create Account Button */}
            <button className="w-full bg-red-500 text-white py-3 rounded-lg text-lg font-bold hover:bg-red-400 transition-all duration-300">
              Create Account
            </button>

            {/* Divider */}
            <div className="flex items-center justify-center">
              <hr className="w-full border-gray-300" />
            </div>

            {/* Google Signup Button */}
            <button className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-100 transition-all duration-300">
              <img src={Google} alt="Google" width={18} />
              <p className="text-sm">Sign up with Google</p>
            </button>

            {/* Login Redirect */}
            <p className="text-center text-gray-600 text-sm mt-4">
              Already have an account?{" "}
              <Link className="text-blue-500 font-bold hover:underline" to="/login">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Signup
