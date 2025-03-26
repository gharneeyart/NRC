// pages/bookings.js
'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Image from "next/image";
import FirstIcon from '../../../icons/Frame 1000003430.svg';
import BusinessIcon from '../../../icons/Frame 1000003430 (1).svg';
import StandardIcon from '../../../icons/Frame 1000003430 (2).svg';
import img from '../../../icons/Frame 1000003455 (1).svg';
import scan from '../../../images/Group.svg';
import Img from '../../../images/Frame 1000003438.svg';
import img1 from '../../../images/Frame 1000003439.svg';
import { useAuth } from '@/context/AuthContext';
import NoTicketFound from '@/components/ticket/noticketfound';
import Companion from '@/components/reusables/railCompanion';

export default function Tickets() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const { auth } = useAuth();

  // Helper to get the icon for a ticket class
  const getClassIcon = (type) => {
    const icons = {
      "first class": FirstIcon,
      "business class": BusinessIcon,
      "standard class": StandardIcon,
    };
    return icons[type.toLowerCase()] || BusinessIcon;
  };

  // Helper to get class-specific CSS styles
  const getClassStyles = (type) => {
    const styles = {
      "first class": "text-[#18A532] bg-[#E8FFED] border-[#18A532]",
      "business class": "text-[#F4AC00] bg-[#FFF7E3] border-[#F4AC00]",
      "standard class": "text-[#595959] bg-[#EDEDED] border-[#595959]",
    };
    return styles[type.toLowerCase()] || "";
  };

  // Helper to calculate price based on passenger type and class
  const getPassengerPrice = (passengerType, classType, trainClasses) => {
    const trainClass = trainClasses.find(c => c.type.toLowerCase() === classType.toLowerCase());
    if (!trainClass) return 0;
    
    const priceString = passengerType === 'Adult' 
      ? trainClass.priceAdult 
      : trainClass.priceChild;
    
    return parseInt(priceString.replace(/₦/, '')) || 0;
  };

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get('/ticket', {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        });
        setBookings(response.data);
      } catch (error) {
        console.error('Failed to fetch tickets:', error);
      } finally {
        setLoading(false);
      }
    };

    if (auth?.token) {
      fetchBookings();
    }
  }, [auth?.token]);

  if (loading) return <div>Loading...</div>;
  
  // Helper function to format date as "28 - Jan - 2025"
