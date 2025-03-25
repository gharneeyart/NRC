// import Image from "next/image"
// import Img1 from '../../../icons/Frame 1000003430 (1).svg'
// import img from '../../../icons/Frame 1000003455 (1).svg'
// import scan from '../../../images/Group.svg'
// import Img from '../../../images/Frame 1000003438.svg'
// import img1 from '../../../images/Frame 1000003439.svg'

// export default function Ticket() {
//     return(
//         <div className="pt-36">
//             <div className='w-full text-center bg-[#006B14] py-[23px] lg:py-[40px] text-white font-semibold text-[32px]'>
//             <h1 className="">My Tickets</h1>
//             </div>
//             <div className='border shadow rounded-3xl my-[57px] w-[335px] md:w-[550px] lg:w-[972px] mx-auto'>
//                 <div className='border-b p-[17px] xl:p-[50px] flex flex-col gap-[26px] lg:gap-[79px]'>
//                 <div className='flex justify-between items-center'>
//                   <div className='flex flex-row gap-[7px]'>
//                   <Image className="w-[26px] md:w-[38px] lg:w-[67px]" src={Img1} alt='icon' />
//                   <div>
//                     <h1 className="font-semibold text-[11px] md:text-[18px] lg:text-[27px]">Lagos - Ibadan Morning Train </h1>
//                     <div className='flex text-[#6D6D6D]'>
//                         <p className="border-r border-r-[#6D6D6D] pr-2 text-[9px] md:text-[14px] lg:text-[23px]">Train No - LL1</p>
//                         <p className="pl-2 text-[9px] md:text-[14px] lg:text-[23px]">PNR No: 5R2WSIX786</p>
//                     </div>
//                   </div>
//                   </div>
//                  <div className=''>
//                  <button className="rounded-full text-[12px] py-[5px] md:py-[9px] px-[11px] md:px-[16px] lg:py-[12px] lg:px-[26px] text-[#18A532] font-medium bg-[#F2FFF4] border">Active</button>
//                  </div>
//                 </div>
//                 <div className='flex flex-col lg:flex-row gap-4 items-center text-center lg:justify-between '>
//                 <div className="flex flex-col gap-[12px]">
//                     <div className=" flex flex-col gap-[6px] lg:w-[282px]">
//                         <h1 className="font-semibold text-[16px] md:text-[20px] xl:text-[28px]">07:57</h1>
//                         <div className='flex flex-col'>
//                         <p className="text-[#767676] text-[14px] md:text-[18px] xl:text-[22px]">Mobalaji Johnson Station</p>
//                         <p className="text-[#767676] text-[14px] md:text-[18px] xl:text-[22px]">Ebute Metta</p>
//                         </div>
//                             </div>
//                             <p className="text-[#767676] text-[14px] md:text-[18px] xl:text-[22px]">28 - Jan - 2025</p>
//                             </div>
//                             <div className=" hidden lg:block  flex flex-col items-center text-center justify-center ">
//                                    <div className="flex flex-col gap-6 items-center text-center justify-center ">
//                                    <p className="font-semibold text-[14px] md:text-[20px] xl:text-[28px]">0  hrs 24 mins</p>
//                                         <Image src={img} alt="train" className=" w-[66px] md:w-[100px]  lg:w-[239px] " />
//                                     </div>
//                                         <p className='text-lg text-[#F4AC00] bg-[#F9F1DF] font-semibold py-[15px] rounded-full px-[32px]'>Business Class</p>
//                                    </div>
//                                    <div className=" lg:hidden flex flex-col gap-2 items-center text-center justify-center ">
//                                           <div className="flex flex-row gap-6 items-center text-center justify-center ">
//                                                <Image src={Img} alt="train" className="w-[66px] md:w-[100px]  xl:w-[144px] " />
//                                               <p className="font-semibold text-[14px] md:text-[18px] xl:text-[28px]">0  hrs 24 mins</p>
//                                                <Image src={img1} alt="train"  className="w-[66px] md:w-[100px] xl:w-[144px]" />
//                                            </div>
//                                                <p className='text-[10px] md:text-[13px] lg:text-lg text-[#F4AC00] bg-[#F9F1DF] font-semibold py-[7px] lg:py-[15px] rounded-full px-[16px] lg:px-[32px]'>Business Class</p>
//                                           </div>
//                                    <div  className="flex flex-col gap-[12px]">
//         <div  className=" flex flex-col gap-[6px] lg:w-[282px]">
//         <h1 className="font-semibold text-[16px] md:text-[20px] xl:text-[28px]">08:21</h1>
//             <p className="text-[#767676] text-[14px] md:text-[18px] xl:text-[22px]">Mobalaji Johnson Station</p>
//             <p className="text-[#767676] text-[14px] md:text-[18px] xl:text-[22px]">Ebute Metta</p>
//         </div>
//             <p className="text-[#767676] text-[14px] md:text-[18px] xl:text-[22px]">28 - Jan - 2025</p>
//         </div>
//                 </div>
//                 </div>
//                 <div className='p-[17px] xl:p-[50px] flex items-center justify-between'>
//                 <div className=''>
//                             <h1 className="font-semibold text-[12px] md:text-[18px] lg:text-[27px]">Passenger: Oluwaseun Adedayo</h1>
//                             <div className='flex text-[9px] md:text-[14px] lg:text-[23px] text-[#6D6D6D]'>
//                                 <p className="border-r border-r-[#6D6D6D] pr-2">NIN: ****2034</p>
//                                 <p className="border-r border-r-[#6D6D6D] px-1 lg:px-2">Contact No: 08164567825</p>
//                                 <p className="md:pl-2 lg:pl-2">Type: Adult</p>
//                             </div>
//                             <div className='flex items-center text-[9px] md:text-[14px]'>
//                                 <p className="lg:text-[23px] text-[#6D6D6D] pr-2">Coach/Seat No: CO1/1A</p>
//                                 <p className="border-l border-l-black pl-2 lg:text-[20px]">Price: 6500</p>
//                             </div>
//                         </div>
//                     <span className="">
//                         <Image className='w-[34px] lg:w-[100px]' src={scan} alt="scan" />
//                     </span>
//                 </div>
//             </div>
//         </div>
//     )
// }

