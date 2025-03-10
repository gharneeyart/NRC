"use client"; 
import { useState } from "react";
import { useForm } from 'react-hook-form'
import Image from "next/image";
import logo from '/public/images/image-3.svg'
import image from '/public/images/138-1(2).svg'
import Link from "next/link";
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
    <div className="w-11/12 grid grid-cols-1 lg:grid-cols-2 lg:gap-14 px-3 lg:p-0 mx-auto backg container">
        <div className="w-full bg-white rounded-lg shadow-lg p-3 md:px-10 md:py-14 lg:p-0 h-[500px] my-6 pt-6 flex flex-col lg:justify-center lg:shadow-none ">
          <div >
            <h2 className="text-xl lg:text-3xl font-bold mb-2 ">Forgot Password</h2>
            <p className="text-gray-600 mb-4 text-sm lg:text-base">
              Enter your email address to reset your password
            </p>

            <form onSubmit={handleSubmit(onSubmit)} noValidate className="text-sm lg:text-base flex flex-col gap-4">
              <div>
              <label className="block text-gray-700 font-semibold mb-1 ">
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
                className="w-full px-3 py-2 border rounded-lg outline-none"
                required
              />
              </div>
              {errors.email && <p className="text-red-600 mb-7">{errors.email.message}</p>}
              <button
                type="submit"
                className="bg-[#18A532] text-white  w-full py-2 rounded-md mb-2 "
              >
                Reset
              </button>
            </form>
          </div>

          <p className="text-center text-gray-700 text-sm lg:text-base">
            Don’t have an account?{" "}
            <Link href="/signup" className="text-green-600 font-semibold">Sign Up</Link>
          </p>
        </div>
      <div className="hidden lg:block object-cover  relative lg:w-full">
        <Image src={image} alt="Train"  className="w-full h-[80%] object-cover"/>
        <div className="absolute top-0 mt-5 ml-3">
        <Link href="/">
        <Image src={logo} alt="Logo"/>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
