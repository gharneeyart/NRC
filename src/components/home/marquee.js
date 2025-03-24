import Image from "next/image";
import Train from '../../images/movingtrain.png'
export default function Marquee() {
  return (
    <div className="bg-[#006B14] h-8 py-2 hidden lg:block">
    <marquee behavior="scroll" direction="right">
    <Image src={Train} className="h-5" width={200} alt="moving-train" />
    </marquee>
     
      
    </div>
  );
}
