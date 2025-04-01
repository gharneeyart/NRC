// 'use client'
// import Image from "next/image"
// import { usePathname } from "next/navigation"
// import { useSearchStore } from "@/store/useSearchStore";
// import { trainSchedule } from "@/db";
// import img from '/public/images/Frame 1000003438.svg'
// import img1 from '/public/images/Frame 1000003439.svg'
// import { useEffect, useState } from "react";
// import { Classes } from "@/db";

// // Helper to compute time difference between two times in "HH:mm" format
// function computeTimeDifference(dept, arr) {
//   const [deptHour, deptMin] = dept.split(":").map(Number);
//   const [arrHour, arrMin] = arr.split(":").map(Number);
//   let diff = arrHour * 60 + arrMin - (deptHour * 60 + deptMin);
//   const hours = Math.floor(diff / 60);
//   const minutes = diff % 60;
//   return `${hours} hrs ${minutes} mins`;
// }

// // Helper to format date from "YYYY-MM-DD" to "DD - MMM - YYYY"
// function formatDate(dateStr) {
//   const dateObj = new Date(dateStr);
//   if (isNaN(dateObj)) return dateStr;
//   const day = dateObj.getDate();
//   const month = dateObj.toLocaleString('en-US', { month: 'short' });
//   const year = dateObj.getFullYear();
//   return `${day} - ${month} - ${year}`;
// }
// export default function Hours({bg, text}) {
//    // Get current pathname
//    const pathname = usePathname()
//   // Read persisted search values from the store
//   const { from, to, date, selectedClass } = useSearchStore();

//   // Find station details for the searched departure and arrival stations
//   const departureStation = trainSchedule.find(
//     (station) => station.name === from
//   );
//   const arrivalStation = trainSchedule.find(
//     (station) => station.name === to
//   );

//   if(selectedClass === 'First Class'){
//     bg= 'bg-[#E8FFED]', text='text-[#18A532]'
//   }else if(selectedClass === 'Business Class'){
//     bg= 'bg-[#F9F1DF]', text='text-[#F4AC00]'
//   }else if(selectedClass === 'Standard Class'){
//     bg= 'bg-[#EDEDED]', text='text-[#595959]'
//   }

//   // Use departureTime from the "from" station and arrivalTime from the "to" station.
//   // Fallback to default times if a station isn’t found.
//   const departureTime = departureStation ? departureStation.departureTime : "07:57";
//   const arrivalTime = arrivalStation ? arrivalStation.arrivalTime : "08:21";
//   const timeDiff = computeTimeDifference(departureTime, arrivalTime);
//     return (
//       <div className="mb-[46px] mt-[19px] ">
//         <div className="flex flex-col lg:flex-row  justify-between text-center lg:text-left gap-8 ">
//         <div className="flex flex-col gap-[12px]">
//           <div className=" flex flex-col gap-[6px] lg:w-[282px]">
//           <h1 className="font-semibold text-[16px] md:text-[22px] xl:text-[28px]">{departureTime}</h1>
//           <p className="text-[#767676] text-[14px] md:text-[20px] xl:text-[22px]">
//               {from}
//             </p>
//           </div>
//             <p className="text-[#767676] text-[14px] md:text-[20px] xl:text-[22px]">{formatDate(date) }</p>
//         </div>
//        <div className="flex flex-col gap-6 items-center text-center justify-center ">
//        <div className="flex flex-row gap-6 items-center text-center justify-center ">
//             <Image src={img} alt="train" className="w-[66px] md:w-[100px]  xl:w-[144px] " />
//            <p className="font-semibold text-[14px] md:text-[20px] xl:text-[28px]">{timeDiff}</p>
//             <Image src={img1} alt="train"  className="w-[66px] md:w-[100px] xl:w-[144px]" />
//         </div>
//         {pathname !== "/trip" && (
//             <p className={`${bg} ${text} text-lg font-semibold py-[15px] rounded-full px-[32px]`}>{selectedClass}</p>
//           )}
//        </div>
//         <div  className="flex flex-col gap-[12px]">
//         <div  className=" flex flex-col gap-[6px] lg:w-[282px]">
//         <h1 className="font-semibold text-[16px] md:text-[22px] xl:text-[28px]">{arrivalTime}</h1>
//             <p className="text-[#767676] text-[14px] md:text-[20px] xl:text-[22px]">{to }</p>
//             {/* <p className="text-[#767676] text-[14px] md:text-[20px] xl:text-[22px]">Ebute Metta</p> */}
//         </div>
//             <p className="text-[#767676] text-[14px] md:text-[20px] xl:text-[22px]">{formatDate(date) }</p>
//         </div>
//         </div>
//       </div>

