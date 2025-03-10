'use client'
import { useState } from "react";
import { trainSchedule } from "@/db";

export default function Search() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");

  // Generate a unique list of station names from trainSchedule
  const stationNames = Array.from(
    new Set(trainSchedule.map((schedule) => schedule.name))
  );

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle search submission (e.g., navigate to search results page)
    console.log("Searching for trains from", from, "to", to, "on", date);
  };

  return (
    <div>
      <form
        onSubmit={handleSearch}
        className="flex flex-col lg:flex-row gap-8 items-end pt-6 pb-6 lg:pt-8 lg:pb-12 xl:pt-10 xl:pb-14 rounded-xl lg:rounded-md justify-between px-3 md:px-8 lg:px-10 w-[90%] mx-auto bg-white shadow-xl container">
        <div className="flex flex-col gap-1 w-full lg:w-[25%] xl:w-[30%]">
          <label htmlFor="from">From</label>
          <select
            id="from"
            value={from}
            className="py-2 outline-none border-2 border-[#D5D4D4] rounded-md text-[#9C9C9C] px-2"
            onChange={(e) => setFrom(e.target.value)}
          >
            <option value="">Select Originating Station</option>
            {stationNames.map((station, index) => (
              <option key={index} value={station}>
                {station}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-1 w-full lg:w-[25%] xl:w-[30%]">
          <label htmlFor="to">To</label>
          <select
            id="to"
            value={to}
            className="py-2 outline-none border-2 border-[#D5D4D4] rounded-md text-[#9C9C9C] px-2"
            onChange={(e) => setTo(e.target.value)}>
            <option value="">Select Destination Station</option>
            {stationNames.map((station, index) => (
              <option key={index} value={station}>
                {station}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-1 w-full lg:w-[25%] xl:w-[25%]">
          <label htmlFor="date">Date</label>
          <input
            id="date"
            type="date"
            value={date}
            className="py-1.5 outline-none border-2 border-[#D5D4D4] rounded-md text-[#9C9C9C] px-2"
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <button className="bg-[#18A532] py-2.5 rounded-sm text-white text-[14px] w-full lg:w-[25%] xl:w-[20%] ">
          Find my Train
        </button>
      </form>
    </div>
  );
}
