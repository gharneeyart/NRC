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
  const {login: loginUser}= useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  
  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  const onSubmit = async (data) => {
    try {
      await loginUser(data);
      alert('Login successful!');
      reset();
    } catch (error) {
      console.error('Failed to login user', error);
      alert('Login failed. Please try again.');
    }
  };
  return (
    <div className="w-full flex  lg:p-0 backg px-3 lg:px-0 items-center justify-center h-screen lg:h-full">
      <div className="bg-white space-y-4 my-6 lg:my-0 pt-6 pb-20 md:pt-8 md:pb-8 px-4 md:px-8 rounded-lg lg:rounded-none  w-full  lg:w-1/2 lg:px-20">
        <div className="flex flex-col gap-1">
          <h1 className=" text-xl lg:text-[34px] font-bold">Welcome Back</h1>
          <p className="text-[#3F3F3F] text-base lg:text-lg  ">
            Sign in to continue
          </p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-6    "
        >
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
              className="border rounded-[5px] p-2 w-full text-[#9C9C9C] text-[16px] outline-none px-3 py-3"
              type="email"
              placeholder="Enter your email address"
            />
          </div>
          {errors.email && (
            <p className="text-red-500 text-end">{errors.email.message}</p>
          )}
          <div className="flex flex-col  gap-2 rounded-md">
            <label htmlFor="" className="font-medium text-lg">
              Password
            </label>
            <div className="relative flex flex-row ">
              <input
                {...register('password', {
                  required: 'password is required',
                })}
                className="border  w-full text-[#9C9C9C] p-2 outline-none rounded-[5px] px-3 py-3"
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter Password"
              />
              <button
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
          <Link
            className="text-right text-[#006B14]"
            href="/auth/forgotpassword"
          >
            Forgot Password?
          </Link>

          <button
            className="bg-[#18A532] text-white py-3 rounded-md text-lg"
            type="submit"
          >
            Sign In
          </button>
          <p className="text-center pb-20 lg:pb-0">
            Don&apos;t have an account?{' '}
            <Link href="/auth/signup" className="text-[#006B14] ">
              Sign Up
            </Link>
          </p>
        </form>
      </div>

      <div className="relative hidden lg:block  h-screen lg:w-1/2">
        <Image
          src={Train}
          alt="login"
          className="h-full  w-full hidden lg:block object-cover"
        />
        <Link href="/">
          <Image
            src={Logo}
            alt="Logo"
            className="absolute top-5 left-6 hidden lg:block"
          />
        </Link>
      </div>
    </div>
  );
}
