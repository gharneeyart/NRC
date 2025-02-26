'use client'
import Image from "next/image"

import Train from '/public/images/138 1 (1).png'
import Logo from '/public/icons/image 3.png'
import { MdOutlineRemoveRedEye } from "react-icons/md"
import { FaRegEyeSlash } from "react-icons/fa6"
import { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function Login(){
  const { 
    register,
     handleSubmit,
     reset,
      formState: { errors } } = useForm();


  const onSubmit = (data) => {
    reset()
  
    console.log(data);
  }

      
  
  const [showPassword, setShowPassword]= useState(false);
  const handleTogglePassword = () => {
    setShowPassword(!showPassword)
  }
    return(
        <div className="lg:flex w-full lg:justify-center ">
          {/* <div className="">
          <Image  src={Train} alt='Old train in Thailand' className='w-full  block lg:hidden'/>
          </div> */}
            <div className="w-full lg:w-[600px] flex flex-col justify-center backg h-screen">
            <div className="w-[334px] lg:w-[450px] h-[550px] lg:h-[380px]  rounded-md bg-white space-y-6 mx-auto">
              <div className="w-[250px] pl-4 pt-6 lg:pt-0 lg:pl-0">
              <h1 className=" text-3xl  font-semibold">Welcome Back</h1>
              <p className="text-[#3F3F3F] text-[16px] ">sign in to continue</p>
              </div>
                <form onSubmit={handleSubmit(onSubmit)}
                 className="flex flex-col gap-4 w-[300px] lg:w-full mx-auto ">
                <div className="flex flex-col rounded-md">
                <label htmlFor='' className="font-medium">Email Address</label>
                <input
                  {...register("email", {
                    required: "Email Address is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid email format"
                    } 
           
                  })}
                 className="border rounded-[5px] p-2 w-full text-[#9C9C9C] text-[16px] outline-none" type="email" placeholder="Enter your email address"/>
                
                </div>
                {errors.email && <p className="text-red-500 text-end">{errors.email.message}</p>}
                  <div className="flex flex-col rounded-md">
                  <label htmlFor='' className="font-medium">Password</label>
                 <div className="relative flex flex-row ">
                 <input
                   {...register("password", {
                    required: "password is required"})}
                  className="border  w-full text-[#9C9C9C] p-2 outline-none rounded-[5px]" type={showPassword ? "text" : "password"} placeholder="Enter Password"/>
                  <button className="absolute right-4 translate-y-3 w-[20px] rounded-full"
                   onClick={handleTogglePassword}>
                    {showPassword? <MdOutlineRemoveRedEye /> : <FaRegEyeSlash />}
                  </button>
                   
                 </div>
                 {errors.password && <p className="text-red-500 text-end">{errors.password.message}</p>}
            
                  </div>
                  <a className='text-right text-[#006B14]'href="#">Forgot Password?</a>

                    <button className="bg-[#18A532] text-white p-[8px] rounded-md" type="submit">Sign up</button>
                    <p className="text-center">Don't have an account? <a href="#" className="text-[#006B14]">Sign up</a></p>
  
                  
                </form>
            </div>
            </div>
            <div className="w-full lg:w-[450px]  relative hidden lg:block">
               <div className="hidden lg:block">
               <Image src={Train} alt='Old train in Thailand' className='w-full h-full object-cover'/>
               </div>
                <span className="absolute top-4 left-6">
                  <Image src={Logo} alt='' />
                </span>
               
            </div>
            
            </div>
    )
} 

