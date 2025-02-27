import News from "@/components/home/news";
import Updates from "@/components/home/news";

import Hero from "@/components/home/hero";
import Search from "@/components/home/search";
import Changes from "@/components/home/changes";
import Companion from "@/components/reusables/railCompanion";
import Explore from "@/components/about/explore";
import Services from "@/components/reusables/services";

export default function Home() {
  return (
    <div>
   
     <div className="relative">
      <div>
        <Hero />
      </div>
        <div className="w-full absolute -bottom-[22.5rem] md:-bottom-[22rem] lg:-bottom-20" >
          <Search/>
        </div>
     </div>

      <Explore/>
      <Services/>
      <Changes/>
      <News/>
      <Companion/>
    </div>
  );
}