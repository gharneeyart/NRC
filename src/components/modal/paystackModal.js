// 'use client';
// import { useState } from 'react';
// import { IoIosClose } from 'react-icons/io';
// import Image from 'next/image';
// import payTimer from '../../icons/timer payment.svg';
// import Dot from '../../icons/paystackDot.svg';
// import paystackLogo from '../../icons/paystackLogo.svg';
// import axios from 'axios';

// export default function Paystack({ isOpen, onClose, bookingId }) {
//   const [isProcessing, setIsProcessing] = useState(false);
//   const [error, setError] = useState(null);

//   const handlePayment = async () => {
//     try {
//       setIsProcessing(true);
//       setError(null);
      
//       const response = await axios.post('/payments/initialize', {
//         bookingId // This should be the MongoDB _id
//       });

//       if (response.data?.data?.authorization_url) {
//         window.location.href = response.data.data.authorization_url;
//       } else {
//         throw new Error('No payment URL received');
//       }
//     } catch (error) {
//       console.error('Payment error:', error);
//       setError(error.response?.data?.message || 'Payment initialization failed');
//     } finally {
//       setIsProcessing(false);
//     }
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4 z-50">
//       <div className="relative w-[90%] lg:w-[45%] xl:w-[35%] h-[320px] bg-white rounded-lg shadow-lg flex flex-col items-center justify-center gap-4 mx-auto p-6">
//         <button
//           className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
//           onClick={onClose}
//         >
//           <IoIosClose size={24} />
//         </button>

//         <Image src={payTimer} className="w-[80px]" alt="Payment timer" />

//         <div className="flex flex-col items-center justify-center gap-2 text-center">
//           <p>Your seat(s) has been reserved for 10 minutes</p>
//           <div className="flex items-center justify-center gap-1 mt-2">
//             <Image src={Dot} className="w-[10px]" alt="Dot" />
//             <div className="flex items-end gap-1 justify-center">
//               <Image src={paystackLogo} className="w-[20px]" alt="Paystack" />
//               <h3 className="font-bold text-xl">paystack</h3>
//             </div>
//           </div>
//         </div>

//         {error && (
//           <div className="text-red-500 text-sm mt-2">{error}</div>
//         )}

//         <div className="mt-4 w-full">
//           <button
//             onClick={handlePayment}
//             disabled={isProcessing}
//             className="bg-[#18A532] text-white py-3 w-full rounded-sm hover:bg-[#148C2A] transition-colors disabled:bg-gray-400"
//           >
//             {isProcessing ? 'Processing...' : 'Make Payment'}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }


// 'use client';
// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation'; 
// import { IoIosClose } from 'react-icons/io';
// import Image from 'next/image';
// import payTimer from '../../icons/timer payment.svg';
// import Dot from '../../icons/paystackDot.svg';
// import paystackLogo from '../../icons/paystackLogo.svg';
// import axios from 'axios';

// export default function Paystack({ isOpen, onClose, bookingId }) {
//   const [isProcessing, setIsProcessing] = useState(false);
//   const [error, setError] = useState(null);
//   const router = useRouter();

//   // Handle Payment Initialization
//   const handlePayment = async () => {
//     try {
//       setIsProcessing(true);
//       setError(null);
      
//       const response = await axios.post(
//         `${process.env.NEXT_PUBLIC_API_URL}/payments/initialize`, 
//         { bookingId }
//       );

//       if (response.data?.data?.authorization_url) {
//         window.location.href = response.data.data.authorization_url;
//       } else {
//         throw new Error('No payment URL received');
//       }
//     } catch (error) {
//       console.error('Payment error:', error);
//       setError(error.response?.data?.message || 'Payment initialization failed');
//     } finally {
//       setIsProcessing(false);
//     }
//   };

//   // Verify Payment after Redirect
//   useEffect(() => {
//     const verifyPayment = async () => {
//       const urlParams = new URLSearchParams(window.location.search);
//       const reference = urlParams.get('reference');

//       if (reference) {
//         try {
//           const response = await axios.get(
//             `${process.env.NEXT_PUBLIC_BACKEND_URL}/payments/verify/${reference}`
//           );

