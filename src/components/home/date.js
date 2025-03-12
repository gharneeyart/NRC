"use client";

import { useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameDay } from "date-fns";
import { CiCalendarDate } from "react-icons/ci";

export default function CustomDatePicker({ onChange, paddingY, textwrap, backgroundCol, text, focusColor }) {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateSelection = (date) => {
    setSelectedDate(date);
    if (onChange) onChange(date);
  };

  return (
    <Popover className="relative">
      <Popover.Button className={`flex items-center ${text} gap-3 px-4 ${paddingY} border rounded-lg shadow-sm ${backgroundCol} focus:outline-none focus:ring-1 ${focusColor}`}>
        {selectedDate ? format(selectedDate, "yyyy-MM-dd") : "Select a date"}
        <CiCalendarDate className={`w-5 h-5 ${textwrap} ml-2`} />
      </Popover.Button>

      <Transition
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute z-10 mt-2 bg-white border rounded-lg shadow-lg p-4 w-64 min-w-[200px]">
          <Calendar onSelect={handleDateSelection} selectedDate={selectedDate} />
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}

const Calendar = ({ onSelect, selectedDate }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const daysInMonth = eachDayOfInterval({
    start: startOfMonth(currentMonth),
    end: endOfMonth(currentMonth),
  });

  const handleDayClick = (day) => {
    onSelect(day);
  };

  return (
    <div>
      <div className="flex justify-between mb-2">
        <button onClick={() => setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() - 1)))}>&lt;</button>
        <span className="font-semibold">{format(currentMonth, "MMMM yyyy")}</span>
        <button onClick={() => setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() + 1)))}>&gt;</button>
      </div>

      <div className="grid grid-cols-7 gap-1 text-center">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="text-gray-600 font-semibold">{day}</div>
        ))}
        {daysInMonth.map((day) => (
          <button
            key={day}
            className={`p-2 rounded ${isSameDay(day, selectedDate) ? "bg-blue-500 text-white" : "hover:bg-blue-100"}`}
            onClick={() => handleDayClick(day)}
          >
            {format(day, "d")}
          </button>
        ))}
      </div>
    </div>
  );
};
