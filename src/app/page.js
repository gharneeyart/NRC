import News from "@/components/home/news";
import Updates from "@/components/home/news";

import Hero from "@/components/home/hero";
import Search from "@/components/home/search";
import Changes from "@/components/home/changes";
import Companion from "@/components/reusables/railCompanion";
import Explore from "@/components/about/explore";
import Services from "@/components/reusables/services";
import Payment from "./paymentpart/page";

export default function Home() {
  return (
    <div>
   
     <div className="lg:relative">
        <Hero />
      
        <div className="-mt-8 lg:-mt-0 w-full lg:absolute lg:-bottom-20 lg:z-50" >
          <Search/>
        </div>
     </div>

      
      <Explore/>
      <Services/>
      <Changes/>
      <Payment/>
      <News/>
      <Companion/>
      {/* w-full absolute -bottom-[22.5rem] md:-bottom-[22rem] lg:-bottom-20 z-50 */}
    </div>
  );
}