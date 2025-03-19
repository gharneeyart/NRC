import Image from 'next/image';
import Phone from '../../images/Frame 1171280031.svg';
import Email from '../../images/Frame 1171280033.png';
import Insta from '../../images/Frame 1171280032.png';
import Address from '../../images/Frame 1171280034.png';
import Twitter from '../../images/Vector (1).svg';
import Gram from '../../images/Vector (2).svg';
import In from '../../images/Frame 1171275662.svg';
import Facebook from '../../images/Vector (3).svg';

export default function Get() {
  return (
    <div className="bg-[#F2FAF4]  rounded-xl px-2 md:px-6 py-4  ">
      <div className=" flex flex-col mt-[16px]  lg:p-0 ">
        <div className="flex flex-col gap-[40px] p-2 w-full">
          <div className="w-full">
            <h1 className="text-3xl lg:text-4xl font-bold">Get In Touch</h1>
            <p className="text-[14px] font-normal">
              Fill up the form and our team will get back to you within 24
              hours.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 ">
            <div className="flex gap-2 md:gap-4 items-center ">
              <div>
                <Image className="w-[30px]" src={Phone} alt="Phone" />
              </div>
              <div>
                <h3 className="md:text-[14px] text-[10px]">Phone</h3>
                <p className="md:text-[14px] text-[10px]">07074964453</p>
              </div>
            </div>
            <div className="flex gap-2 md:gap-4 items-center">
              <div>
                <Image className="w-[30px]" src={Email} alt="Phone" />
              </div>
              <div className="flex flex-col">
                <h3 className="md:text-[14px] text-[10px]">Email</h3>
                <p className="md:text-[14px] text-[10px]">info@gsds.com.ng</p>
              </div>
            </div>
            <div className="flex gap-2 md:gap-4 items-center">
              <div>
                <Image className="w-[30px]" src={Insta} alt="Phone" />
              </div>
              <div>
                <h3 className="md:text-[14px] text-[10px]">Instagram</h3>
                <p className="md:text-[14px] text-[10px]">info_nrc</p>
              </div>
            </div>
            <div className="flex gap-2 md:gap-4 items-center">
              <div>
                <Image className="w-[30px]" src={Address} alt="Phone" />
              </div>
              <div>
                <h3 className="md:text-[14px] text-[10px] ">Address</h3>
                <p className="md:text-[14px] text-[10px] ">Lagos, Nigeria</p>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-[20px]" />
        <div className="flex gap-4 p-2 ">
          <span>
            <Image src={Twitter} width={20} alt="Phone" />
          </span>
          <span>
            <Image src={Gram} width={20} alt="Phone" />
          </span>
          <span>
            <Image src={In} width={20} alt="Phone" />
          </span>
          <span>
            <Image src={Facebook} width={20} alt="Phone" />
          </span>
        </div>
      </div>
    </div>
  );
}
