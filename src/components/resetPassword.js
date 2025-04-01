'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Image from 'next/image';
import logo from '../images/image-3.svg';
import image from '../images/138-1(2).svg';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';

export default function ResetPassword({ token }) {
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState('');
  const [success, setSuccess] = useState(false);
  const router = useRouter();
  const { resetPassword } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      setApiError('');
      
      if (!token) {
        throw new Error('Invalid reset token');
      }
      
      await resetPassword(token, {
        password: data.password,
        confirmPassword: data.confirmPassword
      });
      
      setSuccess(true);
    } catch (error) {
      setApiError(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="w-full flex flex-col lg:flex-row lg:p-0 justify-center backg items-center h-screen lg:h-full">
        <div className='block lg:hidden bg-white w-full px-4 py-3'>
      <Link href="/">
          <Image
            src={logo}
            alt="Logo"
            className="  "
          />
        </Link>
      </div>
        <div className="w-11/12 lg:w-1/2 bg-white rounded-lg shadow-lg p-3 md:px-10 md:py-14 lg:px-20 h-[500px] my-6 pt-6 flex flex-col lg:justify-center lg:shadow-none">
          <div>
            <h2 className="text-xl lg:text-3xl font-bold mb-2">Password Reset Successful</h2>
            <p className="text-gray-600 mb-4 text-sm lg:text-base">
              Your password has been successfully reset. You can now login with your new password.
            </p>
            <Link href="/auth/login" className="bg-[#18A532] text-white w-full py-2 rounded-md mb-2 block text-center">
              Go to Login
            </Link>
          </div>
        </div>
        <div className="hidden lg:block object-cover relative lg:w-1/2 h-screen">
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

  return (
    <div className="w-full flex px-3 lg:p-0 justify-center backg items-center h-screen lg:h-full">
      <div className="w-full lg:w-1/2 bg-white rounded-lg shadow-lg p-3 md:px-10 md:py-14 lg:px-20 h-[500px] my-6 pt-6 flex flex-col lg:justify-center lg:shadow-none">
        <div>
          <h2 className="text-xl lg:text-3xl font-bold mb-2">Reset Password</h2>
          <p className="text-gray-600 mb-4 text-sm lg:text-base">
            Enter your new password
          </p>

          {apiError && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              {apiError}
            </div>
          )}

          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="flex flex-col gap-4"
          >
            <div>
              <label className="block text-gray-700 font-semibold mb-1 text-lg">
                New Password
              </label>
              <input
                type="password"
                {...register('password', {
                  required: 'Password is required!',
                  minLength: {
                    value: 6,
                    message: 'Password must be at least 6 characters',
                  },
                })}
                placeholder="Enter new password"
                className="w-full px-3 py-2 border rounded-lg outline-none"
              />
              {errors.password && (
                <p className="text-red-600">{errors.password.message}</p>
              )}
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-1 text-lg">
                Confirm Password
              </label>
              <input
                type="password"
                {...register('confirmPassword', {
                  required: 'Please confirm your password',
                  validate: (value) =>
                    value === watch('password') || 'Passwords do not match',
                })}
                placeholder="Confirm New Password"
                className="w-full px-3 py-2 border rounded-lg outline-none"
              />
              {errors.confirmPassword && (
                <p className="text-red-600">{errors.confirmPassword.message}</p>
              )}
            </div>
            
            <button
              type="submit"
              disabled={loading}
              className="bg-[#18A532] text-white w-full py-2 rounded-md mb-2 disabled:opacity-50"
            >
              {loading ? 'Resetting...' : 'Reset Password'}
            </button>
          </form>
        </div>
      </div>
      <div className="hidden lg:block object-cover relative lg:w-1/2 h-screen">
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
