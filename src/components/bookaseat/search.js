"use client";
import { useSearchStore } from "@/store/useSearchStore";
import { useState } from "react"
import CoachModal from "../payment/coachModal";
const Search = () => {
  const { selectedClass} = useSearchStore()

 const unSelect =() => {
  if (selectedClass === 'business') {
        return ""    
  } else if (selectedClass === 'economy'){

  }


 }
 const [isModalOpen, setIsModalOpen] = useState(false)
 const openModal = () => {
     setIsModalOpen(true)
 }
  return (
    
    
    <div className="mb-11">
      
      <div className="">
        <div className="lg:flex gap-12 w-full">
          {/* Class */}
          <div className="w-full">
            <label className="font-medium md:text-lg text-base 2xl:text-lg lg:text-lg">Class</label>
            <select defaultValue="" className="border px-5 py-3 rounded-lg mt-3 mb-3 lg:mb-0 w-full h-12 text-[#848484]  ">
              <option value="" disabled className="text-[#848484]">{selectedClass}</option>
              <option value="business">{unSelect()}</option>
              <option value="economy">Standard Class</option>
              <option value="first">First Class</option>
            </select>
          </div>

          {/* Coach */}
          <div className="w-full">
            <label className="font-medium md:text-lg text-base 2xl:text-lg lg:text-lg">Coach</label>
            <select defaultValue="" className="border px-5 py-3 rounded-lg mt-3 mb-3 lg:mb-0 w-full h-12 text-[#848484]">
              <option value="" disabled className="text-[#848484]">Select Coach</option>
              <option value="A">Coach A</option>
              <option value="B">Coach B</option>
              <option value="C">Coach C</option>
            </select>
          </div>

          {/* Seat */}
          <div className="w-full flex flex-col justify-between">
            <label className="font-medium md:text-lg text-base 2xl:text-lg lg:text-lg">Seat</label>
            <div>
            <CoachModal/>
            </div>
          </div>
          
        </div>
        
      </div>
    </div>
    
  );
};

export default Search;
