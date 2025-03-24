'use client';
import { useState } from 'react';
import { IoIosClose } from 'react-icons/io';
import Image from 'next/image';
import payTimer from '../../icons/timer payment.svg';
import Dot from '../../icons/paystackDot.svg';
import paystackLogo from '../../icons/paystackLogo.svg';

export default function Paystack({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4 z-50">
      <div className="relative w-[90%] lg:w-[45%] xl:w-[35%] h-[200px] lg:h-[250px] xl:h-[280px] bg-white rounded-lg shadow-lg flex flex-col items-center justify-center gap-4 mx-auto inset-0">
        {/* Close Button */}
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          <IoIosClose size={20} />
        </button>

        {/* Timer Icon */}
        <Image src={payTimer} className="w-[80px]" alt="pay" />

        {/* Modal Content */}
        <div className="flex flex-col items-center justify-center gap-2">
          <p>Your seat(s) has been reserved for 10 mins</p>
          <div className="flex items-center justify-center gap-1">
            <Image src={Dot} className="w-[10px]" alt="dot" />
            <div className="flex items-end gap-1 justify-center">
              <Image
                src={paystackLogo}
                className="w-[20px]"
                alt="paystack"
              />
              <h3 className="font-bold text-xl">paystack</h3>
            </div>
          </div>
        </div>

        {/* Make Payment Button in Modal */}
        <div className="mt-4 flex justify-end">
          <button
            type="submit"
            className="bg-[#18A532] text-white py-2 w-[220px] rounded-sm hover:bg-[#148C2A] transition-colors"
          >
            Make Payment
          </button>
        </div>
      </div>
    </div>
  );
}