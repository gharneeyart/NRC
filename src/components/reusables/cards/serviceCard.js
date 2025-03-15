import Image from 'next/image'
import { Discover } from '@/db'
export default function ServiceCard() {
    return(
        <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center gap-6 xl:gap-8 px-7 md:px-0'>
         {Discover.map((service)=>(
            <div className='bg-white lg:rounded-md shadow-sm px-3 xl:px-5 py-8 xl:py-12 flex flex-col items-center ' key={service.id}>
                <Image className='py-2' src={service.image} alt={service.title} width={50} height={50}/>
                <h2 className='text-xl xl:text-2xl font-semibold '>{service.title}</h2>
                <p className='lg:text-base xl:text-[17px] font-medium px-4 text-center text-[#4E4E4E] py-4'>{service.description}</p>
            </div>
         ))}
        </div>
    )
}