import Image from "next/image";
import Train from '../../images/movingtrain.png'
export default function Marquee() {
  return (
    <div className="bg-[#006B14] h-9 md:h-10 pt-3 md:pt-4">
    <marquee behavior="scroll" direction="right">
    <Image src={Train} className="h-6" width={300} alt="moving-train" />
    </marquee>
    </div>
  );
}
