"use client"; 
import { useState } from "react";
import { useForm } from 'react-hook-form'
import Image from "next/image";
import logo from '/public/images/image-3.svg'
import image from '/public/images/138-1(2).svg'

const ForgotPassword = () => {
    const [loading, setLoading] = useState(false)
        const [apiError, setApiError] = useState("")
    
        const {
            register,
            handleSubmit,
            reset,
            formState: {errors}
        } = useForm()
    
        const onSubmit = async (data)=>{
        console.log(data);
        
        }
        
  return (
    <div className="flex w-full body-password">
      <div className="w-[90%] mx-auto md:w-[60%] lg:w-[50%] m-5 lg:mx-0">
        <div className="bg-white rounded-lg shadow-lg mt-10 h-[450px] flex flex-col min-h-screen lg:justify-center lg:shadow-none lg:px-[80px] ">
          <div className="px-3.5 pt-4  lg:pt-0">
            <h2 className="text-2xl font-bold mb-2 lg:text-4xl">Forgot Password</h2>
            <p className="text-gray-600 mb-4 text-sm lg:text-xl">
              Enter your email address to reset your password
            </p>

            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <div>
              <label className="block text-gray-700 font-semibold mb-1 lg:text-xl">
                Email Address
              </label>
              <input
                type="email"
                {...register("email", {required: "Email address is required!",
                  pattern : {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Please enter a valid email address!"
                  }
              })} 
                placeholder="Enter email address"
                className="w-full px-3 py-2 border rounded-lg  mb-10 lg:text-xl"
                required
              />
              </div>
              {errors.email && <p className="text-red-600 mb-7">{errors.email.message}</p>}
              <button
                type="submit"
                className="bg-[#18A532] text-white w-full py-2 rounded-lg mb-2 lg:py-3"
              >
                Reset
              </button>
            </form>
          </div>

          <p className="text-center text-gray-700">
            Don’t have an account?{" "}
            <a href="/signup" className="text-green-600 font-semibold">Sign Up</a>
          </p>
        </div>
      </div>

      <div className="hidden lg:block object-cover  relative lg:w-[50%]">
        <Image src={image} alt="Train"  className="w-full h-[80%] object-cover"/>
        <div className="absolute top-0 mt-5 ml-3">
        <Image src={logo} alt="Logo"/>
        </div>
      </div>
    // </div>
  );
};

export default ForgotPassword;
