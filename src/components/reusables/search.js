// 'use client'
// import { trainSchedule } from "@/db";
// import Link from "next/link";
// import { useSearchStore } from "@/store/useSearchStore";

// export default function SearchTrain({
//     w, bg, btnBg, rounded, inputBg, gap, 
//     inputBorder, inputPy, inputPadding, inputText, 
//     btnText, content1, content2, content3, inputW, 
//     btnWidth, py
// }) {
//     // Generate a unique list of station names from trainSchedule
//     const stationNames = Array.from(new Set(trainSchedule.map((schedule) => schedule.name)));

//     // Pull state from Zustand store directly
//     const { from, to, date, setFrom, setTo, setDate } = useSearchStore();

//     // Determine if the form is valid (all inputs are filled)
//     const isFormValid = from !== "" && to !== "" && date !== "";

//     // Get today's date in YYYY-MM-DD format
//     const today = new Date().toISOString().split('T')[0];
//     return (
//         <div>
//             <form className={`${w} ${bg} flex flex-col lg:flex-row ${gap} items-end ${py} ${rounded} justify-between px-3 md:px-8 lg:px-10 mx-auto shadow-xl container`}>
//                 <div className="flex flex-col gap-1 w-full lg:w-[25%] xl:w-[30%]">
//                     <label htmlFor="from">{content1}</label>
//                     <select
//                         id="from"
//                         value={from}
//                         className={`${inputBg} ${inputBorder} ${inputText} ${inputPy} outline-none rounded-md px-2`}
//                         onChange={(e) => {
//                             const selected = e.target.value;
//                             setFrom(selected);
//                             if (selected === to) setTo(""); // Clear destination if same as origin
//                         }}
//                     >
//                         <option value="">Select Originating Station</option>
//                         {stationNames.map((station, index) => (
//                             <option key={index} value={station}>{station}</option>
//                         ))}
//                     </select>
//                 </div>
//                 <div className="flex flex-col gap-1 w-full lg:w-[25%] xl:w-[30%]">
//                     <label htmlFor="to">{content2}</label>
//                     <select
//                         id="to"
//                         value={to}
//                         className={`${inputBg} ${inputBorder} ${inputText} ${inputPy} outline-none rounded-md px-2`}
//                         onChange={(e) => setTo(e.target.value)}
//                     >
//                         <option value="">Select Destination Station</option>
//                         {stationNames.filter((station) => station !== from).map((station, index) => (
//                             <option key={index} value={station}>{station}</option>
//                         ))}
//                     </select>
//                 </div>
//                 <div className={`flex flex-col gap-1 ${inputW}`}>
//                     <label htmlFor="date">{content3}</label>
//                     <input
//                         type="date"
//                         id="date"
//                         value={date}
//                         min={today}
//                         className={`${inputBg} ${inputBorder} ${inputText} ${inputPadding} outline-none rounded-md px-2`}
//                         placeholder="Select Date"
//                         onChange={(e) => setDate(e.target.value)}
//                     />
//                 </div>
//                 {/* Conditionally render the button or link */}
//                 {isFormValid ? (
//                     <Link href="/trip" className={`${btnBg} ${btnText} py-2.5 rounded-sm text-[14px] ${btnWidth} font-medium text-center`}>
//                         Find my Train
//                     </Link>
//                 ) : (
//                     <button disabled className={`${btnBg} ${btnText} py-2.5 rounded-sm text-[14px] ${btnWidth} font-medium text-center opacity-50 cursor-not-allowed`}>
//                         Find my Train
//                     </button>
//                 )}
//             </form>
//         </div>
//     );
// }

'use client'
import trainData from "@/train.json"; // Import the JSON data
import Link from "next/link";
import { useSearchStore } from "@/store/useSearchStore";

export default function SearchTrain({
    w, bg, btnBg, rounded, inputBg, gap, 
    inputBorder, inputPy, inputPadding, inputText, 
    btnText, content1, content2, content3, inputW, 
    btnWidth, py
}) {
    // Generate a unique list of station names from trainData
    const stationNames = Array.from(new Set(trainData.trains.flatMap(train => train.schedule.map(schedule => schedule.station_name))));

    // Pull state from Zustand store directly
    const { from, to, date, setFrom, setTo, setDate } = useSearchStore();

    // Determine if the form is valid (all inputs are filled)
    const isFormValid = from !== "" && to !== "" && date !== "";

    // Get today's date in YYYY-MM-DD format
    const today = new Date().toISOString().split('T')[0];

    return (
        <div>
            <form className={`${w} ${bg} flex flex-col lg:flex-row ${gap} items-end ${py} ${rounded} justify-between px-3 md:px-8 lg:px-10 mx-auto shadow-xl container`}>
                <div className="flex flex-col gap-1 w-full lg:w-[25%] xl:w-[30%]">
                    <label htmlFor="from">{content1}</label>
                    <select
                        id="from"
                        value={from}
                        className={`${inputBg} ${inputBorder} ${inputText} ${inputPy} outline-none rounded-md px-2`}
                        onChange={(e) => {
                            const selected = e.target.value;
                            setFrom(selected);
                            if (selected === to) setTo(""); // Clear destination if same as origin
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
                        value={to}
                        className={`${inputBg} ${inputBorder} ${inputText} ${inputPy} outline-none rounded-md px-2`}
                        onChange={(e) => setTo(e.target.value)}
                    >
                        <option value="">Select Destination Station</option>
                        {stationNames.filter((station) => station !== from).map((station, index) => (
                            <option key={index} value={station}>{station}</option>
                        ))}
                    </select>
                </div>
                <div className={`flex flex-col gap-1 ${inputW}`}>
                    <label htmlFor="date">{content3}</label>
                    <input
                        type="date"
                        id="date"
                        value={date}
                        min={today} // Set the min attribute to today's date
                        className={`${inputBg} ${inputBorder} ${inputText} ${inputPadding} outline-none rounded-md px-2`}
                        placeholder="Select Date"
                        onChange={(e) => setDate(e.target.value)}
                    />
                </div>
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