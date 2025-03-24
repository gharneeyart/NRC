'use client';
import { BsSearch } from 'react-icons/bs';

export default function Hero({ searchTerm, setSearchTerm }) {
  return (
    <div className="faq-hero ">
      <div className="w-11/12 container mx-auto pt-44 pb-16">
        <div className="flex flex-col gap-4 items-center">
          <div className="w-full text-center md:w-[70%] text-white">
            <h1 className="font-bold w-full text-[28px] md:text-[40px] lg:text-[44px] mb-4">
              Frequently Asked Questions
            </h1>
            <p className="w-full font-medium text-sm md:text-base lg:text-lg text-[#DFDFDF]">
              Have Questions? We are here to help.
            </p>
          </div>
          <div className="flex items-center bg-white rounded-[35px] shadow-md py-1 w-70 md:w-80 px-2">
            <BsSearch className="text-[#858585]" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent outline-none ml-2"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
