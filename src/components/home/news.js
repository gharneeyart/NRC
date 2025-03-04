import { NewsUpdates } from "@/db";
import NewsCard from "../reusables/cards/newsCard";
export default function News() {
    return (
        <div className="w-11/12 container mx-auto space-y-10 lg:space-y-12 xl:space-y-14 py-12">
           <div>
           <h1 className='text-3xl font-bold text-center lg:text-5xl mt-12 mb-3'>News & Updates</h1>
           <p className=' text-center text-sm md:text-base lg:text-lg xl:text-[22px] font-medium text-[#4E4E4E]'>Experience comfort in our modern air-conditioned trains with spacious seating</p>
           </div>
            <div className='flex overflow-x-scroll  lg:overflow-hidden gap-6 xl:gap-8  2xl:gap-14 2xl:justify-center'>
                {NewsUpdates.map((update) => (
                    <div key={update?.id}>
                        <NewsCard Updates={update} />   
                    </div>
                    
                ))}
                
            </div>
        </div>
    );
}
