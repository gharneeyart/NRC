// import { useState } from 'react';
// import { IoIosClose } from 'react-icons/io';
// import Image from 'next/image';
// import White from '/public/images/White Dot.png';
// import Oxblod from '/public/images/oxblod Dot.png';
// import Red from '/public/images/red dot.png';

// // Sequential seat layout from 1 to 48
// const seatLayout = Array.from({ length: 48 }, (_, i) => i + 1);

// export default function CoachModal({
//   selectedSeats,
//   setSelectedSeats,
//   passengers,
//   setPassengers,
//   selectedCoach,
// }) {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [error, setError] = useState('');

//   const toggleSeatSelection = (seatNumber) => {
//     if (selectedSeats.includes(seatNumber)) {
//       setSelectedSeats(selectedSeats.filter((seat) => seat !== seatNumber));
//       setPassengers(
//         passengers.filter((passenger) => passenger.seat !== seatNumber)
//       );
//     } else if (selectedSeats.length < 4) {
//       setSelectedSeats([...selectedSeats, seatNumber]);
//       setPassengers([
//         ...passengers,
//         {
//           passenger: '',
//           name: '',
//           nin: '',
//           email: '',
//           phone: '',
//           coach: selectedCoach,
//           seat: seatNumber,
//         },
//       ]);
//     }
//   };

//   const handleOpenModal = () => {
//     if (!selectedCoach) {
//       setError('Please select a coach before selecting a seat.');
//     } else {
//       setError('');
//       setIsModalOpen(true);
//     }
//   };

//   return (
//     <div>
//       <button
//         onClick={handleOpenModal}
//         className="text-[#848484] px-5 w-full py-3 rounded-lg text-start transition border"
//       >
//         Select Seat
//       </button>
//       {error && <p className="text-red-500 text-sm">{error}</p>}
//       {isModalOpen && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4">
//           <div className="bg-white rounded-2xl shadow-xl p-6 w-[20%] relative">
//             <button
//               className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
//               onClick={() => setIsModalOpen(false)}
//             >
//               <IoIosClose size={20} />
//             </button>
//             <div className="flex flex-col gap-6 mb-5">
//               <div className="flex flex-col gap-2">
//                 <h1 className="font-bold text-base">Please Select Seat(s)</h1>
//                 <div className="w-[90%] grid grid-cols-3">
//                   <div className="flex items-center gap-1">
//                     <Image src={White} alt="White" className="w-[10px]" />
//                     <p className="text-[10px]">Available</p>
//                   </div>
//                   <div className="flex items-center gap-1">
//                     <Image src={Oxblod} alt="Oxblod" className="w-[10px]" />
//                     <p className="text-[10px]">Selected</p>
//                   </div>
//                   <div className="flex items-center gap-1">
//                     <Image src={Red} alt="Red" className="w-[10px]" />
//                     <p className="text-[10px]">Unavailable</p>
//                   </div>
//                 </div>
//               </div>
//               <div className="grid grid-cols-8 gap-2">
//                 {seatLayout.map((seatNumber) => (
//                   <button
//                     key={seatNumber}
//                     className={`${
//                       selectedSeats.includes(seatNumber)
//                         ? 'bg-[#006B14] text-white'
//                         : 'bg-[#E8EAEE] text-black'
//                     } rounded-sm text-center text-[14px] cursor-pointer p-2`}
//                     onClick={() => toggleSeatSelection(seatNumber)}
//                     aria-label={`Select seat ${seatNumber}`}
//                   >
//                     {seatNumber}
//                   </button>
//                 ))}
//                 {/* <div>
//                 <div className="grid grid-cols-4 justify-between gap-2 w-full">
//                   {seatLayout.map((seatNumber) => (
//                     <div key={seatNumber}>
//                       <p
//                         className={`${
//                           selectedSeats.includes(seatNumber) ? 'bg-[#B22222] text-white' : 'bg-[#E8EAEE]'
//                         } rounded-sm px-2  text-center text-[14px] cursor-pointer w-full`}
//                         onClick={() => toggleSeatSelection(seatNumber)}
//                       >
//                         {seatNumber}
//                       </p>
//                     </div>
//                   ))}
//                 </div> */}
//               </div>
//             </div>
//             <div className="mt-4 flex justify-end">
//               <button
//                 onClick={() => setIsModalOpen(false)}
//                 className="bg-[#18A532] w-full text-white py-1 rounded-sm hover:bg-gray-400 transition"
//               >
//                 Proceed
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// 'use client';
// import { useState } from 'react';
// import { IoIosClose } from 'react-icons/io';
// import Image from 'next/image';
// import White from '/public/images/White Dot.png';
// import Oxblod from '/public/images/oxblod Dot.png';
// import Red from '/public/images/red dot.png';

