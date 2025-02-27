import { NewsUpdates } from "@/db";
import NewsCard from "../reusables/cards/newsCard";
export default function News() {
    return (
        <div>
            <h1 className='text-3xl font-bold text-center lg:text-5xl mt-12 mb-3'>News & Updates</h1>
            <p className=' text-center lg:text-xl text-[#4E4E4E]'>Experience comfort in our modern air-conditioned trains with spacious seating</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto w-full max-w-6xl'>
                {NewsUpdates.map((update) => (
                    <div key={update?.id}>
                        <NewsCard Updates={update} />
                        
                        
                    </div>
                    
                ))}
                
            </div>
        </div>
    );
}
