"use client";

import { useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { format } from "date-fns";
import { CiCalendarDate } from "react-icons/ci";

export default function CustomDatePicker({ onChange }){
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateSelection = (date) => {
    setSelectedDate(date);
    if (onChange) onChange(date);
  };

  return (
    <Popover className="relative">
      <Popover.Button className="flex items-center gap-3 px-4 py-2 border rounded-lg shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
        {selectedDate ? format(selectedDate, "yyyy-MM-dd") : "Select a date"}
        <CiCalendarDate className="w-5 h-5 text-gray-500 ml-2"  />
      </Popover.Button>

      <Transition
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute z-10 mt-2 bg-white border rounded-lg shadow-lg p-4 w-64">
          <Calendar onSelect={handleDateSelection} />
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};


const Calendar = ({ onSelect }) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const handleDayClick = (day) => {
    onSelect(day);
  };

  return (
    <div className="grid grid-cols-7 gap-1 text-center">
      {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
        <div key={day} className="text-gray-600 font-semibold">{day}</div>
      ))}
      {[...Array(30)].map((_, i) => {
        const day = new Date(currentDate.getFullYear(), currentDate.getMonth(), i + 1);
        return (
          <button
            key={i}
            className="p-2 rounded hover:bg-blue-500 hover:text-white"
            onClick={() => handleDayClick(day)}
          >
            {i + 1}
          </button>
        );
      })}
    </div>
  );
};


