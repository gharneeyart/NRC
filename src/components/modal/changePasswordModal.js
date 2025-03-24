// 'use client';
// import { useForm } from 'react-hook-form';
// import { useState } from 'react';
// import { IoIosClose } from 'react-icons/io';
// import { BiHide, BiShow } from 'react-icons/bi';

// export default function ResetPasswordModal({ isOpen, onClose }) {
//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = (data) => {
//     alert('Password reset successful!');
//     console.log(data);
//     reset();
//     onClose();
//   };

//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   const togglePasswordVisibilityOne = () => setShowPassword(!showPassword);
//   const togglePasswordVisibilityTwo = () => setShowConfirmPassword(!showConfirmPassword);

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4">
//       <div className="relative w-[90%] lg:w-[45%] xl:w-[40%] bg-white rounded-lg shadow-lg flex flex-col px-10 py-7 gap-4 mx-auto inset-0">
//         <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700" onClick={onClose}>
//           <IoIosClose size={20} />
//         </button>
//         <div className="text-left flex flex-col gap-2">
//           <h2 className="font-bold text-xl lg:text-3xl">Change Password</h2>
//           <p className="font-thin">Enter new password details below</p>
//         </div>
//         <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 w-full gap-6">
//           <div>
//             <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
//             <div className="relative">
//               <input
//                 {...register('password', {
//                   required: 'This field is required',
//                   minLength: { value: 8, message: 'Password must be at least 8 characters long' },
//                   pattern: {
//                     value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
//                     message: 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character',
//                   },
//                 })}
//                 type={showPassword ? 'text' : 'password'}
//                 id="password"
//                 className="w-full border rounded-md p-2 outline-none focus:outline-none focus:ring-2 focus:ring-green-500 pr-10"
//                 placeholder="Enter password"
//               />
//               <button type="button" className="absolute right-3 top-3" onClick={togglePasswordVisibilityOne}>
//                 {showPassword ? <BiShow className="text-[#22222280]" /> : <BiHide className="text-[#22222280]" />}
//               </button>
//             </div>
//             {errors.password && <span className="text-red-500 text-[12px]">{errors.password.message}</span>}
//           </div>

//           <div>
//             <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
//             <div className="relative">
//               <input
//                 {...register('confirmPassword', {
//                   required: 'This field is required',
//                   validate: (value) => value === watch('password') || 'Passwords do not match',
//                 })}
//                 type={showConfirmPassword ? 'text' : 'password'}
//                 id="confirmPassword"
//                 className="w-full border rounded-md p-2 outline-none focus:outline-none focus:ring-2 focus:ring-green-500 pr-10"
//                 placeholder="Enter password"
//               />
//               <button type="button" className="absolute right-3 top-3" onClick={togglePasswordVisibilityTwo}>
//                 {showConfirmPassword ? <BiShow className="text-[#22222280]" /> : <BiHide className="text-[#22222280]" />}
//               </button>
//             </div>
//             {errors.confirmPassword && <span className="text-red-500 text-[12px]">{errors.confirmPassword.message}</span>}
//           </div>
//           <button type="submit" className="w-full mt-3 bg-[#18A532] text-white py-3 rounded-md font-medium hover:bg-green-600 transition duration-200">
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

'use client';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { IoIosClose } from 'react-icons/io';
import { BiHide, BiShow } from 'react-icons/bi';

export default function ResetPasswordModal({ onClose }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const onSubmit = (data) => {
    console.log('Password reset data:', data);
    onClose();
  };

  return (
    <div className="relative w-[90%] lg:w-[45%] xl:w-[40%] bg-white rounded-lg shadow-lg flex flex-col px-10 py-7 gap-4">
      <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700" onClick={onClose}>
        <IoIosClose size={20} />
      </button>
      <div className="text-left flex flex-col gap-2">
        <h2 className="font-bold text-xl lg:text-3xl">Change Password</h2>
        <p className="font-thin">Enter new password details below</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 w-full gap-6">
        {/* Form fields same as before */}
        {/* ... */}
        <button type="submit" className="w-full mt-3 bg-[#18A532] text-white py-3 rounded-md font-medium">
          Submit
        </button>
      </form>
    </div>
  );
}