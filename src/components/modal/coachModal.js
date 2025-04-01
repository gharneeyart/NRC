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
          type: '', // Default type, can be changed later
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
        className="text-[#848484] px-4 py-2 w-full rounded-lg text-start transition border hover:bg-gray-100 text-sm"
      >
        Select Seat
      </button>
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-2 z-50">
          <div className="bg-white rounded-lg shadow-xl p-4 w-full max-w-xs relative max-h-[80vh] overflow-y-auto">
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={() => setIsModalOpen(false)}
            >
              <IoIosClose size={24} />
            </button>

            {/* Modal Header */}
            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-md text-center mb-1">Select Seat(s)</h1>

              {/* Seat Status Indicators */}
              <div className="flex justify-center gap-3 mb-2">
                <div className="flex items-center gap-1">
                  <Image src={White} alt="Available" className="w-2 h-2" />
                  <p className="text-xs">Available</p>
                </div>
                <div className="flex items-center gap-1">
                  <Image src={Oxblod} alt="Selected" className="w-2 h-2" />
                  <p className="text-xs">Selected</p>
                </div>
                <div className="flex items-center gap-1">
                  <Image src={Red} alt="Unavailable" className="w-2 h-2" />
                  <p className="text-xs">Unavailable</p>
                </div>
              </div>

              {/* Seat Grid */}
              <div className="flex flex-col gap-1">
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
                        } rounded-sm text-center text-xs cursor-pointer p-1 hover:bg-[#006B14] hover:text-white transition-colors`}
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
                        } rounded-sm text-center text-xs cursor-pointer p-1 hover:bg-[#006B14] hover:text-white transition-colors`}
                        onClick={() => toggleSeatSelection(seatNumber)}
                        aria-label={`Select seat ${seatNumber}`}
                      >
                        {seatNumber}
                      </button>
                    ))}
                  </div>
                ))}
              </div>

              {/* Selected Seats Info */}
              {selectedSeats.length > 0 && (
                <div className="mt-2 text-center text-xs">
                  Selected: {selectedSeats.join(', ')}
                </div>
              )}

              {/* Proceed Button */}
              <div className="mt-3">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="bg-[#18A532] w-full text-white py-1 rounded-md hover:bg-[#148C2A] transition-colors text-sm"
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