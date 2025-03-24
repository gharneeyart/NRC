'use client';
import { useState } from 'react';
import { IoIosClose } from 'react-icons/io';
import Image from 'next/image';
import White from '../../images/White Dot.png';
import Oxblod from '../../images/oxblod Dot.png';
import Red from '../../images/red dot.png';

export default function CoachModal({
  selectedCoach,
  totalSeats,
  selectedSeats,
  setSelectedSeats,
  passengers,
  setPassengers,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState('');

  // Generate seat layout based on totalSeats
  const seatLayout = Array.from({ length: totalSeats }, (_, i) => i + 1);

  // Function to group seats into rows with a gap (aisle) in the middle
  const groupSeatsIntoRows = (seats, seatsPerRow = 4) => {
    const rows = [];
    for (let i = 0; i < seats.length; i += seatsPerRow) {
      const row = seats.slice(i, i + seatsPerRow);
      rows.push(row);
    }
    return rows;
  };

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

  // Group seats into rows with 4 seats per row (2 on the left, 2 on the right)
  const seatRows = groupSeatsIntoRows(seatLayout, 4);

  return (
    <div>
      <button
        onClick={handleOpenModal}
        className="text-[#848484] px-5 w-full py-3 rounded-lg text-start transition border hover:bg-gray-100"
      >
        Select Seat
      </button>
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl p-4 w-full max-w-xs sm:max-w-sm md:max-w-md relative">
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={() => setIsModalOpen(false)}
            >
              <IoIosClose size={20} />
            </button>

            {/* Modal Header */}
            <div className="flex flex-col gap-3">
              <h1 className="font-bold text-lg text-center">Please Select Seat(s)</h1>

              {/* Seat Status Indicators */}
              <div className="flex justify-center gap-4">
                <div className="flex items-center gap-1">
                  <Image src={White} alt="Available" className="w-3 h-3" />
                  <p className="text-xs sm:text-sm">Available</p>
                </div>
                <div className="flex items-center gap-1">
                  <Image src={Oxblod} alt="Selected" className="w-3 h-3" />
                  <p className="text-xs sm:text-sm">Selected</p>
                </div>
                <div className="flex items-center gap-1">
                  <Image src={Red} alt="Unavailable" className="w-3 h-3" />
                  <p className="text-xs sm:text-sm">Unavailable</p>
                </div>
              </div>

              {/* Seat Grid */}
              <div className="flex flex-col gap-2 mt-2">
                {seatRows.map((row, rowIndex) => (
                  <div key={rowIndex} className="grid grid-cols-5 gap-1">
                    {/* Left Side Seats */}
                    {row.slice(0, 2).map((seatNumber) => (
                      <button
                        key={seatNumber}
                        className={`${
                          selectedSeats.includes(seatNumber)
                            ? 'bg-[#006B14] text-white' // Selected seat
                            : 'bg-[#E8EAEE] text-black' // Available seat
                        } rounded-sm text-center text-xs sm:text-sm cursor-pointer p-1 sm:p-2 hover:bg-[#006B14] hover:text-white transition-colors`}
                        onClick={() => toggleSeatSelection(seatNumber)}
                        aria-label={`Select seat ${seatNumber}`}
                      >
                        {seatNumber}
                      </button>
                    ))}

                    {/* Aisle Gap */}
                    <div className="col-span-1" /> {/* Empty space for the aisle */}

                    {/* Right Side Seats */}
                    {row.slice(2, 4).map((seatNumber) => (
                      <button
                        key={seatNumber}
                        className={`${
                          selectedSeats.includes(seatNumber)
                            ? 'bg-[#006B14] text-white' // Selected seat
                            : 'bg-[#E8EAEE] text-black' // Available seat
                        } rounded-sm text-center text-xs sm:text-sm cursor-pointer p-1 sm:p-2 hover:bg-[#006B14] hover:text-white transition-colors`}
                        onClick={() => toggleSeatSelection(seatNumber)}
                        aria-label={`Select seat ${seatNumber}`}
                      >
                        {seatNumber}
                      </button>
                    ))}
                  </div>
                ))}
              </div>

              {/* Proceed Button */}
              <div className="mt-4">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="bg-[#18A532] w-full text-white py-1 sm:py-2 rounded-lg hover:bg-[#148C2A] transition-colors text-sm sm:text-base"
                >
                  Proceed
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}