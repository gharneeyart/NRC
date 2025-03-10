'use client'
import { useState, useEffect } from "react";
import { trainSchedule } from "@/db";
import Link from "next/link";
import { useSearchStore } from "@/store/useSearchStore";

export default function SearchTrain({
    w,
    bg,
    btnBg,
    rounded,
    inputBg,
    gap,
    inputBorder,
    inputPy,
    inputPadding,
    inputText,
    btnText,
    content1,
    content2,
    content3,
    inputW,
    btnWidth,
    py
}) {
    // Generate a unique list of station names from trainSchedule
    const stationNames = Array.from(
        new Set(trainSchedule.map((schedule) => schedule.name))
    );

    // Pull state from our Zustand store
    const { from, to, date, setFrom, setTo, setDate } = useSearchStore();

    // Use local state to synchronize with the store
    const [localFrom, setLocalFrom] = useState(from);
    const [localTo, setLocalTo] = useState(to);
    const [localDate, setLocalDate] = useState(date);

    // Update store when local state changes
    useEffect(() => {
      setFrom(localFrom);
    }, [localFrom, setFrom]);

    useEffect(() => {
      setTo(localTo);
    }, [localTo, setTo]);

    useEffect(() => {
      setDate(localDate);
    }, [localDate, setDate]);

    // Determine if the form is valid (all inputs are filled)
    const isFormValid = localFrom !== "" && localTo !== "" && localDate !== "";

    return (
        <div>
            <form className={`${w} ${bg} flex flex-col lg:flex-row ${gap} items-end ${py} ${rounded} justify-between px-3 md:px-8 lg:px-10 mx-auto shadow-xl container`}>
                <div className="flex flex-col gap-1 w-full lg:w-[25%] xl:w-[30%]">
                    <label htmlFor="from">{content1}</label>
                    <select
                        id="from"
                        value={localFrom}
                        className={`${inputBg} ${inputBorder} ${inputText} ${inputPy} outline-none rounded-md px-2`}
                        onChange={(e) => {
                            const selected = e.target.value;
                            setLocalFrom(selected);
                            // If destination equals the from value, clear the destination
                            if (selected === localTo) {
                                setLocalTo("");
                            }
                        }}
                    >
                        <option value="">Select Originating Station</option>
                        {stationNames.map((station, index) => (
                            <option key={index} value={station}>{station}</option>
                        ))}
                    </select>
                </div>
                <div className="flex flex-col gap-1 w-full lg:w-[25%] xl:w-[30%]">
                    <label htmlFor="to">{content2}</label>
                    <select
                        id="to"
                        value={localTo}
                        className={`${inputBg} ${inputBorder} ${inputText} ${inputPy} outline-none rounded-md px-2`}
                        onChange={(e) => setLocalTo(e.target.value)}
                    >
                        <option value="">Select Destination Station</option>
                        {stationNames
                            .filter((station) => station !== localFrom)
                            .map((station, index) => (
                                <option key={index} value={station}>{station}</option>
                        ))}
                    </select>
                </div>
                <div className={`flex flex-col gap-1 ${inputW}`}>
                    <label htmlFor="date">{content3}</label>
                    <input
                        type="date"
                        id="date"
                        value={localDate}
                        className={`${inputBg} ${inputBorder} ${inputText} ${inputPadding} outline-none rounded-md px-2`}
                        placeholder="Select Date"
                        onChange={(e) => setLocalDate(e.target.value)}
                    />
                </div>
                {/* Use Link to navigate with the search state persisted in the store */}
                 {/* Conditionally render the button or link */}
                {isFormValid ? (
                    <Link href="/trip" className={`${btnBg} ${btnText} py-2.5 rounded-sm text-[14px] ${btnWidth} font-medium text-center`}>
                        Find my Train
                    </Link>
                ) : (
                    <button disabled className={`${btnBg} ${btnText} py-2.5 rounded-sm text-[14px] ${btnWidth} font-medium text-center opacity-50 cursor-not-allowed`}>
                        Find my Train
                    </button>
                )}
            </form>
        </div>
    );
}