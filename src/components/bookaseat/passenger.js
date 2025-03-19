// 'use client'
// import { FaPlus } from "react-icons/fa6";
// import { useForm } from "react-hook-form";
// import { useState } from "react";

// export default function Passenger({ index, coach, seat, selectedSeats, setSelectedSeats, passengers, setPassengers }) {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({ mode: "onChange" });

//   const onSubmit = (data) => {
//     console.log(data);
//   };

//   const [passenger, setPassenger] = useState(false);

//   const handlePassenger = () => {
//     setPassenger(true);
//   };

//   const clearPassenger = () => {
//     // Deselect the seat
//     setSelectedSeats(selectedSeats.filter((selectedSeat) => selectedSeat !== seat));
//     // Remove the passenger
//     setPassengers(passengers.filter((passenger) => passenger.seat !== seat));
//   };

//   return (
//     <div className="mb-11">
//       <div className="flex justify-between mb-7">
//         <h1 className="font-bold text-2xl">
//           Passenger {index} - Coach No / Seat No: {coach}/{seat}
//         </h1>
//         <h3 className="text-[#FF3B30] cursor-pointer" onClick={clearPassenger}>Clear Details</h3>
//       </div>
//       <form onSubmit={handleSubmit(onSubmit)} className="lg:flex gap-12 w-full lg:mb-7">
//         {/* Passenger Type */}
//         <div className="w-full">
//           <label className="font-medium md:text-lg text-base 2xl:text-lg lg:text-lg">Passenger Type</label>
//           <select
//             {...register('passenger', {
//               required: 'This field is required',
//               pattern: {
//                 value: /^(adult|child)$/,
//                 message: "Invalid selection! Choose 'Adult' or 'Child'."
//               }
//             })}
//             defaultValue=""
//             onClick={handlePassenger}
//             className={`${passenger ? 'text-black' : 'text-[#848484]'} border px-5 py-3 outline-none rounded-lg mt-3 mb-3 lg:mb-0 w-full h-12`}
//           >
//             <option value="" disabled>Select passenger type</option>
//             <option value="adult">Adult</option>
//             <option value="child">Child</option>
//           </select>
//           {errors.passenger && <span className="text-red-500 text-[12px]">{errors.passenger.message}</span>}
//         </div>

//         {/* Passenger Name */}
//         <div className="w-full">
//           <label className="font-medium md:text-lg text-base 2xl:text-lg lg:text-lg">Passenger Name</label>
//           <input
//             {...register('name', {
//               required: 'This field is required',
//               pattern: {
//                 value: /^[a-zA-Z\s]+$/,
//                 message: "Invalid name! Only alphabetic characters are allowed."
//               }
//             })}
//             type="text"
//             className="border px-5 py-3 rounded-lg mt-3 mb-3 lg:mb-0 w-full h-12 outline-none placeholder-[#848484]"
//             placeholder="Enter passenger name"
//           />
//         </div>

//         {/* NIN Number */}
//         <div className="w-full">
//           <label className="font-medium md:text-lg text-base 2xl:text-lg lg:text-lg">NIN Number</label>
//           <input
//             {...register('nin', {
//               required: 'This field is required',
//               pattern: {
//                 value: /^[0-9]{11}$/,
//                 message: "Invalid NIN! NIN must be 11 digits."
//               }
//             })}
//             type="text"
//             className="border px-5 py-3 rounded-lg mt-3 mb-3 lg:mb-0 w-full h-12 outline-none placeholder-[#848484]"
//             placeholder="Enter NIN"
//           />
//         </div>
//       </form>

//       <div className="lg:flex gap-12 w-full">
//         {/* Email Address */}
//         <div className="lg:w-[30%] w-full">
//           <label className="font-medium md:text-lg text-base 2xl:text-lg lg:text-lg">Email Address</label>
//           <input
//             {...register('email', {
//               required: 'This field is required',
//               pattern: {
//                 value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
//                 message: "Invalid email! Enter a valid email address."
//               }
//             })}
//             type="email"
//             className="border px-5 py-3 rounded-lg mt-3 mb-3 lg:mb-0 w-full h-12 outline-none placeholder-[#848484]"
//             placeholder="Enter email address"
//           />
//         </div>

//         {/* Phone Number */}
//         <div className="lg:w-[30%] w-full">
//           <label className="font-medium md:text-lg text-base 2xl:text-lg lg:text-lg">Phone Number</label>
//           <input
//             {...register('phone', {
//               required: 'This field is required',
//               pattern: {
//                 value: /^[0-9]{11}$/,
//                 message: "Invalid phone number! Phone number must be 11 digits."
//               }
//             })}
//             type="tel"
//             className="border px-5 py-3 rounded-lg mt-3 mb-3 lg:mb-0 w-full h-12 outline-none placeholder-[#848484]"
//             placeholder="Enter phone number"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

'use client';
import { useState, useEffect } from 'react';
// import { useSearchStore } from '@/store/useSearchStore';

const Passenger = ({
  index,
  coach,
  seat,
  selectedSeats,
  setSelectedSeats,
  passengerData,
  onUpdatePassenger,
  errors, // Receive errors as props
}) => {
  const [formData, setFormData] = useState({
    passenger: passengerData.passenger || '',
    name: passengerData.name || '',
    nin: passengerData.nin || '',
    email: passengerData.email || '',
    phone: passengerData.phone || '',
  });

  useEffect(() => {
    setFormData({
      passenger: passengerData.passenger || '',
      name: passengerData.name || '',
      nin: passengerData.nin || '',
      email: passengerData.email || '',
      phone: passengerData.phone || '',
    });
  }, [passengerData]);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  //   onUpdatePassenger({ ...formData, [name]: value, coach, seat });
  // };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedPassenger = { ...formData, [name]: value, coach, seat }; // Include coach and seat
    setFormData(updatedPassenger);
    onUpdatePassenger(updatedPassenger); // Pass the updated passenger with coach and seat
  };

  const clearPassenger = () => {
    console.log('Clearing passenger for seat:', seat);
    setSelectedSeats((prevSelectedSeats) => {
      const updatedSeats = prevSelectedSeats.filter(
        (selectedSeat) => selectedSeat !== seat
      );
      console.log('Updated selected seats:', updatedSeats);
      return updatedSeats;
    });
    onUpdatePassenger({
      passenger: '',
      name: '',
      nin: '',
      email: '',
      phone: '',
      coach,
      seat,
    });
    setFormData({ passenger: '', name: '', nin: '', email: '', phone: '' });
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
        {/* Passenger Type */}
        <div className="w-full">
          <label className="font-medium md:text-lg text-base 2xl:text-lg lg:text-lg">
            Passenger Type
          </label>
          <select
            name="passenger"
            value={formData.passenger}
            onChange={handleChange}
            className="border px-5 py-3 outline-none rounded-lg mt-3 mb-3 lg:mb-0 w-full h-12"
          >
            <option value="" disabled>
              Select passenger type
            </option>
            <option value="adult">Adult</option>
            <option value="child">Child</option>
          </select>
          {errors.passenger && (
            <span className="text-red-500 text-sm">{errors.passenger}</span>
          )}
        </div>

        {/* Passenger Name */}
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

        {/* NIN Number */}
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
        {/* Email Address */}
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

        {/* Phone Number */}
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
