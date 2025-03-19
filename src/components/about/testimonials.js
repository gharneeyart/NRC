'use client';
// import { Testimonials } from '@/db'
import TestimonialCard from '../reusables/cards/testimonialCard';

export default function Testimonial() {
  return (
    <div className="my-[88px] w-11/12 container mx-auto flex flex-col md:gap-[40px] gap-[58.54px] lg:h-[512px]">
      <div className="font-sans text-center md:w-[540px] lg:w-[674px] mx-auto w-[329px] h-[] ">
        <h1 className=" lg:text-[48.84px] text-[28px] font-semibold">
          Testimonials
        </h1>
        <p className="lg:text-[20.66px] text-[14px] md:text-[18px] font-medium text-[#4E4E4E]">
          See what travelers across Nigeria have to say about their experience
          with NRC Train Booking.
        </p>
      </div>

      <TestimonialCard />
    </div>
  );
}
