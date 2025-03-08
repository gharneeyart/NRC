"use client";
const Search = () => {
  return (
    
    <div className="mb-11">
      
      <div className="">
        <div className="lg:flex gap-12 w-full">
          {/* Class */}
          <div className="w-full">
            <label className="font-medium md:text-lg text-base 2xl:text-lg lg:text-lg">Class</label>
            <select defaultValue="" className="border px-5 py-3 rounded-lg mt-3 mb-3 lg:mb-0 w-full h-12 text-[#848484]  ">
              <option value="" disabled className="text-[#848484]">Select Class</option>
              <option value="business">Business Class</option>
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
          <div className="w-full">
            <label className="font-medium md:text-lg text-base 2xl:text-lg lg:text-lg">Seat</label>
            <select defaultValue="" className="border px-5 py-3 rounded-lg mt-3 w-full h-12 text-[#848484]">
              <option value="" disabled className="text-[#848484]">Select Seat</option>
              <option value="1A">1A</option>
              <option value="2B">2B</option>
              <option value="3C">3C</option>
            </select>
          </div>
          
        </div>
        
      </div>
    </div>
    
  );
};

export default Search;
