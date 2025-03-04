import Image from "next/image"
export default function MorningTrain() {
  return (
      <div className="w-[95%] items-center text-center lg:text-start mx-auto flex flex-col lg:flex-row lg:justify-between text-[#263238] gap-[2.125rem] mt-[1.188rem]">
        <div className="text-[#767676] text-[1.375rem]">
          <h1 className="text-[#263238] font-bold text-[2rem]">07:57</h1>
          <div>
          <p>Mobalaji Johnson Station</p>
          <p>Ebute Metta</p>
          </div>

          <p>28 - Jan - 2025</p>
        </div>

        <div className="justify-items-center space-y-[1.5rem] py-[1.594rem]">
          <div className="text-[#7D7D7D] flex gap-[1.5rem]">
            <Image src="/icons/Frame 1000003438@2x.svg" width={100} height={100} alt="line-icon"/>
            <h1 className="text-[#263238] text-[1.75rem] font-bold">0 hrs 24 mins</h1>
            <Image src="/icons/Frame 1000003439.svg" width={100} height={100} alt="line-icons"/>
          </div>
          <div>
            <button className="bg-[#FFF7E3] text-[#F4AC00] px-6 rounded-[1.625rem]">Business Class</button>
          </div>
        </div>

        <div className="text-[#767676] text-[1.375rem]">
          <h1 className="text-[#263238] font-bold text-[2rem]">08:21</h1>
          <div>
          <p>Mobalaji Johnson Station</p>
          <p>Ebute Metta</p>
          </div>

          <p>28 - Jan - 2025</p>
        </div>
      </div>
  )
}