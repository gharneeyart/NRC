import Image from "next/image"
export default function Changes() {
    return(
        <div className="container w-11/12 flex flex-col lg:flex-row xl:gap-[3.016rem] mx-auto gap-[1.691rem]  mt-[14rem] lg:mt-[4.506rem]  ">
          <section className="relative">
            <Image className="w-[20.938rem] h-[10.505rem] lg:w-auto lg:h-full rounded-[0.432rem] lg:rounded-[0.77rem]" src="/images/Frame 40989 (1).svg" width={100} height={100} alt="train-times"/>
            <div className="xl:w-[27.605rem] flex flex-col gap-[1.547rem] lg:gap-[2.759rem] text-[#263238] absolute top-0 px-[1.043rem] lg:px-[1.861rem] pt-[2.087rem] lg:pt-[3.722rem]">
              <div className="space-y-[0.36rem] lg:space-y-[0.642rem]">
                <h1 className="text-[1.125rem] lg:text-[2.053rem] font-bold">Changes to Train Times</h1>
                <p className="text-[0.75rem] lg:text-[1.283rem] font-semibold">Check your routes before traveling</p>
              </div>
                <div className="text-[0.75rem] lg:text-[0.955rem] font-bold">
                  <button className="bg-white px-[1.188rem] lg:px-[1.524rem] py-[0.636rem] lg:py-[1.134rem] rounded-[0.252rem] lg:rounded-[0.449rem]">Know More</button>
                </div>
            </div>
            </section>

            <section className="relative">
                <Image className="w-[20.938rem] h-[10.505rem] lg:w-[37.346rem] lg:h-[18.737rem] rounded-[0.432rem] lg:rounded-[0.77rem]" src="/images/Frame 40990 (1).svg" width={100} height={100} alt="E-ticketing"/>

                <div className="w-[15.476rem] lg:w-[27.605rem]  flex flex-col gap-[0.245rem] lg:gap-[0.438rem] text-white absolute top-0 px-[1.043rem] lg:px-[1.861rem] pt-[2.087rem] lg:pt-[3.722rem]">
                    <div className="space-y-[0.36rem] lg:space-y-[0.642rem]">
                        <h1 className="text-[1.125rem] lg:text-[2.053rem] font-bold">Try E-Ticketing</h1>
                        <p className="text-[0.75rem] lg:text-[1.283rem] font-semibold">A more convenient way to get your ticket
                        </p>
                    </div>

                    <div className="text-[0.75rem] lg:text-[0.955rem] text-[#263238] font-bold">
                        <button className="bg-white px-[1.188rem] lg:px-[1.524rem] py-[0.636rem] lg:py-[1.134rem] rounded-[0.252rem] lg:rounded-[0.449rem]">Know More</button>
                    </div>
                </div>
            </section>
        </div>
    )
}