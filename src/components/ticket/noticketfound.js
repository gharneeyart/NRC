import Image from 'next/image';
import ErrorImg from '/public/images/Mask Group 5.png';

export default function NoTicketFounnd() {
  return (
    <div className="flex flex-col gap-6 items-center my-10 px-16 py-8 ">
      <div>
        <Image src={ErrorImg} alt="" width={200} />
      </div>
      <div className="text-center space-y-3  lg:w-[600px]">
        <h1 className="font-bold text-[24px]">No Tickets Found</h1>
        <p className="text-[#53585A] text-[16px] lg:text-[18px]  lg:px-10 font-medium">
          It looks like you haven&apos;t booked any train tickets yet. Once you make a booking, your tickets will appear here for easy access.
        </p>
      </div>
      <button className="border border-[#18A532] text-[#18A532] py-1 pl-4 pr-4 text-[16px] rounded-md">
        Book a Ticket
      </button>
    </div>
  );
}