//     )

// }

'use client';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useSearchStore } from '@/store/useSearchStore';
// import trainData from "@/train.json"; // Import the JSON data
import img from '../../images/Frame 1000003438.svg';
import img1 from '../../images/Frame 1000003439.svg';
// import { useEffect, useState } from "react";
// import { Classes } from "@/db";

// Helper to compute time difference between two times in "HH:mm" format
// function computeTimeDifference(dept, arr) {
//   const [deptHour, deptMin] = dept.split(':').map(Number);
//   const [arrHour, arrMin] = arr.split(':').map(Number);
//   let diff = arrHour * 60 + arrMin - (deptHour * 60 + deptMin);
//   const hours = Math.floor(diff / 60);
//   const minutes = diff % 60;
//   return `${hours} hrs ${minutes} mins`;
// }

// Helper to format date from "YYYY-MM-DD" to "DD - MMM - YYYY"
function formatDate(dateStr) {
  const dateObj = new Date(dateStr);
  if (isNaN(dateObj)) return dateStr;
  const day = dateObj.getDate();
  const month = dateObj.toLocaleString('en-US', { month: 'short' });
  const year = dateObj.getFullYear();
  return `${day} - ${month} - ${year}`;
}

export default function Hours({ schedule, bg, text }) {
  // Get current pathname
  const pathname = usePathname();
  // Read persisted search values from the store
  const { from, to, date, selectedClass } = useSearchStore();

   // Use departure and arrival details from the schedule object
   const departureStation = schedule?.departure;
   const arrivalStation = schedule?.arrival;

  if (selectedClass === 'First Class') {
    (bg = 'bg-[#E8FFED]'), (text = 'text-[#18A532]');
  } else if (selectedClass === 'Business Class') {
    (bg = 'bg-[#F9F1DF]'), (text = 'text-[#F4AC00]');
  } else if (selectedClass === 'Standard Class') {
    (bg = 'bg-[#EDEDED]'), (text = 'text-[#595959]');
  }

  // Use departureTime from the "from" station and arrivalTime from the "to" station.
  // Fallback to default times if a station isn’t found.
  const departureTime = departureStation?.time;
  const arrivalTime = arrivalStation?.time;
  const timeDiff = schedule?.duration;

  

  return (
    <div className="mb-[46px] mt-[19px] ">
      <div className="flex flex-col lg:flex-row  justify-between text-center lg:text-left gap-8 ">
        <div className="flex flex-col gap-[12px]">
          <div className=" flex flex-col gap-[6px] lg:w-[282px]">
            <h1 className="font-semibold text-[16px] md:text-[22px] xl:text-[28px]">
              {departureTime}
            </h1>
            <p className="text-[#767676] text-[14px] md:text-[20px] xl:text-[22px]">
              {from}
            </p>
          </div>
          <p className="text-[#767676] text-[14px] md:text-[20px] xl:text-[22px]">
            {formatDate(date)}
          </p>
        </div>
        <div className="flex flex-col gap-6 items-center text-center justify-center ">
          <div className="flex flex-row gap-6 items-center text-center justify-center ">
            <Image
              src={img}
              alt="train"
              className="w-[66px] md:w-[100px]  xl:w-[144px] "
            />
            <p className="font-semibold text-[14px] md:text-[20px] xl:text-[28px]">
              {timeDiff}
            </p>
            <Image
              src={img1}
              alt="train"
              className="w-[66px] md:w-[100px] xl:w-[144px]"
            />
          </div>
          {pathname !== '/trip' && (
            <p
              className={`${bg} ${text} text-lg font-semibold py-[15px] rounded-full px-[32px]`}
            >
              {selectedClass}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-[12px]">
          <div className=" flex flex-col gap-[6px] lg:w-[282px]">
            <h1 className="font-semibold text-[16px] md:text-[22px] xl:text-[28px]">
              {arrivalTime}
            </h1>
            <p className="text-[#767676] text-[14px] md:text-[20px] xl:text-[22px]">
              {to}
            </p>
          </div>
          <p className="text-[#767676] text-[14px] md:text-[20px] xl:text-[22px]">
            {formatDate(date)}
          </p>
        </div>
      </div>
    </div>
  );
}
