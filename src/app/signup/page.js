"use client";
import Image from "next/image";
import { useState } from "react";
import Train from "/public/images/train.png";
import { useForm } from "react-hook-form";
import { BiHide } from "react-icons/bi";
import { BiShow } from "react-icons/bi";

export default function SignUp() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  const onSubmit = (data) => {
    alert("Signup successful!");
    console.log(data);
    reset();
  };
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [gender, showGender] = useState(false);
  const [identification, showIdentification] = useState(false);
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedIdentification, setSelectedIdentification] = useState("");

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

    return(
        <div className="grid grid-cols-1 lg:grid-cols-2 backgd px-3 lg:p-0 max-w-[1700px] mx-auto">
           <div className=" p-3 md:px-10 md:py-14 lg:p-14 bg-white rounded-md shadow-md lg:rounded-none lg:shadow-none mt-3 lg:mt-0 mb-10 lg:mb-0">
                <h1 className="font-bold text-xl">Welcome to NRC</h1>
                <p className="text-[14px] text-[#3F3F3F]">Fill the information below to create a new account</p>
                <form onSubmit={handleSubmit(onSubmit)} className="py-5 text-[14px] flex flex-col gap-6 ">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                         <div className="flex flex-col gap-1">
                              <label>First Name</label>
                              <input {...register('firstName', { required:'This Field is required',
                                    pattern: {
                                        value: /^[a-zA-Z]+(?:(?:|['_\. ])([a-zA-Z]*(\.\s)?[a-zA-Z])+)*$/, 
                                      message: "Please enter a valid first name"
                              }})}
                              type="text" placeholder="Enter first Name" className="border-2 outline-none rounded-sm px-3 py-2 border-primar"/>
                              {errors.firstName && <span className="text-red-500 text-[12px]">{errors.firstName.message}</span>}
                         </div>
                         <div className="flex flex-col gap-1">
                              <label>Last Name</label>
                              <input {...register('lastName', { required:'This Field is required',
                                    pattern: {
                                        value: /^[a-zA-Z]+(?:(?:|['_\. ])([a-zA-Z]*(\.\s)?[a-zA-Z])+)*$/, 
                                      message: "Please enter a valid last name"
                              }})}
                               type="text" placeholder="Enter last Name" className="border-2 outline-none rounded-sm px-3 py-2"/>
                               {errors.lastName && <span className="text-red-500 text-[12px]">{errors.lastName.message}</span>}
                         </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                         <div className="flex flex-col gap-1">
                              <label>Phone Number</label>
                              <input {...register('phonenumber', {required: 'This field is required',
                                        pattern: {
                                        value: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
                                        message: "Please enter a valid phone number",
                                        },
                                   })}
                               type="tel" placeholder="Enter phone number" className="border-2 outline-none rounded-sm px-3 py-2"/>
                               {errors.phonenumber && <span className="text-red-500 text-[12px]">{errors.phonenumber.message}</span>}
                         </div>
                         <div className="flex flex-col gap-1">
                              <label>Date of Birth</label>
                              <input {...register('dob', {required: 'This field is required'})}
                               type="date" placeholder="Select Date" className="border-2 outline-none rounded-sm px-3 py-2"/>
                               {errors.dob && <span className="text-red-500 text-[12px]">{errors.dob.message}</span>}
                         </div>
                    </div>
                    <div className="grid gid-cols-1 md:grid-cols-2 gap-4">
                         <div className="flex flex-col gap-1">
                              <label>Gender</label>
                              <select {...register('gender', {required: 'This field is required'})} onClick={genderDropDown} value={selectedGender} onChange={(e) => setSelectedGender(e.target.value)}
                              className= {`${gender ? "text-black":"text-[#2632388F]"}  border-2 rounded-sm px-3 py-2 outline-none`}>
                                   <option value='' disabled hidden>Select gender</option>
                                   <option value="Male">Male</option>
                                   <option value="Female">Female</option>
                              </select>
                               {errors.gender && <span className="text-red-500 text-[12px]">{errors.gender.message}</span>}
                         </div>
                         <div className="flex flex-col gap-1">
                              <label>Identification Type</label>
                              <select {...register('identification', {required: 'This field is required'})}
                              onClick={idDropDown} value={selectedIdentification} onChange={(e) => setSelectedIdentification(e.target.value)} className={`${identification? 'text-black':'text-[#2632388F]'} border-2 rounded-sm px-3 py-2 outline-none`}>
                                   <option value='' disabled hidden>Select Identification Type</option>
                                   <option value="nin">NIN</option>
                                   <option value="license">Driver's License</option>
                                   <option value="voters">Voter's Card</option>
                                   <option value="passport">International Passport</option>
                              </select>
                               {errors.identification && <span className="text-red-500 text-[12px]">{errors.identification.message}</span>}
                         </div>
                    </div>
                     
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="flex flex-col gap-1">
                              <label>ID Number</label>
                              <input {...register('idnumber', {required: 'This field is required'})}
                               type="text" placeholder="Enter id number" className="border-2 outline-none rounded-sm px-3 py-2"/>
                               {errors.idnumber && <span className="text-red-500 text-[12px]">{errors.idnumber.message}</span>}
                          </div>
                          <div className="flex flex-col gap-1">
                              <label>Email</label>
                              <input {...register("email", {required: "This field is requird",
                                        pattern: {
                                             value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                             message: "Please enter a valid email address",
                                        },
                                        })}
                              type="email" placeholder="Enter email address" className="border-2 outline-none rounded-sm px-3 py-2"/>
                               {errors.email && <span className="text-red-500 text-[12px]">{errors.email.message}</span>}
                          </div>
                     </div>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="flex flex-col gap-1 relative ">
                              <label>Password</label>
                              <input 
                                   {...register("password", {required: "This field is required",
                                        minLength: {
                                             value: 8,
                                             message: "Password must be at least 8 characters long",
                                        },
                                        pattern: {
                                             value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                             message: "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
                                        },
                                        })}  type={showPassword? 'text'  : "password"} placeholder="Password" className="border-2 outline-none rounded-sm px-3 py-2 "/>
                                        <span onClick={togglePasswordVisibilityOne} className='absolute right-4 top-10 cursor-pointer'>{showPassword? <BiShow className='text-black'/> : <BiHide className='text-black'/>}</span>
                                        {errors.password && <span className="text-red-500 text-[12px]">{errors.password.message}</span>}
                          </div>
                          <div className="flex flex-col gap-1 relative">
                              <label>Confirm Password</label>
                              <input {...register("confirmPassword", {required: "This field is required",
                                        validate:(value) => value === watch('password') || "Passwords do not match"
                                   })}
                              type={showConfirmPassword? 'text'  : "password"} placeholder="Confirm Password" className="border-2 outline-none rounded-sm px-3 py-2"/>
                              <span onClick={togglePasswordVisibilityTwo} className='absolute right-4 top-10 cursor-pointer'>{showConfirmPassword? <BiShow className='text-black'/> : <BiHide className='text-black'/>}</span>
                               {errors.confirmPassword && <span className="text-red-500 text-[12px]">{errors.confirmPassword.message}</span>}
                          </div>     
                     </div>
                     <div className="flex items-baseline gap-2">
                         <input {...register("terms", {required: "This field is required"})}
                         type="checkbox" name="terms" value="terms" className="outline-none bg-[#18A532] active:bg-[#18A532] px-5"/>
                         <span>By proceeding with the registration, I confirm that I haveread and accept the Privacy Policy and Terms of Service. </span> 
                     </div>
                     {errors.terms && <span className="text-red-500 text-[12px]">{errors.terms.message}</span>}
                     <button className="bg-[#18A532] w-full text-white py-2 rounded-md shadow-sm">Sign Up</button>
                     <p className="text-center ">Already have an account? <span className="text-[#18A532]">Sign in</span></p>
                </form>
           </div>
           <div>
               <Image src={Train} alt="signup"  className="h-[90%] w-full hidden lg:block"/>
           </div>
        </div>
    )
}