//           if (response.data.success) {
//             alert("Payment successful! Booking confirmed.");
//             router.push("/booking-success"); // Redirect to success page
//           } else {
//             setError("Payment verification failed.");
//           }
//         } catch (error) {
//           console.error("Verification error:", error);
//           setError("Error verifying payment. Please try again.");
//         }
//       }
//     };

//     verifyPayment();
//   }, []);

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4 z-50">
//       <div className="relative w-[90%] lg:w-[45%] xl:w-[35%] h-[320px] bg-white rounded-lg shadow-lg flex flex-col items-center justify-center gap-4 mx-auto p-6">
//         <button
//           className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
//           onClick={onClose}
//         >
//           <IoIosClose size={24} />
//         </button>

//         <Image src={payTimer} className="w-[80px]" alt="Payment timer" />

//         <div className="flex flex-col items-center justify-center gap-2 text-center">
//           <p>Your seat(s) has been reserved for 10 minutes</p>
//           <div className="flex items-center justify-center gap-1 mt-2">
//             <Image src={Dot} className="w-[10px]" alt="Dot" />
//             <div className="flex items-end gap-1 justify-center">
//               <Image src={paystackLogo} className="w-[20px]" alt="Paystack" />
//               <h3 className="font-bold text-xl">paystack</h3>
//             </div>
//           </div>
//         </div>

//         {error && (
//           <div className="text-red-500 text-sm mt-2">{error}</div>
//         )}

//         <div className="mt-4 w-full">
//           <button
//             onClick={handlePayment}
//             disabled={isProcessing}
//             className="bg-[#18A532] text-white py-3 w-full rounded-sm hover:bg-[#148C2A] transition-colors disabled:bg-gray-400"
//           >
//             {isProcessing ? 'Processing...' : 'Make Payment'}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }


// components/modal/paystackModal.js
'use client';
import { useState } from 'react';
import { IoIosClose } from 'react-icons/io';
import Image from 'next/image';
import payTimer from '../../icons/timer payment.svg';
import Dot from '../../icons/paystackDot.svg';
import paystackLogo from '../../icons/paystackLogo.svg';
// import API from '@/utils/api';
import axios from 'axios';

export default function Paystack({ isOpen, onClose, bookingId }) {
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState(null);

  const handlePayment = async () => {
    try {
      setIsProcessing(true);
      setError(null);
      
      const response = await axios.post('/payments/initialize', 
        
          {bookingId} // Use the _id from your booking data
        
      );

      if (response.data?.data?.authorization_url) {
        window.location.href = response.data.data.authorization_url;
      } else {
        throw new Error('No payment URL received');
      }
    } catch (error) {
      console.error('Payment error:', error);
      setError(error.response?.data?.message || 'Payment initialization failed');
    } finally {
      setIsProcessing(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4 z-50">
      <div className="relative w-[90%] lg:w-[45%] xl:w-[35%] h-[320px] bg-white rounded-lg shadow-lg flex flex-col items-center justify-center gap-4 mx-auto p-6">
      <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          <IoIosClose size={24} />
        </button>

        <Image src={payTimer} className="w-[80px]" alt="Payment timer" />

        <div className="flex flex-col items-center justify-center gap-2 text-center">
          <p>Your seat(s) has been reserved for 10 minutes</p>
          <div className="flex items-center justify-center gap-1 mt-2">
            <Image src={Dot} className="w-[10px]" alt="Dot" />
            <div className="flex items-end gap-1 justify-center">
              <Image src={paystackLogo} className="w-[20px]" alt="Paystack" />
              <h3 className="font-bold text-xl">paystack</h3>
            </div>
          </div>
        </div>

        {error && (
          <div className="text-red-500 text-sm mt-2">{error}</div>
        )}

        <div className="mt-4 w-full">
          <button
            onClick={handlePayment}
            disabled={isProcessing}
            className="bg-[#18A532] text-white py-3 w-full rounded-sm hover:bg-[#148C2A] transition-colors disabled:bg-gray-400"
          >
            {isProcessing ? 'Processing...' : 'Make Payment'}
          </button>
        </div>
      </div>
    </div>
  );
}
