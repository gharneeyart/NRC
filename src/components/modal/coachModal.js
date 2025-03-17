import { useState } from 'react';
import { IoIosClose } from "react-icons/io";
import Image from 'next/image';
import White from '/public/images/White Dot.png';
import Oxblod from '/public/images/oxblod Dot.png';
import Red from '/public/images/red dot.png';

// Sequential seat layout from 1 to 48
const seatLayout = Array.from({ length: 48 }, (_, i) => i + 1);

export default function CoachModal({ selectedSeats, setSelectedSeats, passengers, setPassengers, selectedCoach }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState("");

  const toggleSeatSelection = (seatNumber) => {
    if (selectedSeats.includes(seatNumber)) {
      setSelectedSeats(selectedSeats.filter((seat) => seat !== seatNumber));
      setPassengers(passengers.filter((passenger) => passenger.seat !== seatNumber));
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
      setError("Please select a coach before selecting a seat.");
    } else {
      setError("");
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
              {/* <div>
                <div className="grid grid-cols-4 justify-between gap-2 w-full">
                  {seatLayout.map((seatNumber) => (
                    <div key={seatNumber}>
                      <p
                        className={`${
                          selectedSeats.includes(seatNumber) ? 'bg-[#B22222] text-white' : 'bg-[#E8EAEE]'
                        } rounded-sm px-2  text-center text-[14px] cursor-pointer w-full`}
                        onClick={() => toggleSeatSelection(seatNumber)}
                      >
                        {seatNumber}
                      </p>
                    </div>
                  ))}
                </div> */}
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