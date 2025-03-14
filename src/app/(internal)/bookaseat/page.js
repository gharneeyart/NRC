'use client'
import { useState } from "react";
import Search from "@/components/bookaseat/search";
import Passenger from "@/components/bookaseat/passenger";
import ContactDetails from "@/components/bookaseat/contactDetails";
import SearchTrain from "@/components/reusables/search";
import Hours from "@/components/transport/hours";

export default function Book() {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [passengers, setPassengers] = useState([]);

  return (
    <div>
      <SearchTrain
        w="w-11/12"
        bg="bg-[#006B14]"
        gap="gap-8"
        btnBg="bg-[#FFFFFF]"
        inputPy="py-2"
        inputPadding="py-1.5"
        inputBg="bg-[#FFFFFF36]"
        inputBorder="border-2 border-[#FFFFFF61]"
        inputText="text-[#FFFFFF]"
        inputText2="text-[#ffffff]"
        btnText="text-[#006B14]"
        inputW="w-full lg:w-[25%] xl:w-[25%]"
        btnWidth="w-full lg:w-[25%] xl:w-[20%]"
        py="pt-6 pb-6 lg:pt-8 lg:pb-12 xl:pt-10 xl:pb-14"
      />
      <div className="w-[335px] md:w-[81%] lg:w-11/12 container mx-auto">
        <div className="font-semibold text-[16px] md:text-[20px] px-[39px] xl:text-[29px] text-center bg-[#E2F5E5] py-6 rounded-t-md">
          <h1>Lagos - Ibadan | Morning Train | Train No - LL1</h1>
        </div>
        <div className="lg:px-11 shadow-md rounded-b-md">
          <div>
            <Hours />
          </div>

          <h1 className="font-bold text-3xl mb-5">Book a Seat</h1>
          <div className="py-9 lg:border rounded-lg shadow lg:shadow-none lg:px-[66px] px-3 mb-12 text-[#263238]">
            <div className="text-[#263238]">
              <Search
                selectedSeats={selectedSeats}
                setSelectedSeats={setSelectedSeats}
                passengers={passengers}
                setPassengers={setPassengers}
              />
            </div>
            <hr className="mb-7" />
            <div className="text-[#263238]">
              {passengers.map((passenger, index) => (
                <Passenger key={index} index={index + 1} coach={passenger.coach} seat={passenger.seat} />
              ))}
              <hr className="mb-7" />
            </div>
            <div className="text-[#263238]">
              <ContactDetails />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}