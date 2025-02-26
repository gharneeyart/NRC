<<<<<<< HEAD
import Hero from "@/components/home/hero";
import Search from "@/components/home/search";


export default function Home() {
  return (
    <div className="relative">
     <div>
       <Hero />
     </div>
      <div className="w-full absolute -bottom-[22.5rem] md:-bottom-[22rem] lg:-bottom-20" >
        <Search/>
      </div>
=======
import Explore from "@/components/about/explore";

export default function Home() {
  return (
    <div>
      <Explore/>
    
>>>>>>> 5bfcfee43da9c1076bf4c15fc22b27ddc251c112
    </div>
  );
}
