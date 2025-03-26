import Image from 'next/image';
import Link from 'next/link';
import Logo from '../icons/image 3.svg';
import Facebook from '../icons/Facebook (1).svg';
import Instagram from '../icons/Frame 1000003414.svg';
import Twitter from '../icons/Frame 1000003415.svg';

export default function Footer() {
  return (
    <div className="bg-[#F0F7F6]">
      <div className="w-11/12 container mx-auto flex flex-col lg:flex-row justify-items-center gap-[3.375rem] xl:gap-[4.313rem] justify-between items-center text-center lg:text-start lg:items-start py-[2.463rem]">
        <div className="space-y-[9px] justify-items-center lg:justify-items-start">
          <Link href="/">
            <Image
              className="w-[8.893rem] h-[3.344rem]"
              src={Logo}
              width={100}
              height={100}
              priority={true}
              alt="NRC-logo"
            />
          </Link>
          <p className="">E-Ticketing App : Lagos - Ibadan</p>
          <div className="flex flex-row pt-[13px] gap-[0.875rem]">
            <Image
              className="disabled:opacity-50 w-[1.875rem] h-[1.875rem]"
              src={Facebook}
              width={100}
              height={100}
              alt="Facebook-logo"
            />
            <Image
              className="disabled:opacity-50 w-[1.875rem] h-[1.875rem]"
              src={Instagram}
              width={100}
              height={100}
              alt="Instagram-logo"
            />
            <Image
              className="disabled:opacity-50 w-[1.875rem] h-[1.875rem]"
              src={Twitter}
              width={100}
              height={100}
              alt="Twitter-logo"
            />
          </div>
        </div>

        <div className="text-[#263238] space-y-[0.8rem]  ">
          <h1 className="font-bold text-[1.174rem]">Company</h1>
          <ul className="flex flex-col gap-3 text-[1.067rem]">
            <Link href="/about">
              <li className="">About</li>
            </Link>
            <Link href='/faq'>
            <li className="">FAQs</li>
            </Link>
            <Link href="/contact">
              <li className="">Contact</li>
            </Link>
            <Link href='' className='cursor-not-allowed' disabled>
            <li>Terms & Condition</li>
            </Link>
            <Link href='' className='cursor-not-allowed' disabled>
            <li>Privacy Policy</li>
            </Link>
           
          </ul>
        </div>

        <div className="text-[#263238] space-y-[0.8rem]">
          <h1 className="font-bold text-[1.174rem]">Tickets and timetables</h1>
          <ul className="flex flex-col gap-3 text-[1.067rem]">
            <Link href="/timetables">
              <li>Train timetables</li>
            </Link>
            <Link href='' className='cursor-not-allowed' disabled>
            <li>Live Departures & Arrivals</li>
            </Link>
            
          </ul>
        </div>

        <div className="text-[#263238] space-y-[0.8rem]">
          <h1 className="font-bold text-[1.174rem]">Lagos</h1>
          <ul className="flex flex-col gap-3 text-[1.067rem]">
          <Link href='' className='cursor-not-allowed' disabled>
          <li>Trains to Ebute Metta</li>
            </Link>
          <Link href='' className='cursor-not-allowed ' disabled>
          <li>Trains to Abeokuta</li>
            </Link>
            
            
          </ul>
        </div>

        <div className="text-[#263238] space-y-[0.8rem]">
          <h1 className="font-bold text-[1.174rem]">Ibadan</h1>
          <ul className="flex flex-col gap-3 text-[1.067rem]">
          <Link href='' className='cursor-not-allowed ' disabled>
          <li>Trains to Agege</li>
            </Link>
          <Link href='' className='cursor-not-allowed ' disabled>
          <li>Trains to Agbado</li>
            </Link>
          <Link href='' className='cursor-not-allowed ' disabled>
          <li>Trains to Omi-Adio</li>
            </Link>
            
            
            
          </ul>
        </div>
      </div>

      <div className="border-b  border-[#959B96]"></div>

      <div className="flex flex-col lg:flex-row gap-[1.375rem] items-center justify-between mt-6 text-[#263238] text-[14px] container w-11/12 mx-auto">
        <div className="lg:flex gap-4">
          <p>Copyright 2024, All Rights Reserved</p>
          <div className="hidden lg:block border-r border-[#848484] "></div>
          <p className="hidden lg:block">Copyright 2024, All Rights Reserved</p>
        </div>

        <div>
          <p>Designed by Michael Idioha</p>
        </div>
      </div>
    </div>
  );
}
