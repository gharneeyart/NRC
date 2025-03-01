import Image from "next/image"
export default function Companion() {
  return (
    <div className="w-full relative ">
      <div className="w-[21rem] lg:w-11/12 xl:w-[77.563rem] mx-auto">
        <Image className="hidden lg:block w-[77.563rem] h-[24.688rem]" src="/images/Frame 41010 (1).svg"  width={100} height={100} priority={true} alt="companion-frame"/>

        <div className="rounded-[0.627rem] bg-[#006B14] lg:bg-inherit px-[1.125rem] lg:px-[3.223rem] absolute top-0 ">
        <div className="w-[18.75rem] px-[1.96rem] lg:px-0 py-[2.063rem] justify-self-center lg:justify-self-auto  lg:w-[37.358rem] lg:h-[8.125rem] text-white flex flex-col gap-[1.16rem] lg:gap-[2.313rem] lg:pt-[4.188rem] lg:pb-[2.75rem]">
          <div>
          <h1 className="lg:text-[2.5rem] text-[18px] text-center lg:text-start  font-bold">Your Railway Companion, Anytime, Anywhere</h1>
          </div>

          <div className="w-full lg:w-[29.563rem] lg:h-[7.313rem] rounded-[0.533rem] lg:rounded-[1.063rem] border-[0.031rem] lg:border-[0.063rem] lg:py-[1.081rem] py-[0.543rem] px-[0.659rem] lg:px-[1.313rem] gap-[0.87rem] lg:gap-[1.734rem] flex">
            <Image className="w-[2.584rem] h-[2.584rem] lg:w-[5.151rem] lg:h-[5.151rem]" src="/images/qr-code-svgrepo-com (2) 1.svg" width={100} height={100} alt="scan-code"/>
            <div className="flex flex-col text-[0.564rem] gap-[0.172rem] lg:gap-[0.332rem] justify-center lg:text-[1.125rem] ">
              <div>
                <h1>Scan to download the NRC app now.</h1>
                <h1>Available on playstore and appstore</h1>
              </div>
              <div className="flex">
                <Image className="w-[0.537rem] h-[0.638rem] lg:w-[1.694rem] lg:h-[1.694rem]" src="/icons/ic_baseline-apple.svg" width={100} height={100} alt="apple-support"/>
                <Image className="w-[0.537rem] h-[0.638rem] lg:w-[1.694rem] lg:h-[1.694rem]" src="/icons/mage_playstore.svg" width={100} height={100} alt="playstore-support"/>
              </div>
            </div>
          </div>
        </div>   
        
      </div>

      </div>
    </div>
  )
}