'use client';
import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from "next/image";
import axios from 'axios';
import Img1 from '../../../icons/Frame 1000003430 (1).svg';
import img from '../../../icons/Frame 1000003455 (1).svg';
import scan from '../../../images/Group.svg';
import Img from '../../../images/Frame 1000003438.svg';
import img1 from '../../../images/Frame 1000003439.svg';

// Main content component that uses useSearchParams
function TicketContent() {
  const [ticketData, setTicketData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const searchParams = useSearchParams();
  const bookingId = searchParams.get('bookingId');

  useEffect(() => {
    const fetchTicketData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`/api/v1/tickets/${bookingId}`);
        
        if (response.data) {
          setTicketData(response.data);
        } else {
          setError('Ticket not found');
        }
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to load ticket');
        console.error('Error fetching ticket:', err);
      } finally {
        setLoading(false);
      }
    };

    if (bookingId) {
      fetchTicketData();
    } else {
      setError('No booking ID provided');
      setLoading(false);
    }
  }, [bookingId]);

  if (loading) {
    return (
      <div className="pt-36">
        <div className='w-full text-center bg-[#006B14] py-[23px] lg:py-[40px] text-white font-semibold text-[32px]'>
          <h1>My Tickets</h1>
        </div>
        <div className="text-center py-20">Loading ticket information...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="pt-36">
        <div className='w-full text-center bg-[#006B14] py-[23px] lg:py-[40px] text-white font-semibold text-[32px]'>
          <h1>My Tickets</h1>
        </div>
        <div className="text-center py-20 text-red-500">{error}</div>
      </div>
    );
  }

  if (!ticketData) {
    return (
      <div className="pt-36">
        <div className='w-full text-center bg-[#006B14] py-[23px] lg:py-[40px] text-white font-semibold text-[32px]'>
          <h1>My Tickets</h1>
        </div>
        <div className="text-center py-20">No ticket data available</div>
      </div>
    );
  }

  // Extract data from ticketData
  const { 
    train, 
    passengers, 
    status, 
    bookingId: pnr, 
    classType, 
    coach, 
    seats, 
    totalPrice,
    createdAt 
  } = ticketData;
  
  const primaryPassenger = passengers[0];
  const departureDate = new Date(train.departure.date);
  const arrivalDate = new Date(train.arrival.date);

  return (
    <div className="pt-36">
      <div className='w-full text-center bg-[#006B14] py-[23px] lg:py-[40px] text-white font-semibold text-[32px]'>
        <h1>My Tickets</h1>
      </div>
      
      <div className='border shadow rounded-3xl my-[57px] w-[335px] md:w-[550px] lg:w-[972px] mx-auto'>
        <div className='border-b p-[17px] xl:p-[50px] flex flex-col gap-[26px] lg:gap-[79px]'>
          <div className='flex justify-between items-center'>
            <div className='flex flex-row gap-[7px]'>
              <Image 
                className="w-[26px] md:w-[38px] lg:w-[67px]" 
                src={Img1} 
                alt='icon' 
                width={67}
                height={67}
              />
              <div>
                <h1 className="font-semibold text-[11px] md:text-[18px] lg:text-[27px]">
                  {train.route}
                </h1>
                <div className='flex text-[#6D6D6D]'>
                  <p className="border-r border-r-[#6D6D6D] pr-2 text-[9px] md:text-[14px] lg:text-[23px]">
                    Train No - {train.trainNumber}
                  </p>
                  <p className="pl-2 text-[9px] md:text-[14px] lg:text-[23px]">
                    PNR No: {pnr}
                  </p>
                </div>
              </div>
            </div>
            <div className=''>
              <button className={`rounded-full text-[12px] py-[5px] md:py-[9px] px-[11px] md:px-[16px] lg:py-[12px] lg:px-[26px] font-medium border ${
                status === 'confirmed' 
                  ? 'text-[#18A532] bg-[#F2FFF4]' 
                  : 'text-[#FF0000] bg-[#FFF2F2]'
              }`}>
                {status === 'confirmed' ? 'Active' : 'Cancelled'}
              </button>
            </div>
          </div>
          
          <div className='flex flex-col lg:flex-row gap-4 items-center text-center lg:justify-between'>
            <div className="flex flex-col gap-[12px]">
              <div className="flex flex-col gap-[6px] lg:w-[282px]">
                <h1 className="font-semibold text-[16px] md:text-[20px] xl:text-[28px]">
                  {train.departure.time}
                </h1>
                <div className='flex flex-col'>
                  <p className="text-[#767676] text-[14px] md:text-[18px] xl:text-[22px]">
                    {train.departure.station}
                  </p>
                  <p className="text-[#767676] text-[14px] md:text-[18px] xl:text-[22px]">
                    {train.departure.street}
                  </p>
                </div>
              </div>
              <p className="text-[#767676] text-[14px] md:text-[18px] xl:text-[22px]">
                {departureDate.toLocaleDateString('en-US', { 
                  day: 'numeric', 
                  month: 'short', 
                  year: 'numeric' 
                })}
              </p>
            </div>
            
            <div className="hidden lg:block flex flex-col items-center text-center justify-center">
              <div className="flex flex-col gap-6 items-center text-center justify-center">
                <p className="font-semibold text-[14px] md:text-[20px] xl:text-[28px]">
                  {train.duration}
                </p>
                <Image 
                  src={img} 
                  alt="train" 
                  className="w-[66px] md:w-[100px] lg:w-[239px]"
                  width={239}
                  height={100}
                />
              </div>
              <p className={`text-lg font-semibold py-[15px] rounded-full px-[32px] ${
                classType.toLowerCase() === 'business class' 
                  ? 'text-[#F4AC00] bg-[#F9F1DF]'
                  : classType.toLowerCase() === 'first class'
                  ? 'text-[#18A532] bg-[#E8FFED]'
                  : 'text-[#595959] bg-[#EDEDED]'
              }`}>
                {classType}
              </p>
            </div>
            
            <div className="lg:hidden flex flex-col gap-2 items-center text-center justify-center">
              <div className="flex flex-row gap-6 items-center text-center justify-center">
                <Image 
                  src={Img} 
                  alt="train" 
                  className="w-[66px] md:w-[100px] xl:w-[144px]"
                  width={144}
                  height={100}
                />
                <p className="font-semibold text-[14px] md:text-[18px] xl:text-[28px]">
                  {train.duration}
                </p>
                <Image 
                  src={img1} 
                  alt="train"  
                  className="w-[66px] md:w-[100px] xl:w-[144px]"
                  width={144}
                  height={100}
                />
              </div>
              <p className={`text-[10px] md:text-[13px] lg:text-lg font-semibold py-[7px] lg:py-[15px] rounded-full px-[16px] lg:px-[32px] ${
                classType.toLowerCase() === 'business class' 
                  ? 'text-[#F4AC00] bg-[#F9F1DF]'
                  : classType.toLowerCase() === 'first class'
                  ? 'text-[#18A532] bg-[#E8FFED]'
                  : 'text-[#595959] bg-[#EDEDED]'
              }`}>
                {classType}
              </p>
            </div>
            
            <div className="flex flex-col gap-[12px]">
              <div className="flex flex-col gap-[6px] lg:w-[282px]">
                <h1 className="font-semibold text-[16px] md:text-[20px] xl:text-[28px]">
                  {train.arrival.time}
                </h1>
                <p className="text-[#767676] text-[14px] md:text-[18px] xl:text-[22px]">
                  {train.arrival.station}
                </p>
                <p className="text-[#767676] text-[14px] md:text-[18px] xl:text-[22px]">
                  {train.arrival.street}
                </p>
              </div>
              <p className="text-[#767676] text-[14px] md:text-[18px] xl:text-[22px]">
                {arrivalDate.toLocaleDateString('en-US', { 
                  day: 'numeric', 
                  month: 'short', 
                  year: 'numeric' 
                })}
              </p>
            </div>
          </div>
        </div>
        
        <div className='p-[17px] xl:p-[50px] flex items-center justify-between'>
          <div className=''>
            <h1 className="font-semibold text-[12px] md:text-[18px] lg:text-[27px]">
              Passenger: {primaryPassenger.name}
            </h1>
            <div className='flex text-[9px] md:text-[14px] lg:text-[23px] text-[#6D6D6D]'>
              <p className="border-r border-r-[#6D6D6D] pr-2">
                NIN: ****{primaryPassenger.nin?.slice(-4)}
              </p>
              <p className="border-r border-r-[#6D6D6D] px-1 lg:px-2">
                Contact No: {primaryPassenger.phone}
              </p>
              <p className="md:pl-2 lg:pl-2">
                Type: {primaryPassenger.type}
              </p>
            </div>
            <div className='flex items-center text-[9px] md:text-[14px]'>
              <p className="lg:text-[23px] text-[#6D6D6D] pr-2">
                Coach/Seat No: {coach}/{seats?.join(', ')}
              </p>
              <p className="border-l border-l-black pl-2 lg:text-[20px]">
                Price: ₦{totalPrice}
              </p>
            </div>
          </div>
          <span className="">
            <Image 
              className='w-[34px] lg:w-[100px]' 
              src={scan} 
              alt="scan"
              width={100}
              height={100}
            />
          </span>
        </div>
      </div>
    </div>
  );
}

// Outer component that provides Suspense boundary
export default function Ticket() {
  return (
    <Suspense fallback={
      <div className="pt-36">
        <div className='w-full text-center bg-[#006B14] py-[23px] lg:py-[40px] text-white font-semibold text-[32px]'>
          <h1>My Tickets</h1>
        </div>
        <div className="text-center py-20">Loading...</div>
      </div>
    }>
      <TicketContent />
    </Suspense>
  );
}