"use client";
import { useState } from "react";
import { IoIosClose } from "react-icons/io";
import Image from "next/image";
import payTimer from "/public/icons/timer payment.svg";
import Dot from "/public/icons/paystackDot.svg";
import paystackLogo from "/public/icons/paystackLogo.svg";

export default function ModalDemo() {
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
          <div className="relative w-[90%] lg:w-[45%] xl:w-[35%] h-[200px] lg:h-[250px] xl:h-[280px] bg-white rounded-lg shadow-lg flex flex-col items-center justify-center gap-4 mx-auto inset-0 ">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={() => setIsOpen(false)}
            >
              <IoIosClose size={20} />
            </button>
            <Image src={payTimer} className="w-[80px]" />
            <div className="flex flex-col items-center justify-center gap-2">
              <p>Your seat(s) has been reserved for 10 mins</p>
              <div className="flex items-center justify-center gap-1">
                <Image src={Dot} className="w-[10px]" />
                <div className="flex items-end gap-1 justify-center">
                  <Image src={paystackLogo} className="w-[20px]" />
                  <h3 className="font-bold text-xl">paystack</h3>
                </div>
              </div>
            </div>
            <div className="mt-4 flex justify-end">
              <button
                type="submit"
                className="bg-[#18A532] text-white py-2 w-[220px] rounded-sm"
              >
                Make Payment
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
