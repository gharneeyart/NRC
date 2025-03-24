'use client';
import { useState, useEffect } from 'react';
import { useSearchStore } from '@/store/useSearchStore';

const Passenger = ({
  id,
  index,
  coach,
  seat,
  passengerData,
  onUpdatePassenger,
  errors,
  onRemovePassenger,
}) => {
  const [formData, setFormData] = useState({
    type: passengerData.type || '',
    name: passengerData.name || '',
    nin: passengerData.nin || '',
    email: passengerData.email || '',
    phone: passengerData.phone || '',
  });

  const { selectedSeats, setSelectedSeats, setSelectedCoach, passengers } = useSearchStore();

  useEffect(() => {
    setFormData({
      type: passengerData.type || '',
      name: passengerData.name || '',
      nin: passengerData.nin || '',
      email: passengerData.email || '',
      phone: passengerData.phone || '',
    });
  }, [passengerData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedPassenger = { ...formData, [name]: value };
    setFormData(updatedPassenger);
    onUpdatePassenger(updatedPassenger);
  };

  const clearPassenger = () => {
    onRemovePassenger(id); // Remove the passenger by ID
    const updatedSeats = selectedSeats.filter((selectedSeat) => selectedSeat !== seat);
    setSelectedSeats(updatedSeats);
  
    // Only clear selectedCoach if there are no passengers left
    if (passengers.length === 1) {
      setSelectedCoach('');
    }
  
    onUpdatePassenger({
      type: '',
      name: '',
      nin: '',
      email: '',
      phone: '',
    });
    setFormData({ type: '', name: '', nin: '', email: '', phone: '' });
  };

  return (
    <div className="mb-11">
      <div className="flex justify-between mb-7">
        <h1 className="font-bold text-lg md:text-xl lg:text-2xl">
          Passenger {index + 1} - Coach No / Seat No: {coach}/{seat}
        </h1>
        <h3
          className="text-[#FF3B30] cursor-pointer hidden lg:block"
          onClick={clearPassenger}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && clearPassenger()}
        >
          Clear Details
        </h3>
      </div>
      <form className="lg:flex gap-12 w-full lg:mb-7">
        <div className="w-full">
          <label className="font-medium md:text-lg text-base 2xl:text-lg lg:text-lg">
            Passenger Type
          </label>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="border px-5 py-3 outline-none rounded-lg mt-3 mb-3 lg:mb-0 w-full h-12"
          >
            <option value="" disabled>
              Select passenger type
            </option>
            <option value="Adult">Adult</option>
            <option value="Child">Child</option>
          </select>
          {errors.type && (
            <span className="text-red-500 text-sm">{errors.type}</span>
          )}
        </div>

        <div className="w-full">
          <label className="font-medium md:text-lg text-base 2xl:text-lg lg:text-lg">
            Passenger Name
          </label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            type="text"
            className="border px-5 py-3 rounded-lg mt-3 mb-3 lg:mb-0 w-full h-12 outline-none placeholder-[#848484]"
            placeholder="Enter passenger name"
          />
          {errors.name && (
            <span className="text-red-500 text-sm">{errors.name}</span>
          )}
        </div>

        <div className="w-full">
          <label className="font-medium md:text-lg text-base 2xl:text-lg lg:text-lg">
            NIN Number
          </label>
          <input
            name="nin"
            value={formData.nin}
            onChange={handleChange}
            type="text"
            className="border px-5 py-3 rounded-lg mt-3 mb-3 lg:mb-0 w-full h-12 outline-none placeholder-[#848484]"
            placeholder="Enter NIN"
          />
          {errors.nin && (
            <span className="text-red-500 text-sm">{errors.nin}</span>
          )}
        </div>
      </form>

      <div className="lg:flex gap-12 w-full">
        <div className="lg:w-[30%] w-full">
          <label className="font-medium md:text-lg text-base 2xl:text-lg lg:text-lg">
            Email Address
          </label>
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            className="border px-5 py-3 rounded-lg mt-3 mb-3 lg:mb-0 w-full h-12 outline-none placeholder-[#848484]"
            placeholder="Enter email address"
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email}</span>
          )}
        </div>

        <div className="lg:w-[30%] w-full">
          <label className="font-medium md:text-lg text-base 2xl:text-lg lg:text-lg">
            Phone Number
          </label>
          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            type="tel"
            className="border px-5 py-3 rounded-lg mt-3 mb-3 lg:mb-0 w-full h-12 outline-none placeholder-[#848484]"
            placeholder="Enter phone number"
          />
          {errors.phone && (
            <span className="text-red-500 text-sm">{errors.phone}</span>
          )}
        </div>
        <h3
          className="text-[#FF3B30] cursor-pointer block lg:hidden"
          onClick={clearPassenger}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && clearPassenger()}
        >
          Clear Details
        </h3>
      </div>
    </div>
  );
};

export default Passenger;