'use client';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { SuccessModal } from '../modal/successModal';

export default function Form() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const onSubmit = async (data) => {
    setIsSubmitting(true);

    try {
      // Replace with your Formspree endpoint
      const response = await fetch('https://formspree.io/f/xdkedayv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.fullName,
          email: data.email,
          phone: data.phone,
          message: data.message,
        }),
      });

      if (response.ok) {
        setIsSuccessModalOpen(true);
        reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
   <>
       <div className="border rounded-md">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="px-4 py-4 md:px-6 lg:px-[28px] lg:py-[30px] w-full"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-10 lg:mb-4">
          <div>
            <div className="flex flex-col">
              <label className="py-1 text-base lg:text-lg font-medium" htmlFor="fullName">
                Full Name
              </label>
              <input
                {...register('fullName', { required: 'Full name is required' })}
                className={`border p-2 rounded ${errors.fullName ? 'border-red-500' : 'border-[#CFD6D0]'} outline-none text-[14px]`}
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
              <label className="py-1 text-base lg:text-lg font-medium" htmlFor="email">
                Email
              </label>
              <input
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^\S+@\S+\.\S+$/,
                    message: 'Enter a valid email',
                  },
                })}
                className={`border p-2 rounded ${errors.email ? 'border-red-500' : 'border-[#CFD6D0]'} outline-none text-[14px]`}
                type="email"
                placeholder="Enter your Email"
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>
        </div>
        <div className="lg:mb-4">
          <div className="flex flex-col">
            <label className="py-1 text-base lg:text-lg font-medium" htmlFor="">
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
              className={`border p-2 rounded ${errors.phone ? 'border-red-500' : 'border-[#CFD6D0]'} outline-none text-[14px]`}
              type="text"
              placeholder="Enter Your Phone number"
            />
          </div>
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone.message}</p>
          )}
        </div>
        <div className="lg:mb-3">
          <div className="flex flex-col">
            <label className="py-1 text-base lg:text-lg font-medium" htmlFor="">
              Message
            </label>
            <textarea
              {...register('message', { required: 'Message cannot be empty' })}
              className={`border p-2 rounded ${errors.message ? 'border-red-500' : 'border-[#CFD6D0]'} outline-none text-[14px]`}
              placeholder="Type your Message"
            ></textarea>
          </div>
          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message.message}</p>
          )}
        </div>
        
        <button
          className="bg-[#18A532] text-white w-full my-2 p-2 rounded-md hover:bg-green-700 transition disabled:opacity-50 text-base lg:text-lg font-medium"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Submit'}
        </button>
      </form>
    </div>
    <SuccessModal 
    isOpen={isSuccessModalOpen} 
    onClose={() => setIsSuccessModalOpen(false)}
    message="Thank you for contacting us! We'll get back to you soon."
  />
   </>
  );
}
