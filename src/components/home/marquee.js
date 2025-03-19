import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function MarqueeComponent() {
  return (
    <div className="bg-[#006B14] height-[37px] py-1">
    <marquee behavior="scroll" direction="right">
    <Image src="/images/movingtrain.png" width={150} height={100} alt="moving-train" />
    </marquee>
     
      
    </div>
  );
}