// export default function CoachModal({
//   selectedSeats,
//   setSelectedSeats,
//   passengers,
//   setPassengers,
//   selectedCoach,
//   selectedTrain,
//   totalSeats, // Pass totalSeats as a prop
// }) {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [error, setError] = useState('');

//   // Generate seat layout based on totalSeats
//   const seatLayout = Array.from({ length: totalSeats }, (_, i) => i + 1);

//   const toggleSeatSelection = (seatNumber) => {
//     if (selectedSeats.includes(seatNumber)) {
//       setSelectedSeats(selectedSeats.filter((seat) => seat !== seatNumber));
//       setPassengers(
//         passengers.filter((passenger) => passenger.seat !== seatNumber)
//       );
//     } else if (selectedSeats.length < 4) {
//       setSelectedSeats([...selectedSeats, seatNumber]);
//       setPassengers([
//         ...passengers,
//         {
//           passenger: '',
//           name: '',
//           nin: '',
//           email: '',
//           phone: '',
//           coach: selectedCoach,
//           seat: seatNumber,
//         },
//       ]);
//     }
//   };

//   const handleOpenModal = () => {
//     if (!selectedCoach) {
//       setError('Please select a coach before selecting a seat.');
//     } else {
//       setError('');
//       setIsModalOpen(true);
//     }
//   };

//   return (
//     <div>
//       <button
//         onClick={handleOpenModal}
//         className="text-[#848484] px-5 w-full py-3 rounded-lg text-start transition border"
//       >
//         Select Seat
//       </button>
//       {error && <p className="text-red-500 text-sm">{error}</p>}
//       {isModalOpen && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4">
//           <div className="bg-white rounded-2xl shadow-xl p-6 w-[20%] relative">
//             <button
//               className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
//               onClick={() => setIsModalOpen(false)}
//             >
//               <IoIosClose size={20} />
//             </button>
//             <div className="flex flex-col gap-6 mb-5">
//               <div className="flex flex-col gap-2">
//                 <h1 className="font-bold text-base">Please Select Seat(s)</h1>
//                 <div className="w-[90%] grid grid-cols-3">
//                   <div className="flex items-center gap-1">
//                     <Image src={White} alt="White" className="w-[10px]" />
//                     <p className="text-[10px]">Available</p>
//                   </div>
//                   <div className="flex items-center gap-1">
//                     <Image src={Oxblod} alt="Oxblod" className="w-[10px]" />
//                     <p className="text-[10px]">Selected</p>
//                   </div>
//                   <div className="flex items-center gap-1">
//                     <Image src={Red} alt="Red" className="w-[10px]" />
//                     <p className="text-[10px]">Unavailable</p>
//                   </div>
//                 </div>
//               </div>
//               <div className="grid grid-cols-8 gap-2">
//                 {seatLayout.map((seatNumber) => (
//                   <button
//                     key={seatNumber}
//                     className={`${
//                       selectedSeats.includes(seatNumber)
//                         ? 'bg-[#006B14] text-white'
//                         : 'bg-[#E8EAEE] text-black'
//                     } rounded-sm text-center text-[14px] cursor-pointer p-2`}
//                     onClick={() => toggleSeatSelection(seatNumber)}
//                     aria-label={`Select seat ${seatNumber}`}
//                   >
//                     {seatNumber}
//                   </button>
//                 ))}
//               </div>
//             </div>
//             <div className="mt-4 flex justify-end">
//               <button
//                 onClick={() => setIsModalOpen(false)}
//                 className="bg-[#18A532] w-full text-white py-1 rounded-sm hover:bg-gray-400 transition"
//               >
//                 Proceed
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

