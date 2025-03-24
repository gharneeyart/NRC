'use client'

import CustomDatePicker from "@/components/home/date";
import ModalButton from "@/components/modal/paystackModal";
import ResetPassword from "@/components/modal/changePasswordModal";
import SearchTrain from "@/components/reusables/search";
import Success from "@/components/modal/successModal";
import Logout from "@/components/modal/logOutModal";
import SeatSelectorModal from "@/components/modal/coachModal";


export default function Book() {
  return (
    <div>
      <SearchTrain
        w="w-11/12 lg:w-full"
        bg="bg-[#006b14]"
        btnBg="bg-[#FFFFFF]"
        gap='gap-4 lg:gap-8'
        rounded="rounded-2xl lg:rounded-none"
        inputBg="bg-[#FFFFFF36]"
        inputBorder="border border-[#FFFFFF61]"
        inputText="text-[#FFFFFF] text-[14px] md:text-base"
        inputPy='py-3'
        inputPadding='py-2.5'
        btnText='text-[#18A532] text-[14px] md:text-base'
        btnWidth='w-full lg:w-[25%] xl:w-[20%]'
        inputW='w-full lg:w-[25%]  xl:w-[20%] lg:mr-14'
        py='py-6 lg:py-8 xl:py-8'
      />
      <CustomDatePicker/>
      {/* <ModalButton/> */}
     <ResetPassword/>
     <Success/>
     <Logout/>
     <SeatSelectorModal/>
    </div>
  );
}
