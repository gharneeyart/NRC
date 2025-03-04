import { FaPlus } from "react-icons/fa6";
export default function Passenger() {
    return (
      <div className=" mb-11">
        <div className="flex justify-between mb-7">
        <h1 className="font-bold text-2xl">Passenger 1</h1>
        <h3 className="text-[#FF3B30]">Clear Details</h3>
        </div>
        <div className="lg:flex gap-12 w-full lg:mb-7">
          {/* Passenger Type */}
          <div className="w-full">
            <label className="font-medium md:text-lg text-base 2xl:text-lg lg:text-lg">Passenger Type</label>
            <select defaultValue="" className="border px-5 py-3 rounded-lg mt-3 mb-3 lg:mb-0 w-full h-12 text-[#848484]">
              <option value="" disabled className="text-[#848484]">Select passenger type</option>
              <option value="economy">Standard Class</option>
              <option value="first">First Class</option>
            </select>
          </div>
  
          {/* Passenger Name */}
          <div className="w-full">
            <label className="font-medium md:text-lg text-base 2xl:text-lg lg:text-lg">Passenger Name</label>
            <input type="text" className="border px-5 py-3 rounded-lg mt-3 mb-3 lg:mb-0 w-full h-12 outline-none placeholder-[#848484]   " placeholder="Enter passenger name" />
          </div>
  
          {/* NIN Number */}
          <div className="w-full">
            <label className="font-medium md:text-lg text-base 2xl:text-lg lg:text-lg">NIN Number</label>
            <input type="text" className="border px-5 py-3 rounded-lg mt-3 mb-3 lg:mb-0 w-full h-12 outline-none placeholder-[#848484]  
" placeholder="Enter NIN" />
          </div>
        </div>
  
        <div className="lg:flex gap-12 w-full">
          {/* Email Address */}
          <div className="lg:w-[30%] w-full">
            <label className="font-medium md:text-lg text-base 2xl:text-lg lg:text-lg">Email Address</label>
            <input type="email" className="border px-5 py-3 rounded-lg mt-3 mb-3 lg:mb-0 w-full h-12 outline-none placeholder-[#848484] 
" placeholder="Enter email address" />
          </div>
  
          {/* Phone Number */}
          <div className="lg:w-[30%] w-full">
            <label className="font-medium md:text-lg text-base 2xl:text-lg lg:text-lg">Phone Number</label>
            <input type="tel" className="border px-5 py-3 rounded-lg mt-3 mb-3 lg:mb-0 w-full h-12 outline-none placeholder-[#848484] 
" placeholder="Enter phone number" />
          </div>
        </div>
        <div className="flex gap-1 mt-3 font-medium text-lg">
        <FaPlus className="text-[#18A532] mt-1"/>
        <h3 className="text-[#18A532]">Add Passenger</h3>
        </div>
        
      </div>
    );
  }
  