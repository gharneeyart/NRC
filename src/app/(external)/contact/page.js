'use client';
import ResuableHero from '@/components/reusables/hero';
import Get from '@/components/contact/get';
import Form from '@/components/contact/form';
import dynamic from 'next/dynamic';

const Map = dynamic(() => import('@/components/contact/map'), { ssr: false });
export default function Contact() {
  return (
    <div>
      <div className="contact-hero ">
        <div className="container mx-auto ">
          <ResuableHero
            title="Contact Us"
            desc="Safe, comfortable, and reliable train services across the nation. Experience the future of Nigerian transportation, today."
          />
        </div>
      </div>
      <div className="lg:w-10/12  container my-8 grid grid-cols-1 lg:grid-cols-2 lg:mx-auto lg:my-10 gap-10  px-4 md:px-8 lg:px-0">
        <Get />
        <Form />
      </div>
      <Map />
    </div>
  );
}
