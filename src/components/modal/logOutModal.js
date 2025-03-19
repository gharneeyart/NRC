'use client';
import Image from 'next/image';
import { useState } from 'react';
import LogoutLogo from '/public/images/logout.png';
import { IoIosClose } from 'react-icons/io';
export default function Logout() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex justify-center items-center">
      <button
        onClick={() => setIsOpen(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-600 transition"
      >
        Open Modal
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="relative w-[90%] lg:w-[45%] xl:w-[35%] p-12 bg-white rounded-lg shadow-lg flex flex-col items-center justify-center gap-4 mx-auto inset-0 ">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={() => setIsOpen(false)}
            >
              <IoIosClose size={20} />
            </button>
            <Image src={LogoutLogo} className="w-[80px]" alt="logout" />
            <div className="flex flex-col items-center justify-center gap-2">
              <h2 className="font-bold text-xl">Log Out</h2>
              <p className="text-center font-thin">
                Do you wish to log out from your account.
              </p>
            </div>
            <div className="mt-4 flex justify-between gap-4 w-full">
              <button
                type="submit"
                onClick={() => setIsOpen(false)}
                className="bg-[#ffffff] text-[#18A532] py-2 w-full border border-[#18A532] rounded-md"
              >
                Yo! I’m Kidding
              </button>
              <button
                type="submit"
                className="bg-[#18A532] text-white py-2 w-full  rounded-md"
              >
                Log Out
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
