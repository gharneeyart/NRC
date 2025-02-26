import Hero from "@/components/home/hero";
import Search from "@/components/home/search";
import Explore from "@/components/about/explore";

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
    
    </div>
  );
}
