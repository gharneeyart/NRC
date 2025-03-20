import Img from '../../images/分组 6 copy.svg';
import Image from 'next/image';
export default function notrains() {
  return (
    <div className="w-[80%] mx-auto">
      <Image
        src={Img}
        alt="nosearch"
        className="flex justify-center mx-auto w-[50%] 2xl:w-[25%] lg:w-[40%] mb-7"
        width={100}
        height={100}
      />
      <div className="text-center">
        <h1 className="font-bold  mb-3 text-3xl text-black">
          Oops! No Trains Found for Your Search.
        </h1>
        <h3 className="lg:text-xl text-[#53585A] text-base md:text-base">
          No trains found for your selected route and date. This may be due to
          no scheduled trains, full bookings, or temporary disruptions. Try a
          different date or check alternative routes.
        </h3>
      </div>
    </div>
  );
}
