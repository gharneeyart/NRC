'use client';
// import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Image from 'next/image';
import logo from '../../../images/image-3.svg';
import image from '../../../images/138-1(2).svg';
import Link from 'next/link';

export default function ResetPassword() {
  // const [loading, setLoading] = useState(false);
  // const [apiError, setApiError] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
  };

  return (
    <div className="w-full flex  px-3 lg:p-0 justify-center backg items-center h-screen lg:h-full ">
      <div className="w-full lg:w-1/2 bg-white rounded-lg shadow-lg p-3 md:px-10 md:py-14 lg:px-20 h-[500px] my-6 pt-6 flex flex-col lg:justify-center lg:shadow-none ">
        <div>
          <h2 className="text-xl lg:text-3xl font-bold mb-2 ">
            Reset Password
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
                New Password
              </label>
              <input
                type="password"
                {...register('password', {
                  required: 'Password is required!',
                  pattern: {
                    message: 'Please enter a new password!',
                  },
                })}
                placeholder="Enter new password"
                className="w-full px-3 py-2 border rounded-lg outline-none"
                required
              />
            </div>
            {errors.password && (
              <p className="text-red-600 mb-7">{errors.password.message}</p>
            )}

            <div>
              <label className="block text-gray-700 font-semibold mb-1 text-lg">
                Confirm Password
              </label>
              <input
                type="password"
                {...register('confirmPassword', {
                  required: 'Confirm new password',
                  pattern: {
                    message: 'Please enter a new password!',
                  },
                })}
                placeholder="Confirm New Password"
                className="w-full px-3 py-2 border rounded-lg outline-none"
                required
              />
            </div>
            {errors.confirmPassword && (
              <p className="text-red-600 mb-7">
                {errors.confirmPassword.message}
              </p>
            )}
            <button
              type="submit"
              className="bg-[#18A532] text-white  w-full py-2 rounded-md mb-2 "
            >
              Reset
            </button>
          </form>
        </div>

        {/* <p className="text-center text-gray-700 text-sm lg:text-base">
            Forgot Password?{" "}
            <Link href="/auth/resetpassword" className="text-green-600 font-semibold">Reset</Link>
          </p> */}
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
