import Image from 'next/image'
import { Discover } from '@/db'
export default function ServiceCard() {
    return(
        <div className='flex flex-col lg:flex-row justify-center gap-8 '>
         {Discover.map((service)=>(
            <div className='bg-white lg:rounded-md shadow-sm px-3 py-6 flex flex-col items-center w-[220px]' key={service.id}>
                <Image className='py-2' src={service.image} alt={service.title} width={50} height={50}/>
                <h2 className='font-semibold '>{service.title}</h2>
                <p className='text-xs px-4 text-center text-[#4E4E4E] py-4'>{service.description}</p>
            </div>
         ))}
        </div>
    )
}