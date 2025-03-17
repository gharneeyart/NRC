// import Image from "next/image";
// import star from "/public/icons/Vector (7).svg";
// import train from "/public/images/Old train in thailand.svg";

// export default function Mission() {
//   return (
//     <div className="text-black w-full flex items-center mt-12 ">
//       <div className="flex flex-col lg:flex-row justify-center  mx-auto lg:justify-between lg:justify-between w-11/12 ">
//         <div className="w-full lg:w-1/2 flex justify-center md:justify-start lg:justify-start ">
//           <div className="w-[330px] h-[330px] lg:w-[508px] lg:h-[508px] rounded-lg  ">
//             <Image src={train} alt="Mission Image" width={508} height={508} className="object-cover w-full h-full mb-8 lg:mb-0 rounded-lg"/>
//           </div>
//         </div>

//         <div className="w-full lg:w-1/2 lg:text-2xl lg:gap-8 flex flex-col lg:min-h-[508px] ">
//           <div className="">
//             <h1 className="font-bold text-3xl lg:mb-8 mb-6 mt-7 lg:text-5xl ">Our Mission</h1>
//             <p className="mb-3 text-[#4E4E4E] lg:text-xl">
//               At NRC Train Booking, our mission is to modernize rail travel in Nigeria with a secure, seamless, and user-friendly platform that makes train ticket booking effortless for everyone.
//             </p>
//           </div>

//           <div className="flex flex-col lg:gap-5 gap-3 text-[#4E4E4E] lg:gap-9 flex flex-col lg:text-2xl ">
//             <div className="flex gap-2 lg:text-xl items-start">
//               <Image src={star} alt="Mission Icon" width={40} height={50} />
//               <p>Enhance Accessibility – Making train travel easy and available to all passengers across Nigeria, from urban cities to rural areas.</p>
//             </div>

//             <div className="flex gap-2 lg:text-xl items-start">
//               <Image src={star} alt="Mission Icon" width={40} height={50} />
//                <p>Improve Efficiency – Reducing wait times, eliminating ticketing queues, and ensuring real-time train availability updates.</p>
//             </div>

//             <div className="flex gap-2 lg:text-xl items-start">
//               <Image src={star} alt="Mission Icon" width={40} height={50} />
//               <p>Enhance User Experience – Providing intuitive navigation, seamless booking, and reliable customer support.</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import Image from "next/image";
import star from "/icons/Vector (7).svg";
import train from "/images/Old train in thailand.svg";

export default function Mission() {
  return (
    <div className="text-black w-full flex items-center py-12 lg:py-[67px] lg:[90%]">
      <div className="flex flex-col lg:flex-row justify-center mx-auto lg:justify-between 2xl:justify-between w-11/12 container">
        {/* Left Section - Image */}
        <div className="2xl:w-full lg:w-[46%] flex justify-center md:justify-start lg:justify-start">
          <div className="w-[330px] h-[330px] lg:w-[508px] lg:h-[508px] 2xl:w-[600px] 2xl:h-[600px] rounded-lg">
            <Image
              src={train}
              alt="Mission Image"
              width={600}
              height={600}
              className="object-cover w-full h-full mb-8 lg:mb-0 rounded-lg"
            />
          </div>
        </div>

        {/* Right Section - Text Content */}
        <div className="2xl:w-full lg:w-[46%] lg:text-xl 2xl:text-2xl lg:gap-6 2xl:gap-10 flex flex-col lg:min-h-[508px] 2xl:min-h-[600px]">
          <div>
            <h1 className="font-bold text-3xl lg:mb-6 2xl:mb-8 mb-6 mt-7 lg:text-4xl 2xl:text-5xl">
              Our Mission
            </h1>
            <p className="mb-2 lg:mb-3 2xl:mb-1 text-[#4E4E4E] lg:text-lg 2xl:text-xl">
              At NRC Train Booking, our mission is to modernize rail travel in Nigeria with a secure, seamless, and user-friendly platform that makes train ticket booking effortless for everyone.
            </p>
          </div>

          {/* Mission Points */}
          <div className="flex flex-col gap-3 lg:gap-5 2xl:gap-6 text-[#4E4E4E] lg:text-lg 2xl:text-xl">
            <div className="flex gap-2 items-start">
              <Image src={star} alt="Mission Icon" width={35} height={45} />
              <p>
                Enhance Accessibility – Making train travel easy and available to all passengers across Nigeria, from urban cities to rural areas.
              </p>
            </div>

            <div className="flex gap-2 items-start">
              <Image src={star} alt="Mission Icon" width={35} height={45} />
              <p>
                Improve Efficiency – Reducing wait times, eliminating ticketing queues, and ensuring real-time train availability updates.
              </p>
            </div>

            <div className="flex gap-2 items-start">
              <Image src={star} alt="Mission Icon" width={35} height={45} />
              <p>
                Enhance User Experience – Providing intuitive navigation, seamless booking, and reliable customer support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
