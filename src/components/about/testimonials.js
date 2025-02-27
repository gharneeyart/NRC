import { Testimonials } from '@/db'
import TestimonialCard from '../reusables/cards/testimonialCard'

export default function Testimonial() {
    return(
        <div className='my-12  mx-auto flex flex-col gap-[58.54px] w-[329.86px] lg:w-[1236px]  lg:h-[512px]'>
        <div className='font-sans text-center lg:w-[674px] mx-auto w-[329px]  '>
        <h1 className=' lg:text-[48.84px] text-[28px] font-semibold'>Testimonials</h1>
        <p className='lg:text-[20.66px] text-[14px] font-medium text-[#4E4E4E]'>See what travelers across Nigeria have to say about their experience with NRC Train Booking.</p>
        </div>
            <div className='flex flex-col lg:flex-row gap-[42.98px] lg:h-[297.3px] w-[333.06px] lg:w-[1236.39px] mx-auto '>
                {Testimonials.map((testi)=>(
                    <div key={testi?.id}>
                        <TestimonialCard myTesti={testi}/>
                    </div>
                ))}
            
            </div>
        </div>
    )
}
