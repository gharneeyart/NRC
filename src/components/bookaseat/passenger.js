'use client'
import { FaPlus } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import { useState } from "react";
export default function Passenger() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });


  const onSubmit = (data) => {
    console.log(data);
  };

    const [passenger, setPassenger] = useState(false)

    const handlePassenger = () => {
      setPassenger(true);
    };
    return (
      <div className=" mb-11">
        <div className="flex justify-between mb-7">
        <h1 className="font-bold text-2xl">Passenger 1 - Coach No / Seat No: CO3/8</h1>
        <h3 className="text-[#FF3B30]">Clear Details</h3>
        </div>
        <form onSubmit={handleSubmit} className="lg:flex gap-12 w-full lg:mb-7">
          {/* Passenger Type */}
          <div className="w-full">
            <label className="font-medium md:text-lg text-base 2xl:text-lg lg:text-lg">Passenger Type</label>
            <select {...register('passenger' , {required: 'This field is required',
              pattern: {
                value: /^(adult|child)$/,
                message: "Invalid selection! Choose 'Adult' or 'Child'."}
            })}
             defaultValue="" onClick={handlePassenger} className={`${passenger?'text-black':'text-[#848484]'} border px-5 py-3 outline-none rounded-lg mt-3 mb-3 lg:mb-0 w-full h-12`}>
              <option value="" disabled>Select passenger type</option>
              <option value="adult">Adult</option>
              <option value="child">Child</option>
            </select>
            {errors.passenger && <span className="text-red-500 text-[12px]">{errors.passenger.message}</span>}
          </div>
  
          {/* Passenger Name */}
          <div className="w-full">
            <label className="font-medium md:text-lg text-base 2xl:text-lg lg:text-lg">Passenger Name</label>
            <input {...register('name', {required: 'This field is required',
              pattern: {
                value: /^[a-zA-Z\s]+$/,
                message: "Invalid name! Only alphabetic characters are allowed."
              }
            })}
             type="text" className="border px-5 py-3 rounded-lg mt-3 mb-3 lg:mb-0 w-full h-12 outline-none placeholder-[#848484]   " placeholder="Enter passenger name" />
          </div>
  
          {/* NIN Number */}
          <div className="w-full">
            <label className="font-medium md:text-lg text-base 2xl:text-lg lg:text-lg">NIN Number</label>
            <input {...register('nin', {required: 'This field is required',
              pattern: {
                value: /^[0-9]{11}$/,
                message: "Invalid NIN! NIN must be 11 digits."
              }})}
             type="text" className="border px-5 py-3 rounded-lg mt-3 mb-3 lg:mb-0 w-full h-12 outline-none placeholder-[#848484]  
" placeholder="Enter NIN" />
          </div>
        </form>
  
        <div className="lg:flex gap-12 w-full">
          {/* Email Address */}
          <div className="lg:w-[30%] w-full">
            <label className="font-medium md:text-lg text-base 2xl:text-lg lg:text-lg">Email Address</label>
            <input {...register('email', {required: 'This field is required',
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email! Enter a valid email address."
              }})}
             type="email" className="border px-5 py-3 rounded-lg mt-3 mb-3 lg:mb-0 w-full h-12 outline-none placeholder-[#848484] 
" placeholder="Enter email address" />
          </div>
  
          {/* Phone Number */}
          <div className="lg:w-[30%] w-full">
            <label className="font-medium md:text-lg text-base 2xl:text-lg lg:text-lg">Phone Number</label>
            <input {...register('phone', {required: 'This field is required',
              pattern: {
                value: /^[0-9]{11}$/,
                message: "Invalid phone number! Phone number must be 11 digits."
              }})}
             type="tel" className="border px-5 py-3 rounded-lg mt-3 mb-3 lg:mb-0 w-full h-12 outline-none placeholder-[#848484] 
" placeholder="Enter phone number" />
          </div>
        </div>
        <div className="flex gap-1 mt-3 font-medium text-lg">
        <FaPlus className="text-[#18A532] mt-1"/>
        <h3 className="text-[#18A532]">Add Passenger</h3>
        </div>
        
      </div>
    );
  }
  