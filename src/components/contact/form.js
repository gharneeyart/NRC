'use client';
import { useForm } from 'react-hook-form';

export default function Form() {
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
  return (
    <div className=" border rounded-md   ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="px-4 py-4 md:px-6 lg:px-[28px] lg:py-[30px] w-full   "
      >
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-10 lg:mb-4">
          <div>
            <div className="flex flex-col">
              <label className="py-1 text-[14px]" htmlFor="fullName">
                Full Name
              </label>
              <input
                {...register('fullName', { required: 'Full name is required' })}
                className={`border p-2 rounded ${errors.fullName ? 'border-red-500' : ' border-[#CFD6D0]'} outline-none  text-[14px]`}
                type="text"
                placeholder="Enter Your Name"
              />
            </div>
            {errors.fullName && (
              <p className="text-red-500 text-sm">{errors.fullName.message}</p>
            )}
          </div>
          <div>
            <div className="flex flex-col">
              <label className="py-1 text-[14px]" htmlFor="email">
                Enter Your Email
              </label>
              <input
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^\S+@\S+\.\S+$/,
                    message: 'Enter a valid email',
                  },
                })}
                className={`border p-2 rounded ${errors.email ? 'border-red-500' : ' border-[#CFD6D0]'} outline-none  text-[14px]`}
                type="email"
                placeholder="Email"
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>
        </div>
        <div className="lg:mb-4">
          <div className="flex flex-col ">
            <label className="py-1 text-[14px]" htmlFor="">
              Phone Number
            </label>
            <input
              {...register('phone', {
                required: 'Phone number is required',
                pattern: {
                  value: /^[0-9]{10,15}$/,
                  message: 'Enter a valid phone number',
                },
              })}
              className={`border p-2 rounded ${errors.phone ? 'border-red-500' : ' border-[#CFD6D0]'} outline-none  text-[14px]`}
              type="text"
              placeholder="Enter Your Phone number"
            />
          </div>
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone.message}</p>
          )}
        </div>
        <div className="lg:mb-3">
          <div className="flex flex-col ">
            <label className="py-1 text-[14px]" htmlFor="">
              Message
            </label>
            <textarea
              {...register('message', { required: 'Message cannot be empty' })}
              className={`border p-2 rounded ${errors.message ? 'border-red-500' : ' border-[#CFD6D0]'} outline-none  text-[14px]`}
              placeholder="Type your Message"
            ></textarea>
          </div>
          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message.message}</p>
          )}
        </div>
        <button
          className="bg-[#18A532] text-white w-full my-2 p-2 rounded-md hover:bg-green-700 transition "
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
