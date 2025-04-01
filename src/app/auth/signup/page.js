'use client';
import Image from 'next/image';
import { useState } from 'react';
import Train from '../../../images/train.png';
import { BiHide } from 'react-icons/bi';
import { BiShow } from 'react-icons/bi';
import { useForm } from 'react-hook-form';
import Logo from '../../../images/Logo.png';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';

export default function Register() {
  const { signup } = useAuth();
  const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [gender, showGender] = useState(false);
  const [identification, showIdentification] = useState(false);
  const [dob, showDOB] = useState(false);
  const [selectedGender, setSelectedGender] = useState('');
  const [selectedIdentification, setSelectedIdentification] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [backendError, setBackendError] = useState(null);

  const togglePasswordVisibilityOne = () => {
    setShowPassword(!showPassword);
  };

  const togglePasswordVisibilityTwo = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const genderDropDown = () => {
    showGender(true);
  };

  const idDropDown = () => {
    showIdentification(true);
  };

  const dobDropDown = () => {
    showDOB(true);
  };

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      setBackendError(null);
      await signup(data);
      reset();
    } catch (error) {
      setBackendError(error.message || 'An error occurred during registration');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row-reverse relative register pb-10 lg:pb-0 items-center">
      {/* Image Background for Desktop */}
      <div className="lg:w-1/2 hidden lg:block relative lg:h-full">
        <Image
          src={Train}
          alt="Train"
          className="w-full h-[900px] 2xl:h-full object-cover"
          priority
        />
      </div>

      {/* Main Content Container */}
      <main className="flex flex-col justify-between lg:w-1/2 bg-white register w-full">
        {/* Header with Logo */}
        <header className="p-5 md:p-8 bg-white lg:hidden">
          <Link href="/">
            <Image src={Logo} alt="NRC Logo" className="h-10" />
          </Link>
        </header>
        <header className="p-5 lg:p-8 lg:absolute left-[50%] hidden lg:block top-10">
          <Link href="/">
            <Image src={Logo} alt="NRC Logo" className="h-12" />
          </Link>
        </header>

        {/* Form Container */}
        <div className="p-8 lg:p-12 bg-white w-[95%] container mx-auto mt-12 lg:mt-0 lg:w-full rounded-lg lg:rounded-none lg:h-full">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">Welcome to NRC</h1>
          <p className="text-gray-600 mb-8 text-base lg:text-lg">
            Fill the information below to create a new account
          </p>

          {/* Backend Error Display */}
          {backendError && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-6">
              {backendError}
            </div>
          )}

          {/* Form Fields */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* First Name & Last Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-base lg:text-lg font-medium text-gray-700 mb-2">
                  First Name
                </label>
                <input
                  {...register('firstName', {
                    required: 'This Field is required',
                    pattern: {
                      value: /^[a-zA-Z]+(?:(?:|['_\. ])([a-zA-Z]*(\.\s)?[a-zA-Z])+)*$/,
                      message: 'Please enter a valid first name',
                    },
                  })}
                  type="text"
                  id="firstName"
                  className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Enter first name"
                />
                {errors.firstName && (
                  <span className="text-red-500 text-[12px]">{errors.firstName.message}</span>
                )}
              </div>

              <div>
                <label htmlFor="lastName" className="block text-base lg:text-lg font-medium text-gray-700 mb-2">
                  Last Name
                </label>
                <input
                  {...register('lastName', {
                    required: 'This Field is required',
                    pattern: {
                      value: /^[a-zA-Z]+(?:(?:|['_\. ])([a-zA-Z]*(\.\s)?[a-zA-Z])+)*$/,
                      message: 'Please enter a valid last name',
                    },
                  })}
                  type="text"
                  id="lastName"
                  className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Enter last name"
                />
                {errors.lastName && (
                  <span className="text-red-500 text-[12px]">{errors.lastName.message}</span>
                )}
              </div>
            </div>

            {/* Phone Number & Date of Birth */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="phoneNumber" className="block text-base lg:text-lg font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  {...register('phoneNumber', {
                    required: 'This field is required',
                    pattern: {
                      value: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
                      message: 'Please enter a valid phone number',
                    },
                  })}
                  type="text"
                  id="phoneNumber"
                  className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Enter phone number"
                />
                {errors.phoneNumber && (
                  <span className="text-red-500 text-[12px]">{errors.phoneNumber.message}</span>
                )}
              </div>

              <div>
                <label htmlFor="dateOfBirth" className="block text-base lg:text-lg font-medium text-gray-700 mb-2">
                  Date of Birth
                </label>
                <input
                  {...register('dateOfBirth', { required: 'This field is required' })}
                  type="date"
                  id="dateOfBirth"
                  onClick={dobDropDown}
                  className={`${dob ? 'text-black' : 'text-[#2632388F]'} w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500`}
                />
                {errors.dateOfBirth && (
                  <span className="text-red-500 text-[12px]">{errors.dateOfBirth.message}</span>
                )}
              </div>
            </div>

            {/* Gender & Identification Type */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="gender" className="block text-base lg:text-lg font-medium text-gray-700 mb-2">
                  Gender
                </label>
                <select
                  {...register('gender', { required: 'This field is required' })}
                  onClick={genderDropDown}
                  value={selectedGender}
                  onChange={(e) => setSelectedGender(e.target.value)}
                  id="gender"
                  className={`${gender ? 'text-black' : 'text-[#2632388F]'} w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500`}
                >
                  <option value="" disabled hidden>Select gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
                {errors.gender && (
                  <span className="text-red-500 text-[12px]">{errors.gender.message}</span>
                )}
              </div>

              <div>
                <label htmlFor="identificationType" className="block text-base lg:text-lg font-medium text-gray-700 mb-2">
                  Identification Type
                </label>
                <select
                  {...register('identificationType', { required: 'This field is required' })}
                  onClick={idDropDown}
                  value={selectedIdentification}
                  onChange={(e) => setSelectedIdentification(e.target.value)}
                  id="identificationType"
                  className={`${identification ? 'text-black' : 'text-[#2632388F]'} w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500`}
                >
                  <option value="" disabled hidden>Select identification type</option>
                  <option value="NIN">NIN</option>
                  <option value="National ID">National ID</option>
                  <option value="International Passport">International Passport</option>
                  <option value="Driver's License">Driver&apos;s License</option>
                </select>
                {errors.identificationType && (
                  <span className="text-red-500 text-[12px]">{errors.identificationType.message}</span>
                )}
              </div>
            </div>

            {/* ID Number & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="idNumber" className="block text-base lg:text-lg font-medium text-gray-700 mb-2">
                  ID Number
                </label>
                <input
                  {...register('idNumber', { required: 'This field is required' })}
                  type="text"
                  id="idNumber"
                  className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Enter ID number"
                />
                {errors.idNumber && (
                  <span className="text-red-500 text-[12px]">{errors.idNumber.message}</span>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-base lg:text-lg font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  {...register('email', {
                    required: 'This field is requird',
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: 'Please enter a valid email address',
                    },
                  })}
                  type="email"
                  id="email"
                  className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Enter email address"
                />
                {errors.email && (
                  <span className="text-red-500 text-[12px]">{errors.email.message}</span>
                )}
              </div>
            </div>

            {/* Password & Confirm Password */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="password" className="block text-base lg:text-lg font-medium text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    {...register('password', {
                      required: 'This field is required',
                      minLength: {
                        value: 8,
                        message: 'Password must be at least 8 characters long',
                      },
                      pattern: {
                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                        message: 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character',
                      },
                    })}
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500 pr-10"
                    placeholder="Enter password"
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-3"
                    onClick={togglePasswordVisibilityOne}
                  >
                    {showPassword ? <BiShow className="text-black" /> : <BiHide className="text-black" />}
                  </button>
                </div>
                {errors.password && (
                  <span className="text-red-500 text-[12px]">{errors.password.message}</span>
                )}
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-base lg:text-lg font-medium text-gray-700 mb-2">
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    {...register('confirmPassword', {
                      required: 'This field is required',
                      validate: (value) => value === watch('password') || 'Passwords do not match',
                    })}
                    type={showConfirmPassword ? 'text' : 'password'}
                    id="confirmPassword"
                    className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500 pr-10"
                    placeholder="Enter password"
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-3"
                    onClick={togglePasswordVisibilityTwo}
                  >
                    {showConfirmPassword ? <BiShow className="text-black" /> : <BiHide className="text-black" />}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <span className="text-red-500 text-[12px]">{errors.confirmPassword.message}</span>
                )}
              </div>
            </div>

            {/* Sign Up Button */}
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-3 rounded-md font-medium hover:bg-green-600 transition duration-200 flex items-center justify-center"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Creating Account...
                </>
              ) : (
                'Sign Up'
              )}
            </button>
          </form>

          {/* Footer with Sign In Link */}
          <footer className="p-8 text-center">
            <span className="text-gray-600">Already have an account? </span>
            <Link href="/auth/login" className="text-green-500 hover:underline">
              Sign In
            </Link>
          </footer>
        </div>
      </main>
    </div>
  );
}