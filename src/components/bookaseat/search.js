"use client";
import { useSearchStore } from "@/store/useSearchStore";
import { useState, useEffect } from "react";
import CoachModal from "../payment/coachModal";
import { Classes } from "@/db";

const Search = ({ selectedSeats, setSelectedSeats, passengers, setPassengers }) => {
  const { selectedClass, setSelectedClass } = useSearchStore();
  const [localClass, setLocalClass] = useState(selectedClass);
  const [selectedCoach, setSelectedCoach] = useState("");

  useEffect(() => {
    setLocalClass(selectedClass);
  }, [selectedClass]);

  const handleClassChange = (e) => {
    const newClass = e.target.value;
    setLocalClass(newClass);
    setSelectedClass(newClass);
    setSelectedCoach(""); // Reset coach selection when class changes
  };

  // Filter coaches based on the selected class
  const filteredCoaches = Classes.find((cls) => cls.class === localClass)?.coach || [];

  return (
    <div className="mb-11">
      <div className="">
        <div className="lg:flex gap-12 w-full">
          {/* Class */}
          <div className="w-full">
            <label className="font-medium md:text-lg text-base 2xl:text-lg lg:text-lg">Class</label>
            <select
              value={localClass}
              onChange={handleClassChange}
              className="border px-5 py-3 rounded-lg mt-3 mb-3 lg:mb-0 w-full h-12 text-[#848484]"
            >
              <option value="" disabled className="text-[#848484]">
                {selectedClass || "Select Class"}
              </option>
              <option value="First Class">First Class</option>
              <option value="Business Class">Business Class</option>
              <option value="Standard Class">Standard Class</option>
            </select>
          </div>

          {/* Coach */}
          <div className="w-full">
            <label className="font-medium md:text-lg text-base 2xl:text-lg lg:text-lg">Coach</label>
            <select
              value={selectedCoach}
              onChange={(e) => setSelectedCoach(e.target.value)}
              className="border px-5 py-3 rounded-lg mt-3 mb-3 lg:mb-0 w-full h-12 text-[#848484]"
            >
              <option value="" disabled className="text-[#848484]">
                Select Coach
              </option>
              {filteredCoaches.map((coach, index) => (
                <option key={index} value={coach}>
                  {coach}
                </option>
              ))}
            </select>
          </div>

          {/* Seat */}
          <div className="w-full flex flex-col gap-3">
            <label className="font-medium md:text-lg text-base 2xl:text-lg lg:text-lg">Seat</label>
            <div>
              <CoachModal
                selectedSeats={selectedSeats}
                setSelectedSeats={setSelectedSeats}
                passengers={passengers}
                setPassengers={setPassengers}
                selectedCoach={selectedCoach}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;