'use client'
import { useModal } from "@/context/modalContext";
import Image from "next/image";
import payTimer from "/icons/timer payment.svg";
import Dot from "/icons/paystackDot.svg";
import paystackLogo from "/icons/paystackLogo.svg";
import { IoIosClose } from "react-icons/io";
export default function Modal() {
    const { isModalOpen, closeModal } = useModal();

    if (!isModalOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content relative w-[90%] lg:w-[45%] xl:w-[35%] h-[200px] lg:h-[250px] xl:h-[280px] bg-white rounded-lg shadow-lg flex flex-col items-center justify-center gap-4 mx-auto inset-0 ">
        <IoIosClose onClick={closeModal} className="absolute top-4 right-4 text-3xl text-gray-500 " />
        <Image src={payTimer} className="w-[80px]"/>
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
        <button
          type="submit"
          className="bg-[#18A532] text-white py-2 w-[220px] rounded-sm"
        >
          Make Payment
        </button>
      </div>
    </div>
  );
}
