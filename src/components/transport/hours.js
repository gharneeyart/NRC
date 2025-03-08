import Image from "next/image"
import img from '/public/images/Frame 1000003438.svg'
import img1 from '/public/images/Frame 1000003439.svg'
export default function Hours() {
    return (
      <div className="mb-[46px] mt-[19px] ">
        <div className="flex flex-col lg:flex-row  justify-between text-center lg:text-left gap-8 ">
        <div className="flex flex-col gap-[12px]">
          <div className=" flex flex-col gap-[6px]">
          <h1 className="font-semibold text-[16px] md:text-[22px] xl:text-[28px]">07:57</h1>
            <p className="text-[#767676] text-[14px] md:text-[20px] xl:text-[22px]">Mobalaji Johnson Station</p>
            <p className="text-[#767676] text-[14px] md:text-[20px] xl:text-[22px]">Ebute Metta</p>
          </div>
            <p className="text-[#767676] text-[14px] md:text-[20px] xl:text-[22px]">28 - Jan - 2025</p>
        </div>
        <div className="flex flex-row gap-6 items-center text-center justify-center ">
            <Image src={img} alt="train" width={100} height={100} className="w-[66px] md:w-[100px]  xl:w-[144px] " />
            <p className="font-semibold text-[14px] md:text-[20px] xl:text-[28px]">0  hrs 24 mins</p>
            <Image src={img1} alt="train" width={100} height={100} className="w-[66px] md:w-[100px] xl:w-[144px]" />
        </div>
        <div  className="flex flex-col gap-[12px]">
        <div  className=" flex flex-col gap-[6px]">
        <h1 className="font-semibold text-[16px] md:text-[22px] xl:text-[28px]">08:21</h1>
            <p className="text-[#767676] text-[14px] md:text-[20px] xl:text-[22px]">Mobalaji Johnson Station</p>
            <p className="text-[#767676] text-[14px] md:text-[20px] xl:text-[22px]">Ebute Metta</p>
        </div>
            <p className="text-[#767676] text-[14px] md:text-[20px] xl:text-[22px]">28 - Jan - 2025</p>
        </div>
        </div>
      </div>
      
    )
    
}