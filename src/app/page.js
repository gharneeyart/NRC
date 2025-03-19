import News from "@/components/home/news";

import Hero from "@/components/home/hero";
import Changes from "@/components/home/changes";
import Companion from "@/components/reusables/railCompanion";
import Explore from "@/components/about/explore";
import Services from "@/components/reusables/services";
import SearchTrain from "@/components/reusables/search";
import Nav from "@/layouts/Nav";
import Footer from "@/layouts/Footer";


export default function Home() {
  return (
    <div>
      <Nav/>
     <div className="lg:relative">
        <Hero />
      
        <div className="-mt-8 lg:-mt-0 w-full lg:absolute lg:-bottom-20 lg:z-50" >
          <SearchTrain w='w-[90%]' bg='bg-[#ffffff]' gap='gap-8' btnBg='bg-[#18A532]' inputPy='py-2' inputPadding='py-1.5' rounded='rounded-xl lg:rounded-md'  inputBorder='border-2 border-[#D5D4D4]'  inputText='text-[#9C9C9C]' inputText2='text-black' btnText='text-[#ffffff]' content1='From' content2='To' content3='Date' inputW='w-full lg:w-[25%]  xl:w-[25%]' btnWidth='w-full lg:w-[25%] xl:w-[20%]' py='pt-6 pb-6 lg:pt-8 lg:pb-12 xl:pt-10 xl:pb-14' />
        </div>
     </div>

      
      <Explore/>
      <Services/>
      <Changes/>
      <News/>
      <Companion/>
      {/* w-full absolute -bottom-[22.5rem] md:-bottom-[22rem] lg:-bottom-20 z-50 */}
      <Footer/>
    </div>
  );
}