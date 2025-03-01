import { Explores } from "@/db"
import ExploreCard from "../reusables/cards/exploreCard"
export default function Explore() {
    return(
        <div className="w-11/12 container mx-auto mt-10 lg:mt-20 lg:py-[67px] flex flex-col gap-[40px] lg:gap-[55px] ">
            <div className="text-center space-y-2.5">
            <h1 className="font-semibold lg:text-[52px] text-[28px]">Explore Popular Destinations</h1>
            <p className="md:w-[668px] lg:w-[868px] xl:w-[1068px]  mx-auto lg:h-[64px] font-medium text-sm md:text-base lg:text-lg xl:text-[22px] text-[#4E4E4E]">Discover the beauty and diversity of Nigeria through our extensive rail network. From bustling city centers to cultural landmarks, our trains connect you to the nation's most captivating destinations.</p>
            </div>
            <div className="w-10/12 mx-auto lg:w-full  xl:w-full 2xl:w-10/12 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2   lg:justify-center  gap-7 xl:gap-[55px]">
                {Explores.map((exp)=>(
                    <div key={exp?.id}>
                         <ExploreCard myExp={exp}/>
                    </div>
                ))}
               
            </div>
        </div>
    )
}
