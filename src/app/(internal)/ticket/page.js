import Image from "next/image"
import Img1 from '/public/icons/Frame 1000003430 (1).svg'
import img from '/public/icons/Frame 1000003455 (1).svg'
import scan from '/public/images/Group.svg'
import Img from '/public/images/Frame 1000003438.svg'
import img1 from '/public/images/Frame 1000003439.svg'
export default function Ticket() {
    return(
        <div>
            <div className='w-full text-center bg-[#006B14] py-[23px] lg:py-[49px] text-white font-semibold text-[32px]'>
            <h1 className="">My Tickets</h1>
            </div>
            <div className='border shadow rounded-3xl my-[57px] w-[335px] md:w-[550px] lg:w-[972px] mx-auto'>
                <div className='border-b p-[17px] xl:p-[50px] flex flex-col gap-[26px] lg:gap-[79px]'>
                <div className='flex justify-between items-center'>
                  <div className='flex flex-row gap-[7px]'>
                  <Image className="w-[26px] md:w-[38px] lg:w-[67px]" src={Img1} alt='icon' />
                  <div>
                    <h1 className="font-semibold text-[11px] md:text-[18px] lg:text-[27px]">Lagos - Ibadan Morning Train </h1>
                    <div className='flex text-[#6D6D6D]'>
                        <p className="border-r border-r-[#6D6D6D] pr-2 text-[9px] md:text-[14px] lg:text-[23px]">Train No - LL1</p>
                        <p className="pl-2 text-[9px] md:text-[14px] lg:text-[23px]">PNR No: 5R2WSIX786</p>
                    </div>
                  </div>
                  </div>
                 <div className=''>
                 <button className="rounded-full text-[12px] py-[5px] md:py-[9px] px-[11px] md:px-[16px] lg:py-[12px] lg:px-[26px] text-[#18A532] font-medium bg-[#F2FFF4] border">Active</button>
                 </div>
                </div>
                <div className='flex flex-col lg:flex-row gap-4 items-center text-center lg:justify-between '>
                <div className="flex flex-col gap-[12px]">
                    <div className=" flex flex-col gap-[6px] lg:w-[282px]">
                        <h1 className="font-semibold text-[16px] md:text-[20px] xl:text-[28px]">07:57</h1>
                        <div className='flex flex-col'>
                        <p className="text-[#767676] text-[14px] md:text-[18px] xl:text-[22px]">Mobalaji Johnson Station</p>
                        <p className="text-[#767676] text-[14px] md:text-[18px] xl:text-[22px]">Ebute Metta</p>
                        </div>
                            </div>
                            <p className="text-[#767676] text-[14px] md:text-[18px] xl:text-[22px]">28 - Jan - 2025</p>
                            </div>
                            <div className=" hidden lg:block  flex flex-col items-center text-center justify-center ">
                                   <div className="flex flex-col gap-6 items-center text-center justify-center ">
                                   <p className="font-semibold text-[14px] md:text-[20px] xl:text-[28px]">0  hrs 24 mins</p>
                                        <Image src={img} alt="train" className=" w-[66px] md:w-[100px]  lg:w-[239px] " />
                                    </div>
                                        <p className='text-lg text-[#F4AC00] bg-[#F9F1DF] font-semibold py-[15px] rounded-full px-[32px]'>Business Class</p>
                                   </div>
                                   <div className=" lg:hidden flex flex-col gap-2 items-center text-center justify-center ">
                                          <div className="flex flex-row gap-6 items-center text-center justify-center ">
                                               <Image src={Img} alt="train" className="w-[66px] md:w-[100px]  xl:w-[144px] " />
                                              <p className="font-semibold text-[14px] md:text-[18px] xl:text-[28px]">0  hrs 24 mins</p>
                                               <Image src={img1} alt="train"  className="w-[66px] md:w-[100px] xl:w-[144px]" />
                                           </div>
                                               <p className='text-[10px] md:text-[13px] lg:text-lg text-[#F4AC00] bg-[#F9F1DF] font-semibold py-[7px] lg:py-[15px] rounded-full px-[16px] lg:px-[32px]'>Business Class</p>
                                          </div>
                                   <div  className="flex flex-col gap-[12px]">
        <div  className=" flex flex-col gap-[6px] lg:w-[282px]">
        <h1 className="font-semibold text-[16px] md:text-[20px] xl:text-[28px]">08:21</h1>
            <p className="text-[#767676] text-[14px] md:text-[18px] xl:text-[22px]">Mobalaji Johnson Station</p>
            <p className="text-[#767676] text-[14px] md:text-[18px] xl:text-[22px]">Ebute Metta</p>
        </div>
            <p className="text-[#767676] text-[14px] md:text-[18px] xl:text-[22px]">28 - Jan - 2025</p>
        </div>
                </div>
                </div>
                <div className='p-[17px] xl:p-[50px] flex items-center justify-between'>
                <div className=''>
                            <h1 className="font-semibold text-[12px] md:text-[18px] lg:text-[27px]">Passenger: Oluwaseun Adedayo</h1>
                            <div className='flex text-[9px] md:text-[14px] lg:text-[23px] text-[#6D6D6D]'>
                                <p className="border-r border-r-[#6D6D6D] pr-2">NIN: ****2034</p>
                                <p className="border-r border-r-[#6D6D6D] px-1 lg:px-2">Contact No: 08164567825</p>
                                <p className="md:pl-2 lg:pl-2">Type: Adult</p>
                            </div>
                            <div className='flex items-center text-[9px] md:text-[14px]'>
                                <p className="lg:text-[23px] text-[#6D6D6D] pr-2">Coach/Seat No: CO1/1A</p>
                                <p className="border-l border-l-black pl-2 lg:text-[20px]">Price: 6500</p>
                            </div>
                        </div>
                    <span className="">
                        <Image className='w-[34px] lg:w-[100px]' src={scan} alt="scan" />
                    </span>
                </div>
            </div>
        </div>
    )
}