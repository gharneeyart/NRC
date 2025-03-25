// 'use client';
// import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
// import { BiShow, BiHide } from "react-icons/bi";
// import { useForm } from "react-hook-form";
// import { useState } from "react";
// import axios from "axios";
// import { useAuth } from "@/context/AuthContext";
// import { SuccessModal } from "./successModal";

// export default function ChangePasswordModal({ isOpen, onClose }) {
//   const [showPassword, setShowPassword] = useState(false);
//   const [showCurrentPassword, setShowCurrentPassword] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [successOpen, setSuccessOpen] = useState(false);
//   const { auth, logout } = useAuth();

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     reset,
//   } = useForm();

//   const togglePasswordVisibility = (field) => {
//     if (field === 'current') setShowCurrentPassword(!showCurrentPassword);
//     if (field === 'new') setShowPassword(!showPassword);
//   };

//   const onSubmit = async (data) => {
//     try {
//       setLoading(true);
//       setError('');
      
//       const response = await axios.put(
//         '/auth/update-password',
//         {
//           currentPassword: data.currentPassword,
//           newPassword: data.password,
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${auth.token}`,
//           },
//         }
//       );

//       if (response.data.success) {
//         reset();
//         onClose(); // Close the password change modal
//         setSuccessOpen(true); // Open the success modal
        
//         // Logout after 3 seconds
//         setTimeout(() => {
//           logout();
//         }, 3000);
//       }
//     } catch (err) {
//       setError(err.response?.data?.message || 'Failed to update password');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSuccessClose = () => {
//     setSuccessOpen(false);
//     logout(); // Force logout when success modal is closed
//   };

//   return (
//     <>
//       {/* Change Password Dialog */}
//       <Dialog open={isOpen} onOpenChange={onClose}>
//         <DialogContent className="w-[90%] lg:w-[45%] xl:w-[40%] rounded-lg px-10 py-7">
//           <div className="text-left flex flex-col gap-2">
//             <DialogTitle className="font-bold text-xl lg:text-3xl">Change Password</DialogTitle>
//             <DialogDescription className="font-thin">Enter your current and new password</DialogDescription>
//           </div>

//           {error && (
//             <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded my-4">
//               {error}
//             </div>
//           )}

//           <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 w-full gap-6 mt-4">
//             {/* Current Password */}
//             <div>
//               <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700 mb-1">
//                 Current Password
//               </label>
//               <div className="relative">
//                 <input
//                   {...register('currentPassword', {
//                     required: 'Current password is required',
//                   })}
//                   type={showCurrentPassword ? 'text' : 'password'}
//                   id="currentPassword"
//                   className="w-full border rounded-md p-2 outline-none focus:outline-none focus:ring-2 focus:ring-green-500 pr-10"
//                   placeholder="Enter current password"
//                 />
//                 <button 
//                   type="button" 
//                   className="absolute right-3 top-3" 
//                   onClick={() => togglePasswordVisibility('current')}
//                 >
//                   {showCurrentPassword ? <BiShow className="text-[#22222280]" /> : <BiHide className="text-[#22222280]" />}
//                 </button>
//               </div>
//               {errors.currentPassword && (
//                 <span className="text-red-500 text-[12px]">{errors.currentPassword.message}</span>
//               )}
//             </div>

//             {/* New Password */}
//             <div>
//               <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
//                 New Password
//               </label>
//               <div className="relative">
//                 <input
//                   {...register('password', {
//                     required: 'This field is required',
//                     minLength: { value: 8, message: 'Password must be at least 8 characters long' },
//                     pattern: {
//                       value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
//                       message: 'Password must contain at least one uppercase, lowercase, number and special character',
//                     },
//                   })}
//                   type={showPassword ? 'text' : 'password'}
//                   id="password"
//                   className="w-full border rounded-md p-2 outline-none focus:outline-none focus:ring-2 focus:ring-green-500 pr-10"
//                   placeholder="Enter new password"
//                 />
//                 <button 
//                   type="button" 
//                   className="absolute right-3 top-3" 
//                   onClick={() => togglePasswordVisibility('new')}
//                 >
//                   {showPassword ? <BiShow className="text-[#22222280]" /> : <BiHide className="text-[#22222280]" />}
//                 </button>
//               </div>
//               {errors.password && (
//                 <span className="text-red-500 text-[12px]">{errors.password.message}</span>
//               )}
//             </div>

//             <button 
//               type="submit" 
//               disabled={loading}
//               className="w-full mt-3 bg-[#18A532] text-white py-3 rounded-md font-medium hover:bg-green-600 transition duration-200 disabled:opacity-70"
//             >
//               {loading ? 'Updating...' : 'Update Password'}
//             </button>
//           </form>
//         </DialogContent>
//       </Dialog>

//       {/* Success Modal - Rendered independently */}
//       <SuccessModal isOpen={successOpen} onClose={handleSuccessClose} />
//     </>
//   );
// }

'use client';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { BiShow, BiHide } from "react-icons/bi";
import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";
import { useAuth } from "@/context/AuthContext";
import Image from "next/image";
import SuccessLogo from "../../images/Success Icon.png";
import { IoIosClose } from "react-icons/io";

export default function ChangePasswordModal({ isOpen, onClose }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const { auth, logout } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const togglePasswordVisibility = (field) => {
    if (field === 'current') setShowCurrentPassword(!showCurrentPassword);
    if (field === 'new') setShowPassword(!showPassword);
  };

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      setError('');
      
      const response = await axios.put(
        '/auth/update-password',
        {
          currentPassword: data.currentPassword,
          newPassword: data.password,
        },
        {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        }
      );

      if (response.data.success) {
        setSuccess(true);
        reset();
        const timer = setTimeout(() => {
                logout();
                onClose();
                router.push('/auth/login');
              }, 5000);
              return () => clearTimeout(timer);
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to update password');
    } finally {
      setLoading(false);
    }
  };
  // useEffect(() => {
  //   if (success) {
  //     setSuccess(true);
  //     const timer = setTimeout(() => {
  //       logout();
  //       onClose();
  //       router.push('/auth/login');
  //     }, 5000);
  //     return () => clearTimeout(timer);
  //   }
  // }, [success, logout, onClose, router]);
  // const handleClose = () => {
  //   if (success) {
  //     logout(); // Force logout if closing success modal
  //   }
  //   setSuccess(false);
  //   onClose();
  // };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[90%] lg:w-[45%] xl:w-[40%] rounded-lg px-10 py-7">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={handleClose}
        >
          <IoIosClose size={20} />
        </button>

        {success = true ? (
          /* Success Content */
          <div className="flex flex-col items-center justify-center gap-4 py-4">
            <Image 
              src={SuccessLogo} 
              className="w-[80px]" 
              alt="success" 
              width={80}
              height={80}
            />
            <div className="flex flex-col items-center justify-center gap-2">
              <h2 className="font-bold text-xl">Success!</h2>
              <p className="text-center font-thin">
                You have successfully updated your password! You will also be
                logged out from any device you logged in with previously.
              </p>
            </div>
            <div className="animate-pulse text-sm text-gray-500 mt-2">
              Redirecting to login...
            </div>
          </div>
        ) : (
          /* Password Form Content */
          <>
            <div className="text-left flex flex-col gap-2">
              <h2 className="font-bold text-xl lg:text-3xl">Change Password</h2>
              <p className="font-thin">Enter your current and new password</p>
            </div>

            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded my-4">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 w-full gap-6 mt-4">
             {/* Current Password */}
             <div>
               <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700 mb-1">
                 Current Password
               </label>
              <div className="relative">
                 <input
                  {...register('currentPassword', {
                    required: 'Current password is required',
                  })}
                  type={showCurrentPassword ? 'text' : 'password'}
                  id="currentPassword"
                  className="w-full border rounded-md p-2 outline-none focus:outline-none focus:ring-2 focus:ring-green-500 pr-10"
                  placeholder="Enter current password"
                />
                <button 
                  type="button" 
                  className="absolute right-3 top-3" 
                  onClick={() => togglePasswordVisibility('current')}
                >
                  {showCurrentPassword ? <BiShow className="text-[#22222280]" /> : <BiHide className="text-[#22222280]" />}
                </button>
              </div>
              {errors.currentPassword && (
                <span className="text-red-500 text-[12px]">{errors.currentPassword.message}</span>
              )}
            </div>

            {/* New Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                New Password
              </label>
              <div className="relative">
                <input
                  {...register('password', {
                    required: 'This field is required',
                    minLength: { value: 8, message: 'Password must be at least 8 characters long' },
                    pattern: {
                      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                      message: 'Password must contain at least one uppercase, lowercase, number and special character',
                    },
                  })}
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  className="w-full border rounded-md p-2 outline-none focus:outline-none focus:ring-2 focus:ring-green-500 pr-10"
                  placeholder="Enter new password"
                />
                <button 
                  type="button" 
                  className="absolute right-3 top-3" 
                  onClick={() => togglePasswordVisibility('new')}
                >
                  {showPassword ? <BiShow className="text-[#22222280]" /> : <BiHide className="text-[#22222280]" />}
                </button>
              </div>
              {errors.password && (
                <span className="text-red-500 text-[12px]">{errors.password.message}</span>
              )}
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="w-full mt-3 bg-[#18A532] text-white py-3 rounded-md font-medium hover:bg-green-600 transition duration-200 disabled:opacity-70"
            >
              {loading ? 'Updating...' : 'Update Password'}
            </button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}