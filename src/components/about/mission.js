import Image from "next/image";
import star from "/public/icons/Vector (7).svg";
import train from "/public/images/Old train in thailand.svg";

export default function Mission() {
  return (
    <div className="text-black w-full flex items-center mt-10">
      <div className="flex flex-col lg:flex-row w-11/12 justify-center items-center mx-auto lg:gap-12">
        <div className="w-full lg:w-1/2 flex justify-center md:justify-start">
          <div className="w-[330px] h-[330px] lg:w-[508px] lg:h-[508px] rounded-lg overflow-hidden ">
            <Image src={train} alt="Mission Image" width={508} height={508} className="object-cover w-full h-full mb-8 lg:mb-0"/>
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <div>
            <h1 className="font-bold text-3xl lg:mb-8 mb-6 mt-7">Our Mission</h1>
            <p className="mb-3 text-[#4E4E4E] lg:text-xl">
              At NRC Train Booking, our mission is to modernize rail travel in Nigeria with a secure, seamless, and user-friendly platform that makes train ticket booking effortless for everyone.
            </p>
          </div>

          <div className="flex flex-col lg:gap-5 gap-3 text-[#4E4E4E]">
            <div className="flex gap-2 lg:text-xl items-start">
              <Image src={star} alt="Mission Icon" width={40} height={50} />
              <p>Enhance Accessibility – Making train travel easy and available to all passengers across Nigeria, from urban cities to rural areas.</p>
            </div>

            <div className="flex gap-2 lg:text-xl items-start">
              <Image src={star} alt="Mission Icon" width={40} height={50} />
               <p>Improve Efficiency – Reducing wait times, eliminating ticketing queues, and ensuring real-time train availability updates.</p>
            </div>

            <div className="flex gap-2 lg:text-xl items-start">
              <Image src={star} alt="Mission Icon" width={40} height={50} />
              <p>Enhance User Experience – Providing intuitive navigation, seamless booking, and reliable customer support.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
