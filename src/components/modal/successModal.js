'use client'
import Image from "next/image";
import { useState } from "react";
import SuccessLogo from '/public/images/Success Icon.png'
import { IoIosClose } from "react-icons/io";
export default function Success() {
      const [isOpen, setIsOpen] = useState(false);
    return(
        <div className="flex justify-center items-center">
          <button
            onClick={() => setIsOpen(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-600 transition"
          >
            Open Modal
          </button>
    
          {isOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4">
              <div className="relative w-[90%] lg:w-[45%] xl:w-[35%] px-10 py-12 bg-white rounded-lg shadow-lg flex flex-col items-center justify-center gap-4 mx-auto inset-0 ">
                <button
                  className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                  onClick={() => setIsOpen(false)}
                >
                  <IoIosClose size={20} />
                </button>
                <Image src={SuccessLogo} className="w-[80px]"/>
                <div className="flex flex-col items-center justify-center gap-2">
                 <h2 className="font-bold text-xl">Success!</h2>
                 <p className="text-center font-thin">You have successfully updated your password!, you will also be logged out from any device you logged in with previously</p>
                </div>
                
              </div>
            </div>
          )}
        </div>
      );
}