'use client';
import { useState } from 'react';
import { IoIosClose } from 'react-icons/io';
import Image from 'next/image';
import White from '../../images/White Dot.png';
import Oxblod from '../../images/oxblod Dot.png';
import Red from '../../images/red dot.png';

export default function CoachModal({
  selectedSeats,
  setSelectedSeats,
  passengers,
  setPassengers,
  selectedCoach,
  totalSeats, // Receive totalSeats as a prop
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState('');

  // Generate seat layout based on totalSeats
  const seatLayout = Array.from({ length: totalSeats }, (_, i) => i + 1);

  const toggleSeatSelection = (seatNumber) => {
    if (selectedSeats.includes(seatNumber)) {
      setSelectedSeats(selectedSeats.filter((seat) => seat !== seatNumber));
      setPassengers(
        passengers.filter((passenger) => passenger.seat !== seatNumber)
      );
    } else if (selectedSeats.length < 4) {
      setSelectedSeats([...selectedSeats, seatNumber]);
      setPassengers([
        ...passengers,
        {
          passenger: '',
          name: '',
          nin: '',
          email: '',
          phone: '',
          coach: selectedCoach,
          seat: seatNumber,
        },
      ]);
    }
  };

  const handleOpenModal = () => {
    if (!selectedCoach) {
      setError('Please select a coach before selecting a seat.');
    } else {
      setError('');
      setIsModalOpen(true);
    }
  };

  return (
    <div>
      <button
        onClick={handleOpenModal}
        className="text-[#848484] px-5 w-full py-3 rounded-lg text-start transition border"
      >
        Select Seat
      </button>
      {error && <p className="text-red-500 text-sm">{error}</p>}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="bg-white rounded-2xl shadow-xl p-6 w-[20%] relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={() => setIsModalOpen(false)}
            >
              <IoIosClose size={20} />
            </button>
            <div className="flex flex-col gap-6 mb-5">
              <div className="flex flex-col gap-2">
                <h1 className="font-bold text-base">Please Select Seat(s)</h1>
                <div className="w-[90%] grid grid-cols-3">
                  <div className="flex items-center gap-1">
                    <Image src={White} alt="White" className="w-[10px]" />
                    <p className="text-[10px]">Available</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Image src={Oxblod} alt="Oxblod" className="w-[10px]" />
                    <p className="text-[10px]">Selected</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Image src={Red} alt="Red" className="w-[10px]" />
                    <p className="text-[10px]">Unavailable</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-8 gap-2">
                {seatLayout.map((seatNumber) => (
                  <button
                    key={seatNumber}
                    className={`${
                      selectedSeats.includes(seatNumber)
                        ? 'bg-[#006B14] text-white'
                        : 'bg-[#E8EAEE] text-black'
                    } rounded-sm text-center text-[14px] cursor-pointer p-2`}
                    onClick={() => toggleSeatSelection(seatNumber)}
                    aria-label={`Select seat ${seatNumber}`}
                  >
                    {seatNumber}
                  </button>
                ))}
              </div>
            </div>
            <div className="mt-4 flex justify-end">
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-[#18A532] w-full text-white py-1 rounded-sm hover:bg-gray-400 transition"
              >
                Proceed
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// import React, { useState, useEffect } from "react";
// import "./selectseatModal.css"
// import { SEAT_CONFIG } from "../seatConfig";

// const SeatSelectorModal = ({
//   isOpen,
//   onClose,
//   onSeatsSelected,
//   selectedSeats,
//   className,
//   coachName,
// }) => {
//   const [currentSelectedSeats, setCurrentSelectedSeats] = useState(
//     selectedSeats || []
//   );
//   const [errorMessage, setErrorMessage] = useState("");

//   // Get seat configuration based on class and coach
//   const getClassConfig = () => SEAT_CONFIG[className] || {};
//   const getSeatsPerCoach = () => getClassConfig().seatsPerCoach || 48;

//   // Generate seat layout dynamically
//   const generateSeatLayout = (seatsPerCoach) => {
//     const rows = [];
//     for (let i = 0; i < seatsPerCoach; i += 4) {
//       rows.push([
//         [i + 1, i + 2],
//         [i + 3, i + 4],
//       ]);
//     }
//     return rows;
//   };

//   const seatLayout = generateSeatLayout(getSeatsPerCoach());

//   useEffect(() => {
//     setCurrentSelectedSeats(selectedSeats || []);
//   }, [selectedSeats]);

//   const handleSeatClick = (seatNumber) => {
//     // Get maximum allowed seats per class
//     const maxSeats =
//       {
//         "Standard Class": 4,
//         "Business Class": 3,
//         "First Class": 2,
//       }[className] || 4;

//     if (
//       currentSelectedSeats.length >= maxSeats &&
//       !currentSelectedSeats.includes(seatNumber)
//     ) {
//       setErrorMessage(`You can only select up to ${maxSeats} seats`);
//       return;
//     }

//     if (currentSelectedSeats.includes(seatNumber)) {
//       // Deselect seat
//       setCurrentSelectedSeats(
//         currentSelectedSeats.filter((seat) => seat !== seatNumber)
//       );
//       setErrorMessage("");
//     } else {
//       // Select seat
//       setCurrentSelectedSeats([...currentSelectedSeats, seatNumber]);
//       setErrorMessage("");
//     }
//   };

//   const handleSubmit = () => {
//     onSeatsSelected(currentSelectedSeats);
//     onClose();
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="modal-overlay">
//       <div className="modal-content">
//         {/* Header */}
//         <div className="modal-header">
//           <h2>
//             Please Select Seat(s) for {className} - Coach {coachName}
//           </h2>
//           <button className="close-btn" onClick={onClose}>
//             ×
//           </button>
//         </div>

//         {/* Error Message */}
//         {errorMessage && (
//           <div className="error-message">
//             <p>{errorMessage}</p>
//           </div>
//         )}

//         {/* Legend */}
//         <div className="legend">
//           <div className="legend-item">
//             <div className="legend-seat available"></div>
//             <span>Available</span>
//           </div>
//           <div className="legend-item">
//             <div className="legend-seat selected"></div>
//             <span>Selected</span>
//           </div>
//           <div className="legend-item">
//             <div className="legend-seat unavailable"></div>
//             <span>Unavailable</span>
//           </div>
//         </div>

//         {/* Single-column seat grid with 4 seats per row */}
//         <div className="seat-grid">
//           {seatLayout.map((row, rowIndex) => (
//             <div key={rowIndex} className="seat-row">
//               {row.map((seatPair, pairIndex) => (
//                 <div key={pairIndex} className="seat-pair mx-auto">
//                   {seatPair.map((seat) => (
//                     <div
//                       key={seat}
//                       className={`seat ${
//                         currentSelectedSeats.includes(seat) ? "selected" : ""
//                       } ${className.toLowerCase().replace(" ", "-")}`}
//                       onClick={() => handleSeatClick(seat)}
//                     >
//                       {seat}
//                     </div>
//                   ))}
//                 </div>
//               ))}
//             </div>
//           ))}
//         </div>

//         {/* Footer */}
//         <div className="modal-footer">
//           <p>
//             Selected seats for Coach {coachName}:{" "}
//             {currentSelectedSeats.join(", ") || "None"}
//           </p>
//           <div className="button-group">
//             <button
//               className="submit-btn"
//               onClick={handleSubmit}
//               disabled={currentSelectedSeats.length === 0}
//             >
//               Confirm Selection
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SeatSelectorModal;