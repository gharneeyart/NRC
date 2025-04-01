'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Image from 'next/image';
import logo from '../../../images/image-3.svg';
import image from '../../../images/138-1(2).svg';
import Link from 'next/link';

export default function ForgotPassword() {
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    setApiError('');
    setSuccessMessage('');
    try {
      const response = await axios.post('/auth/forgot-password', data);
      setSuccessMessage(response.data.message);
      reset();
    } catch (error) {
      setApiError(error.response?.data?.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full flex flex-col lg:flex-row  lg:p-0 justify-center backg items-center h-full lg:h-full ">
      <div className='block lg:hidden bg-white w-full px-4 py-3'>
            <Link href="/">
                <Image
                  src={logo}
                  alt="Logo"
                  className="  "
                />
              </Link>
            </div>
      <div className="w-11/12 lg:w-1/2 bg-white rounded-lg shadow-lg p-3 md:px-10 md:py-14 lg:px-20 h-[500px] my-6 pt-10 flex flex-col lg:justify-center lg:shadow-none ">
        <div>
          <h2 className="text-xl lg:text-3xl font-bold mb-2 ">
            Forgot Password
          </h2>
          <p className="text-gray-600 mb-4 text-sm lg:text-base">
            Enter your email address to reset your password
          </p>

          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="e flex flex-col gap-4"
          >
            <div>
              <label className="block text-gray-700 font-semibold mb-1 text-lg">
                Email Address
              </label>
              <input
                type="email"
                {...register('email', {
                  required: 'Email address is required!',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'Please enter a valid email address!',
                  },
                })}
                placeholder="Enter email address"
                className="w-full px-3 py-2 border rounded-lg outline-none"
                required
              />
            </div>
            {errors.email && (
              <p className="text-red-600 mb-7">{errors.email.message}</p>
            )}
            {apiError && (
              <p className="text-red-600 mb-7">{apiError}</p>
            )}
            {successMessage && (
              <p className="text-green-600 mb-7">{successMessage}</p>
            )}
            <button
              type="submit"
              className="bg-[#18A532] text-white  w-full py-2 rounded-md my-2 "
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Reset'}
            </button>
          </form>
        </div>

        <p className="text-center text-gray-700 text-sm lg:text-base">
          Don&apos;t have an account?{' '}
          <Link href="/auth/signup" className="text-green-600 font-semibold">
            Sign Up
          </Link>
        </p>
      </div>
      <div className="hidden lg:block object-cover  relative lg:w-1/2 h-screen">
        <Image src={image} alt="Train" className="w-full h-full object-cover" />
        <div className="absolute top-0 mt-5 ml-3">
          <Link href="/">
            <Image src={logo} alt="Logo" />
          </Link>
        </div>
      </div>
    </div>
  );
}