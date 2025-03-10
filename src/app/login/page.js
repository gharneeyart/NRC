"use client";
import Image from "next/image";
import Train from "/public/images/138 1 (1).png";
import Logo from "/public/icons/image 3.png";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaRegEyeSlash } from "react-icons/fa6";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";

export default function Login() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    reset();
    console.log(data);
  };
  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="w-11/12 grid grid-cols-1 lg:grid-cols-2 lg:gap-14 container px-3 lg:p-0 backg mx-auto ">
      <div className="bg-white space-y-4 my-6 pt-6 pb-20 md:pt-8 md:pb-8 px-4 md:px-8 lg:px-0 rounded-lg lg:my-16   ">
        <div className="flex flex-col gap-1">
          <h1 className=" text-xl lg:text-3xl font-bold">Welcome Back</h1>
          <p className="text-[#3F3F3F] text-sm lg:text-[16px]  ">sign in to continue</p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-6 text-sm lg:text-base   "
        >
          <div className="flex flex-col gap-2 rounded-md">
            <label htmlFor="" className="font-medium">
              Email Address
            </label>
            <input
              {...register("email", {
                required: "Email Address is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email format",
                },
              })}
              className="border rounded-[5px] p-2 w-full text-[#9C9C9C] text-[16px] outline-none"
              type="email"
              placeholder="Enter your email address"
            />
          </div>
          {errors.email && (
            <p className="text-red-500 text-end">{errors.email.message}</p>
          )}
          <div className="flex flex-col  gap-2 rounded-md">
            <label htmlFor="" className="font-medium">
              Password
            </label>
            <div className="relative flex flex-row ">
              <input
                {...register("password", {
                  required: "password is required",
                })}
                className="border  w-full text-[#9C9C9C] p-2 outline-none rounded-[5px]"
                type={showPassword ? "text" : "password"}
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
          <a className="text-right text-[#006B14]" href="#">
            Forgot Password?
          </a>

          <button
            className="bg-[#18A532] text-white p-[8px] rounded-md"
            type="submit"
          >
            Sign In
          </button>
          <p className="text-center pb-20 lg:pb-0">
            Don't have an account?{" "}
            <Link href="/signup" className="text-[#006B14]">
              Sign up
            </Link>
          </p>
        </form>
      </div>

      <div className="relative">
               <Image src={Train} alt="login"  className="h-screen 2xl:h-[70%] container w-full hidden lg:block"/>
               <Link href='/' ><Image src={Logo} alt='Logo' className="absolute top-5 left-6 hidden lg:block" /></Link>
      </div>
    </div>
  );
}
