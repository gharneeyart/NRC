// 'use client';
// import Image from 'next/image';
// import { IoIosClose } from 'react-icons/io';
// import LogoutLogo from '../../images/logout.png';

// export default function LogoutModal({ isOpen, onClose, onLogout }) {
//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4">
//       <div className="relative w-[90%] lg:w-[45%] xl:w-[35%] p-12 bg-white rounded-lg shadow-lg flex flex-col items-center justify-center gap-4 mx-auto inset-0">
//         <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700" onClick={onClose}>
//           <IoIosClose size={20} />
//         </button>
//         <Image src={LogoutLogo} className="w-[80px]" alt="logout" />
//         <div className="flex flex-col items-center justify-center gap-2">
//           <h2 className="font-bold text-xl">Log Out</h2>
//           <p className="text-center font-thin">Do you wish to log out from your account?</p>
//         </div>
//         <div className="mt-4 flex justify-between gap-4 w-full">
//           <button type="button" onClick={onClose} className="bg-[#ffffff] text-[#18A532] py-2 w-full border border-[#18A532] rounded-md">
//             Yo! I’m Kidding
//           </button>
//           <button type="button" onClick={onLogout} className="bg-[#18A532] text-white py-2 w-full rounded-md">
//             Log Out
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// 'use client';
// import Image from 'next/image';
// import { IoIosClose } from 'react-icons/io';
// import LogoutLogo from '../../images/logout.png';

// export default function LogoutModal({ onClose, onLogout }) {
//   return (
//     <div className="relative w-[90%] lg:w-[45%] xl:w-[35%] p-12 bg-white rounded-lg shadow-lg flex flex-col items-center justify-center gap-4">
//       <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700" onClick={onClose}>
//         <IoIosClose size={20} />
//       </button>
//       <Image src={LogoutLogo} className="w-[80px]" alt="logout" />
//       <div className="flex flex-col items-center justify-center gap-2">
//         <h2 className="font-bold text-xl">Log Out</h2>
//         <p className="text-center font-thin">Do you wish to log out from your account?</p>
//       </div>
//       <div className="mt-4 flex justify-between gap-4 w-full">
//         <button onClick={onClose} className="bg-[#ffffff] text-[#18A532] py-2 w-full border border-[#18A532] rounded-md">
//           Cancel
//         </button>
//         <button onClick={onLogout} className="bg-[#18A532] text-white py-2 w-full rounded-md">
//           Log Out
//         </button>
//       </div>
//     </div>
//   );
// }

'use client';
import Image from 'next/image';
// import { IoIosClose } from 'react-icons/io';
import LogoutLogo from '../../images/logout.png';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function LogoutModal({isOpen, onClose, onLogout}){
  console.log(isOpen);
  
  return(
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[90%] lg:w-[45%] xl:w-[35%] p-12 rounded-lg">
        {/* <button 
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700" 
          onClick={onClose}
        >
          <IoIosClose size={20} />
        </button> */}
        
        <DialogHeader className="flex flex-col items-center gap-4">
          <Image src={LogoutLogo} className="w-[80px]" alt="logout" />
          <div className="flex flex-col items-center justify-center gap-2">
            <DialogTitle className="font-bold text-xl">Log Out</DialogTitle>
            <DialogDescription className="text-center font-thin">
              Do you wish to log out from your account?
            </DialogDescription>
          </div>
        </DialogHeader>

        <div className="mt-4 flex justify-between gap-4 w-full">
          <button 
            onClick={onClose} 
            className="bg-[#ffffff] text-[#CC3F3F] py-2 w-full border border-[#CC3F3F] rounded-md"
          >
            Yo! I’m Kidding
          </button>
          <button 
            onClick={onLogout} 
            className="bg-[#18A532] text-white py-2 w-full rounded-md"
          >
            Log Out
          </button>
        </div>
      </DialogContent>
    </Dialog>

  )
}

// import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
// import Image from "next/image";
// import LogoutLogo from "@/path-to-your-logo-image";
// import { IoIosClose } from "react-icons/io";

// export function LogoutDialog({ isOpen, onClose, onLogout }) {
//   return (
//     <Dialog open={isOpen} onOpenChange={onClose}>
//       <DialogContent className="w-[90%] lg:w-[45%] xl:w-[35%] p-12 rounded-lg">
//         <button 
//           className="absolute top-2 right-2 text-gray-500 hover:text-gray-700" 
//           onClick={onClose}
//         >
//           <IoIosClose size={20} />
//         </button>
        
//         <DialogHeader className="flex flex-col items-center gap-4">
//           <Image src={LogoutLogo} className="w-[80px]" alt="logout" />
//           <div className="flex flex-col items-center justify-center gap-2">
//             <DialogTitle className="font-bold text-xl">Log Out</DialogTitle>
//             <DialogDescription className="text-center font-thin">
//               Do you wish to log out from your account?
//             </DialogDescription>
//           </div>
//         </DialogHeader>

//         <div className="mt-4 flex justify-between gap-4 w-full">
//           <button 
//             onClick={onClose} 
//             className="bg-[#ffffff] text-[#18A532] py-2 w-full border border-[#18A532] rounded-md"
//           >
//             Cancel
//           </button>
//           <button 
//             onClick={onLogout} 
//             className="bg-[#18A532] text-white py-2 w-full rounded-md"
//           >
//             Log Out
//           </button>
//         </div>
//       </DialogContent>
//     </Dialog>
//   );
// }




