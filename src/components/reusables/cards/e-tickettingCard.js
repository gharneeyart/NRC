import Image from "next/image"
export default function Ticket() {
  return (
    <div className="w-full relative">
            <Image className="w-full h-full rounded-[0.432rem] lg:rounded-[0.77rem]" src="/images/Frame 40990 (1).svg" width={100} height={100} alt="E-ticketing"/>

    
          <div className="px-[1.043rem] md:px-[1.8rem] xl:px-[1.861rem]  space-y-[0.334rem] md:space-y-[3rem] lg:space-y-[1.5rem] xl:space-y-[2.759rem] text-white absolute top-[2.087rem] md:top-[3rem] lg:top-[2rem] xl:top-[3.722rem]">
            <div className="space-y-[0.245rem] xl:space-y-[0.642rem] ">
              <h1 className="text-[1.125rem] md:text-[2.5rem] lg:text-[1.5rem] xl:text-[2.053rem]">Try E-Ticketing</h1>
              <h className="text-[0.75rem]  md:text-[1.5rem] lg:text-[1rem] xl:text-[1.283rem]">A more convenient way to get <br></br>your ticket
              </h>
            </div>
    
            <div className="">
              <button className="py-2 px-4 rounded-[0.449rem] bg-white text-[#263238]">Know More</button>
            </div>
          </div>
          </div>
  )
}