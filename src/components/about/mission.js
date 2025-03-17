// import Image from "next/image";
// import star from "/public/icons/Vector (7).svg";
// import triple from "/public/images/Frame 1618869461.svg";

// export default function Mission() {
//   return (
//     <div className="text-black w-full items-center mt-12 lg:w-[90%] lg:grid grid-cols-2 mx-auto items-center 4xl:w-[80%] 4xl:gap-2">

//       <div>
//         <Image
//           src={triple}
//           className="2xl:w-[70%] md:w-[50%] md:ml-7 lg:w-[90%] lg:h-[90%] px-7 lg:p-0 2xl:p-0"
//           alt="trains"
//         />
//       </div>

//       <div className="lg:text-xl 2xl:text-2xl lg:gap-6 2xl:gap-10 4xl:gap-3 flex flex-col md:ml-4 2xl:h-[604px] lg:w-[90%] 2xl:w-[70%] w-90% mx-auto items-center px-7 lg:p-0 2xl:p-0">
//         <div>
//           <h1 className="font-bold text-3xl lg:mb-6 2xl:mb-8 mb-6 mt-7 lg:text-4xl 2xl:text-5xl">
//             Our Mission
//           </h1>
//           <p className="mb-2 lg:mb-3 2xl:mb-1 text-[#4E4E4E] lg:text-lg 2xl:text-xl font-semibold">
//             At NRC Train Booking, our mission is to modernize rail travel in Nigeria with a secure, seamless, and user-friendly platform that makes train ticket booking effortless for everyone.
//           </p>
//         </div>

//         {/* Mission Points */}
//         <div className="flex flex-col gap-3 lg:gap-5 2xl:gap-6 4xl:gap-2 text-[#4E4E4E] lg:text-lg 2xl:text-xl">
//           <div className="flex gap-2 items-start">
//             <Image src={star} alt="Mission Icon" width={40} height={45} />
//             <p className="font-semibold">
//               Enhance Accessibility – Making train travel easy and available to all passengers across Nigeria, from urban cities to rural areas.
//             </p>
//           </div>

//           <div className="flex gap-2 items-start">
//             <Image src={star} alt="Mission Icon" width={35} height={45} />
//             <p className="font-semibold">
//               Improve Efficiency – Reducing wait times, eliminating ticketing queues, and ensuring real-time train availability updates.
//             </p>
//           </div>

//           <div className="flex gap-2 items-start">
//             <Image src={star} alt="Mission Icon" width={35} height={45} />
//             <p className="font-semibold">
//               Enhance User Experience – Providing intuitive navigation, seamless booking, and reliable customer support.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import Image from 'next/image';
import star from '/public/icons/Vector (7).svg';
import triple from '/public/images/Frame 1618869461.svg';

export default function Mission() {
  return (
    <div className="w-11/12 container mx-auto text-black  my-14  flex flex-col lg:flex-row items-center  justify-between ">
      <div className="w-full lg:w-[45%] 2xl:w-[40%] mb-8 lg:mb-0">
        <Image
          src={triple}
          className="w-full lg:h-full object-cover "
          alt="trains"
        />
      </div>

      <div className="lg:text-xl 2xl:text-2xl lg:gap-3 2xl:gap-10 4xl:gap-3 flex flex-col md:ml-4  w-full lg:w-[50%]    px-7 lg:p-0 xl:p-0">
        <div>
          <h1 className="font-bold text-3xl lg:mb-3 xl:mb-9 mb-6  lg:text-4xl 2xl:text-5xl">
            Our Mission
          </h1>
          <p className="mb-2 lg:mb-3 2xl:mb-1 text-[#4E4E4E] lg:text-lg 2xl:text-xl font-semibold">
            At NRC Train Booking, our mission is to modernize rail travel in
            Nigeria with a secure, seamless, and user-friendly platform that
            makes train ticket booking effortless for everyone.
          </p>
        </div>

        {/* Mission Points */}
        <div className="flex flex-col gap-3 lg:gap-3 xl:gap-8 4xl:gap-2 text-[#4E4E4E] lg:text-lg 2xl:text-xl">
          <div className="flex gap-2 items-start">
            <Image src={star} alt="Mission Icon" width={40} height={45} />
            <p className="font-semibold">
              Enhance Accessibility – Making train travel easy and available to
              all passengers across Nigeria, from urban cities to rural areas.
            </p>
          </div>

          <div className="flex gap-2 items-start">
            <Image src={star} alt="Mission Icon" width={35} height={45} />
            <p className="font-semibold">
              Improve Efficiency – Reducing wait times, eliminating ticketing
              queues, and ensuring real-time train availability updates.
            </p>
          </div>

          <div className="flex gap-2 items-start">
            <Image src={star} alt="Mission Icon" width={35} height={45} />
            <p className="font-semibold">
              Enhance User Experience – Providing intuitive navigation, seamless
              booking, and reliable customer support.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
