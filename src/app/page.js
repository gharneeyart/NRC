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
    </div>
  );
}
