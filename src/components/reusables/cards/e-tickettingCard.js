'use client'
import Image from 'next/image';
import eTicket from '../../../images/Frame 40990 (1).svg'
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
export default function Ticket() {
  const { auth } = useAuth(); // Get auth status from your context
  const router = useRouter();
  const handleClick = ()=> {
    if (!auth?.user) {
      
      router.push('/auth/login');
      // Alternatively, you could use:
      // router.push('/login?redirect=/ticket');
      // to redirect back after login
    }else{
      router.push('/ticket')
    }
    // If authenticated, the Link will handle navigation normally
  };
  return (
    <div className="w-full relative">
      <Image
        className="w-full h-full rounded-[0.432rem] lg:rounded-[0.77rem]"
        src={eTicket}
        width={100}
        height={100}
        alt="E-ticketing"
      />

      <div className="px-[1.043rem] md:px-[1.8rem] xl:px-[1.861rem]  space-y-[0.334rem] md:space-y-[3rem] lg:space-y-[1.5rem] xl:space-y-[2.759rem] text-white absolute top-[2.087rem] md:top-[3rem] lg:top-[2rem] xl:top-[3.722rem]">
        <div className="space-y-[0.245rem] xl:space-y-[0.642rem] ">
          <h1 className="text-[1.125rem] font-bold md:text-[2.5rem] lg:text-[1.5rem] xl:text-[2.053rem]">
            Try E-Ticketing
          </h1>
          <p className="text-[0.75rem]  md:text-[1.5rem] lg:text-[1rem] xl:text-[1.283rem]">
            A more convenient way to get <br></br>your ticket
          </p>
        </div>

        <div className="">
          <button className="py-2 px-4 rounded-[0.449rem] bg-white text-[#263238]" onClick={handleClick}>
            Know More
          </button>
        </div>
      </div>
    </div>
  );
}
