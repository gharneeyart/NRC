'use client';
import { useState } from 'react';
import { IoIosClose } from 'react-icons/io';
import Image from 'next/image';
import White from '../../images/White Dot.png';
import Oxblod from '../../images/oxblod Dot.png';
import Red from '../../images/red dot.png';
import { useSearchStore } from '@/store/useSearchStore';

export default function CoachModal({
  selectedCoach,
  totalSeats,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState('');
  const { selectedSeats, setSelectedSeats, passengers, setPassengers } = useSearchStore();

  // Generate seat layout based on totalSeats
  const seatLayout = Array.from({ length: totalSeats }, (_, i) => i + 1);

  const toggleSeatSelection = (seatNumber) => {
    if (selectedSeats.includes(seatNumber)) {
      // Deselect the seat
      const updatedSeats = selectedSeats.filter((seat) => seat !== seatNumber);
      setSelectedSeats(updatedSeats);

      // Find the index of the passenger associated with the deselected seat
      const passengerIndex = selectedSeats.indexOf(seatNumber);

      // Remove the passenger at the found index
      if (passengerIndex !== -1) {
        const updatedPassengers = passengers.filter((_, index) => index !== passengerIndex);
        setPassengers(updatedPassengers);
      }
    } else if (selectedSeats.length < 4) {
      // Select the seat
      setSelectedSeats([...selectedSeats, seatNumber]);

      // Add a new passenger without coach and seatNumber
      setPassengers([
        ...passengers,
        {
          type: 'Adult', // Default type, can be changed later
          name: '',
          nin: '',
          email: '',
          phone: '',
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