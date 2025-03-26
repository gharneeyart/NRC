import Image from 'next/image';
import star from '../../icons/Vector (7).svg';
import triple from '../../images/Frame 1618869461.svg';

export default function Mission() {
  return (
    <div className="w-11/12 container mx-auto text-black  my-14  flex flex-col lg:flex-row items-center  justify-between ">
      <div className="w-full lg:w-[45%] 2xl:w-[40%] mb-8 lg:mb-0">
        <Image
          src={triple}
          className="w-full lg:h-[523px]  object-contain "
          alt="trains"
        />
      </div>

      <div className="lg:text-xl 2xl:text-2xl lg:gap-3 2xl:gap-10 4xl:gap-3 flex flex-col md:ml-4  w-full lg:w-[45%]    px-3 lg:p-0 xl:p-0">
        <div>
          <h1 className="font-bold text-3xl lg:mb-3 xl:mb-9 mb-6  lg:text-5xl 2xl:text-6xl">
            Our Mission
          </h1>
          <p className="mb-2 lg:mb-3 2xl:mb-1 text-[#4E4E4E] lg:text-xl font-semibold">
            At NRC Train Booking, our mission is to modernize rail travel in
            Nigeria with a secure, seamless, and user-friendly platform that
            makes train ticket booking effortless for everyone.
          </p>
        </div>

        {/* Mission Points */}
        <div className="flex flex-col gap-3 lg:gap-3 xl:gap-8 4xl:gap-2 text-[#4E4E4E] lg:text-lg 2xl:text-xl">
          <div className="flex gap-2 items-start">
            <Image src={star} alt="Mission Icon" width={40} height={45} />
            <p className="font-semibold lg:text-lg">
              Enhance Accessibility – Making train travel easy and available to
              all passengers across Nigeria, from urban cities to rural areas.
            </p>
          </div>

          <div className="flex gap-2 items-start">
            <Image src={star} alt="Mission Icon" width={35} height={45} />
            <p className="font-semibold lg:text-lg">
              Improve Efficiency – Reducing wait times, eliminating ticketing
              queues, and ensuring real-time train availability updates.
            </p>
          </div>

          <div className="flex gap-2 items-start">
            <Image src={star} alt="Mission Icon" width={35} height={45} />
            <p className="font-semibold lg:text-lg">
              Enhance User Experience – Providing intuitive navigation, seamless
              booking, and reliable customer support.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
