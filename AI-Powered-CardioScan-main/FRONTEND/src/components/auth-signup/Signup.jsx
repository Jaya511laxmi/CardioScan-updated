import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
const Signup = () => {
  const navigate = useNavigate();
  const {loading,signup}=useAuth()
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
    gender:""
  });

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log("credentials",credentials)
    if(credentials.password !== credentials.cpassword){
      return alert("Password did not matched")
    }
    await signup(credentials)
  }
  const onHandleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value.trim() });
  };

  // if(loading){
  //   return <div>Please wait Loading...</div>
  // }

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen ">
      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img className="max-h-[80vh] object-contain" src="auth.png" alt="Auth Illustration" />
      </div>

      {/* Form Section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="w-full max-w-lg bg-white p-8 ">
          <h2 className="text-2xl font-bold mb-4 text-center text-red-950">Signup</h2>
          <form onSubmit={handleSubmit} className="space-y-2">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium">Username</label>
              <input
                type="text"
                name="name"
                onChange={onHandleChange}
                placeholder='Enter Name'
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-900 text-red-900"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium">Email</label>
              <input
                type="email"
                name="email"
                onChange={onHandleChange}
                placeholder='Enter Email'
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-900 text-red-900"
                required
              />
            </div>
            <div>
              <label htmlFor="prof" className="block text-gray-700 font-medium">What best defines you?</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-900 text-black" name="profession"  onChange={onHandleChange}>
                <option value="" >Select</option>
                <option value="Patient">Patient</option>
                <option value="Cardiologist">Cardiologist</option>
                <option value="Doctor">Doctor</option>
                <option value="ECG Operator">ECG Operator</option>
                <option value="Others">Other</option>
              </select>
            </div>
            <div>









{/* Gender Selection */}
<div>
            <label className="block text-gray-700 font-medium mb-2">Gender</label>
            <div className="flex items-center space-x-4">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  onChange={onHandleChange}
                  className="form-radio text-red-900"
                  required
                />
                <span className="text-gray-700">Male</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  onChange={onHandleChange}
                  className="form-radio text-red-900"
                  required
                />
                <span className="text-gray-700">Female</span>
              </label>
            </div>
          </div>













              <label htmlFor="password" className="block text-gray-700 font-medium">Password</label>
              <input
                type="password"
                name="password"
                placeholder='Enter Password'
                onChange={onHandleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-900 text-red-900"
                required
              />
            </div>
            <div>
              <label htmlFor="cpassword" className="block text-gray-700 font-medium">Confirm Password</label>
              <input
                type="password"
                name="cpassword"
                placeholder='Enter Confirm Password'
                onChange={onHandleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-900 text-red-900"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-red-900 text-white font-medium py-2 px-4 rounded-md hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-900"
            >
              Signup
            </button>
            <p className='mt-5 text-center'>
              Already a user?
              <Link to='/loginsignup' className='text-pink-950 font-semibold p-2'>Login</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