const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'short' });
  const year = date.getFullYear();
  return `${day} - ${month} - ${year}`;
};

  return (
    <div className="pt-40">
      <div className='w-full text-center bg-[#006B14] py-[23px] lg:py-[49px] text-white font-semibold text-[32px]'>
        <h1>My Tickets</h1>
      </div>
      
      {bookings?.length === 0 ? (
        <div>
          <NoTicketFound />
          <Companion />
        </div>
      ) : (
        <div className="space-y-4 pb-5">
          {bookings.map(booking => (
            <div key={booking?._id} className="border rounded-lg p-4">
              <div className='border shadow rounded-3xl my-[57px] w-[335px] md:w-[550px] lg:w-[972px] mx-auto'>
                <div className='border-b p-[17px] xl:p-[50px] flex flex-col gap-[26px] lg:gap-[79px]'>
                  <div className='flex justify-between items-center'>
                    <div className='flex flex-row gap-[7px]'>
                      <Image 
                        className="w-[26px] md:w-[38px] lg:w-[67px]" 
                        src={getClassIcon(booking?.classType)} 
                        alt='class icon' 
                      />
                      <div>
                        <h1 className="font-semibold text-[11px] md:text-[18px] lg:text-[27px]">
                          {booking?.train?.route}
                        </h1>
                        <div className='flex text-[#6D6D6D]'>
                          <p className="border-r border-r-[#6D6D6D] pr-2 text-[9px] md:text-[14px] lg:text-[23px]">
                            Train No - {booking?.train?.trainNumber}
                          </p>
                          <p className="pl-2 text-[9px] md:text-[14px] lg:text-[23px]">
                            PNR No: {booking?.bookingId}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <button className={`rounded-full text-xs md:text-base py-[5px] md:py-[9px] px-[11px] md:px-[16px] lg:py-[12px] lg:px-[26px] font-medium border ${getClassStyles(booking?.classType)}`}>
                        {booking?.status}
                      </button>
                    </div>
                  </div>
                  
                  <div className='flex flex-col lg:flex-row gap-4 items-center text-center lg:justify-between'>
                    {/* Departure Info */}
                    <div className="flex flex-col gap-[12px]">
                      <div className="flex flex-col gap-[6px] lg:w-[282px]">
                        <h1 className="font-semibold text-[16px] md:text-[20px] xl:text-[28px]">
                          {booking?.train?.departure?.time}
                        </h1>
                        <div className='flex flex-col'>
                          <p className="text-[#767676] text-[14px] md:text-[18px] xl:text-[22px]">
                            {booking?.train?.departure?.station}
                          </p>
                          <p className="text-[#767676] text-[14px] md:text-[18px] xl:text-[22px]">
                            {booking?.train?.departure?.street}
                          </p>
                        </div>
                      </div>
                      <p className="text-[#767676] text-[14px] md:text-[18px] xl:text-[22px]">
                      {formatDate(booking?.train?.departure?.date)}
                      </p>
                    </div>
                    
                    {/* Journey Info - Desktop */}
                    <div className="hidden lg:block flex flex-col items-center text-center justify-center">
                      <div className="flex flex-col gap-6 items-center text-center justify-center">
                        <p className="font-semibold text-[14px] md:text-[20px] xl:text-[28px]">
                          {booking?.train?.duration}
                        </p>
                        <Image src={img} alt="train" className="w-[66px] md:w-[100px] lg:w-[239px]" />
                      </div>
                      <p className={`text-lg font-semibold py-[15px] rounded-full px-[32px] mt-3 ${getClassStyles(booking?.classType)}`}>
                        {booking?.classType}
                      </p>
                    </div>
                    
                    {/* Journey Info - Mobile */}
                    <div className="lg:hidden flex flex-col gap-2 items-center text-center justify-center">
                      <div className="flex flex-row gap-6 items-center text-center justify-center">
                        <Image src={Img} alt="train" className="w-[66px] md:w-[100px] xl:w-[144px]" />
                        <p className="font-semibold text-[14px] md:text-[18px] xl:text-[28px]">
                          {booking?.train?.duration}
                        </p>
                        <Image src={img1} alt="train" className="w-[66px] md:w-[100px] xl:w-[144px]" />
                      </div>
                      <p className={`text-[10px] md:text-[13px] lg:text-lg font-semibold py-[7px] lg:py-[15px] rounded-full px-[16px] lg:px-[32px] ${getClassStyles(booking?.classType)}`}>
                        {booking?.classType}
                      </p>
                    </div>
                    
                    {/* Arrival Info */}
                    <div className="flex flex-col gap-[12px]">
                      <div className="flex flex-col gap-[6px] lg:w-[282px]">
                        <h1 className="font-semibold text-[16px] md:text-[20px] xl:text-[28px]">
                          {booking?.train?.arrival?.time}
                        </h1>
                        <p className="text-[#767676] text-[14px] md:text-[18px] xl:text-[22px]">
                          {booking?.train?.arrival?.station}
                        </p>
                        <p className="text-[#767676] text-[14px] md:text-[18px] xl:text-[22px]">
                          {booking?.train?.arrival?.street}
                        </p>
                      </div>
                      <p className="text-[#767676] text-[14px] md:text-[18px] xl:text-[22px]">
                      {formatDate(booking?.train?.departure?.date)}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Passenger Details */}
                <div className='p-[17px] xl:p-[50px] flex items-center justify-between'>
                  <div className=''>
                    {booking.passengers.map((passenger, index) => (
                      <div key={`${booking._id}-${index}`} className="mb-4 last:mb-0">
                        <h1 className="font-semibold text-[12px] md:text-[18px] lg:text-[27px]">
                          Passenger: {passenger?.name}
                        </h1>
                        <div className='flex text-[9px] md:text-[14px] lg:text-[23px] text-[#6D6D6D]'>
                          <p className="border-r border-r-[#6D6D6D] pr-2">
                            NIN: ****{passenger?.nin.substring(5)}
                          </p>
                          <p className="border-r border-r-[#6D6D6D] px-1 lg:px-2">
                            Contact No: {passenger?.phone}
                          </p>
                          <p className="md:pl-2 lg:pl-2">
                            Type: {passenger?.type}
                          </p>
                        </div>
                        <div className='flex items-center text-[9px] md:text-[14px]'>
                          <p className="lg:text-[23px] text-[#6D6D6D] pr-2">
                            Coach/Seat No: {booking?.coach}/{booking?.seats[index]}
                          </p>
                          <p className="border-l border-l-black pl-2 lg:text-[20px]">
                            Price: ₦{getPassengerPrice(passenger?.type, booking?.classType, booking?.train?.classes)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <span className="">
                    <Image className='w-[34px] lg:w-[100px]' src={scan} alt="scan" />
                  </span>
                </div>
              </div>
            </div>
          ))}
           <Companion />
        </div>
      )}
     
    </div>
  );
}