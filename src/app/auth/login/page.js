'use client';
import Image from 'next/image';
import Train from '../../../images/138 1 (1).png';
import Logo from '../../../icons/image 3.png';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { FaRegEyeSlash } from 'react-icons/fa6';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';

export default function Login() {
  const { login: loginUser } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [backendError, setBackendError] = useState(null);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      setBackendError(null);
      await loginUser(data);
      reset();
    } catch (error) {
      setBackendError(error.message || 'An error occurred during login');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full flex flex-col lg:flex-row lg:p-0 backg items-center justify-center h-full lg:h-full">
      <div className='block lg:hidden bg-white w-full px-4 py-3'>
        <Link href="/">
          <Image src={Logo} alt="Logo" className="" />
        </Link>
      </div>
      
      <div className="bg-white space-y-4 my-6 lg:my-0 pt-6 pb-20 md:pt-8 md:pb-8 px-4 md:px-8 rounded-lg lg:rounded-none w-11/12 lg:w-1/2 lg:px-20 mx-10 lg:mx-0">
        <div className="flex flex-col gap-1">
          <h1 className="text-xl lg:text-[34px] font-bold mb-2">Welcome Back</h1>
          <p className="text-[#3F3F3F] text-base lg:text-lg">Sign in to continue</p>
        </div>

        {/* Backend Error Display */}
        {backendError && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
            {backendError}
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
          <div className="flex flex-col gap-2 rounded-md">
            <label htmlFor="" className="font-medium text-lg">
              Email Address
            </label>
            <input
              {...register('email', {
                required: 'Email Address is required',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Invalid email format',
                },
              })}
              className="border rounded-[5px] p-2 w-full text-[16px] focus:outline-none focus:ring-2 focus:ring-green-500 px-3 py-3"
              type="email"
              placeholder="Enter your email address"
            />
          </div>
          {errors.email && (
            <p className="text-red-500 text-end">{errors.email.message}</p>
          )}

          <div className="flex flex-col gap-2 rounded-md">
            <label htmlFor="" className="font-medium text-lg">
              Password
            </label>
            <div className="relative flex flex-row">
              <input
                {...register('password', {
                  required: 'password is required',
                })}
                className="border w-full p-2 focus:outline-none focus:ring-2 focus:ring-green-500 rounded-[5px] px-3 py-3"
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter Password"
              />
              <button
                type="button"
                className="absolute right-4 translate-y-3 w-[20px] rounded-full"
                onClick={handleTogglePassword}
              >
                {showPassword ? <MdOutlineRemoveRedEye /> : <FaRegEyeSlash />}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500 text-end">{errors.password.message}</p>
            )}
          </div>

          <Link className="text-right text-[#006B14]" href="/auth/forgotpassword">
            Forgot Password?
          </Link>

          <button
            className="bg-[#18A532] text-white py-3 rounded-md text-lg flex items-center justify-center"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Signing In...
              </>
            ) : (
              'Sign In'
            )}
          </button>

          <p className="text-center pb-20 lg:pb-0">
            Don&apos;t have an account?{' '}
            <Link href="/auth/signup" className="text-[#006B14]">
              Sign Up
            </Link>
          </p>
        </form>
      </div>

      <div className="relative hidden lg:block h-screen lg:w-1/2">
        <Image
          src={Train}
          alt="login"
          className="h-full w-full hidden lg:block object-cover"
          priority
        />
        <Link href="/">
          <Image
            src={Logo}
            alt="Logo"
            className="absolute top-10 left-6 hidden lg:block"
          />
        </Link>
      </div>
    </div>
  );
}