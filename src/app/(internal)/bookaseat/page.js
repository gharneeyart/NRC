'use client';
import { useState, useEffect } from 'react';
import Search from '@/components/bookaseat/search';
import Passenger from '@/components/bookaseat/passenger';
import ContactDetails from '@/components/bookaseat/contactDetails';
import SearchTrain from '@/components/reusables/search';
import Hours from '@/components/transport/hours';
import { useRouter } from 'next/navigation';
import { useSearchStore } from '@/store/useSearchStore';
import axios from 'axios';


export default function Book() {
  const {
    passengers,
    setPassengers,
    selectedTrain,
    contactDetails,
    selectedClass,
    selectedCoach,
    selectedSeats,
    setSelectedSeats,
    setBookingData,
    removePassenger,
    updatePassenger
  } = useSearchStore();
  const [errors, setErrors] = useState([]);
  const router = useRouter();

 // Add a unique ID to each passenger
 useEffect(() => {
  if (passengers.length > 0 && !passengers[0].id) {
    const updatedPassengers = passengers.map((passenger, index) => ({
      ...passenger,
      id: index + 1, // Assign a unique ID
    }));
    setPassengers(updatedPassengers);
  }
}, [passengers, setPassengers]);

  const validatePassenger = (passenger) => {
    const errors = {};
    if (!passenger.type) errors.type = 'Passenger type is required.';
    if (!passenger.name) errors.name = 'Name is required.';
    if (!passenger.nin || !/^\d{11}$/.test(passenger.nin))
      errors.nin = 'NIN must be 11 digits.';
    if (!passenger.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(passenger.email))
      errors.email = 'Invalid email.';
    if (!passenger.phone || !/^\d{11}$/.test(passenger.phone))
      errors.phone = 'Phone must be 11 digits.';
    return errors;
  };

  const calculateTotalPrice = () => {
    const selectedClassData = selectedTrain.classes.find(
      (cls) => cls.type === selectedClass
    );

    if (!selectedClassData) {
      console.error('Selected class not found');
      return 0;
    }

    let totalPrice = 0;
    for (const passenger of passengers) {
      const price =
        passenger.type === 'Adult'
          ? parseInt(selectedClassData.priceAdult.replace(/₦/, ''), 10)
          : parseInt(selectedClassData.priceChild.replace(/₦/, ''), 10);
      totalPrice += price;
    }

    const convenienceFee = 400;
    totalPrice += convenienceFee;

    return totalPrice;
  };

  const handleProceed = async () => {
    const validationErrors = passengers.map((passenger) =>
      validatePassenger(passenger)
    );
    setErrors(validationErrors);

    const allPassengersValid = validationErrors.every(
      (error) => Object.keys(error).length === 0
    );

    if (!allPassengersValid) {
      return;
    }

    const totalPrice = calculateTotalPrice();
    const bookingData = {
      trainId: selectedTrain?.id,
      classType: selectedClass,
      coach: selectedCoach,
      seats: selectedSeats,
      passengers: passengers.map((passenger) => ({
        type: passenger.type,
        name: passenger.name,
        nin: passenger.nin,
        email: passenger.email,
        phone: passenger.phone,
      })),
      contact: contactDetails,
      totalPrice: totalPrice,
    };

    try {
      const response = await axios.post('/bookings', bookingData);
      if (response.status === 201) {
          // Store the booking data in Zustand before navigation
          setBookingData(response.data.booking);
        router.push('/payment');
      } else {
        console.error('Booking failed:', response.data.message);
      }
    } catch (error) {
      console.error('Error creating booking:', error);
      
    }
  };

  const handleUpdatePassenger = (id, updatedPassenger) => {
    updatePassenger(id, updatedPassenger);
  };

  const handleRemovePassenger = (id) => {
    removePassenger(id);
  };

  const handleNavigateHome = () => {
    router.push('/');
  };

  return (
    <div className="pt-44">
      <SearchTrain
        w="w-11/12"
        bg="bg-[#006B14]"
        gap="gap-8"
        btnBg="bg-[#FFFFFF]"
        inputPy="py-2"
        inputPadding="py-1.5"
        inputBg="bg-[#FFFFFF36]"
        inputBorder="border-2 border-[#FFFFFF61]"
        inputText="text-[#FFFFFF]"
        inputText2="text-[#ffffff]"
        btnText="text-[#006B14]"
        inputW="w-full lg:w-[25%] xl:w-[25%]"
        btnWidth="w-full lg:w-[25%] xl:w-[20%]"
        py="pt-6 pb-6 lg:pt-8 lg:pb-12 xl:pt-10 xl:pb-14"
      />
      <div className="w-[335px] md:w-[81%] lg:w-11/12 container mx-auto my-[50px] shadow-md rounded-b-md">
        <div className="font-semibold text-[16px] md:text-[20px] px-[39px] xl:text-[29px] text-center bg-[#E2F5E5] py-6 rounded-t-md">
          <h1>
            {selectedTrain?.route} | {selectedTrain?.timeOfDay} |{' '}
            {selectedTrain?.trainNumber}
          </h1>
        </div>
        <div className="lg:px-11 pb-5">
          <div>
            <Hours schedule={selectedTrain} />
          </div>

          <h1 className="font-bold text-3xl mb-5">Book a Seat</h1>
          <div className="py-9 lg:border rounded-lg shadow lg:shadow-none lg:px-11 px-3 mb-12 text-[#263238]">
            <div className="text-[#263238]">
              <Search
                selectedSeats={selectedSeats}
                setSelectedSeats={setSelectedSeats}
                passengers={passengers}
                setPassengers={setPassengers}
                selectedTrain={selectedTrain}
              />
            </div>
            <hr className="mb-7" />
            <div className="text-[#263238]">
              {passengers.map((passenger) => (
                <Passenger
                  key={passenger.id}
                  id={passenger.id}
                  index={passengers.indexOf(passenger)}
                  coach={selectedCoach}
                  seat={selectedSeats[passengers.indexOf(passenger)]}
                  selectedSeats={selectedSeats}
                  setSelectedSeats={setSelectedSeats}
                  passengerData={passenger}
                  onUpdatePassenger={(updatedPassenger) =>
                    handleUpdatePassenger(passenger.id, updatedPassenger)
                  }
                  onRemovePassenger={() => handleRemovePassenger(passenger.id)}
                  errors={errors[passengers.indexOf(passenger)] || {}}
                />
              ))}
              <hr className="mb-7 bg-[#D5D4D4]" />
            </div>
            <div className="text-[#263238]">
              <ContactDetails />
            </div>
            <hr className="mb-8 bg-[#D5D4D4]" />
            <div className="lg:flex gap-12 w-full">
              <button
                onClick={handleProceed}
                className="bg-[#18A532] text-white lg:w-[30%] w-full rounded-lg py-3 mb-5 lg:mb-0 placeholder-[#263238] text-center"
              >
                Proceed
              </button>
              <button
                onClick={handleNavigateHome}
                className="border border-[#18A532] text-[#18A532] lg:w-[30%] w-full rounded-lg py-3 placeholder-[#263238]"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}