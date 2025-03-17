import Image from 'next/image';
import fram1 from '/public/images/Frame 41010 (1).svg';
import fram2 from '/public/images/qr-code-svgrepo-com (2) 1.svg';
import fram3 from '/public/icons/ic_baseline-apple.svg';
import fram4 from '/public/icons/mage_playstore.svg';

export default function Companion() {
  return (
    <div className="container w-11/12 h-full mx-auto mt-[4.279rem] mb-[3.984rem] lg:mt-[4.042rem]  lg:mb-[3.5rem] relative">
      <div>
        <Image
          className="hidden lg:block w-full"
          src={fram1}
          alt="companion-frame"
        />
      </div>
      <div className="container bg-[#006B14] rounded-[0.627rem] lg:rounded-none lg:bg-inherit lg:px-[2.8rem] xl:px-[3.223rem] 2xl:px-[5rem]  text-white  ">
        <div className="w-11/12 lg:w-[34rem] xl:w-[37.358rem] mx-auto space-y-[1.16rem] md:space-y-[2rem] lg:space-y-4 xl:space-y-[2.313rem] 2xl:space-y-[4.5rem] py-[2.063rem] lg:py-[0.5rem] xl:pt-[3rem] 2xl:pt-[4.5rem] xl:pb-[2.75rem] lg:absolute lg:top-2">
          <h1 className="text-[20px] md:text-[2rem] text-center lg:text-[2.2rem] xl:text-[3rem] 2xl:text-[3.1rem] lg:text-start font-bold">
            Your Railway Companion, Anytime, Anywhere
          </h1>
          <div className="w-[14.829rem] md:w-3/5 lg:w-[28.5rem] xl:w-[29.563rem] mx-auto lg:mx-0 rounded-[0.533rem] lg:rounded-[1.063rem] border-[0.031rem] lg:border-[0.063rem] lg:py-[1.081rem] py-[0.543rem] px-[0.659rem] md:px-[1.5rem] lg:px-[1.313rem] gap-[0.87rem] lg:gap-[1.734rem] flex">
            <Image
              className="w-[2.584rem] h-[2.584rem] md:w-auto md:h-auto lg:w-[5.151rem] lg:h-[5.151rem]"
              src="/images/qr-code-svgrepo-com (2) 1.svg"
              width={100}
              height={100}
              alt="scan-code"
            />

            <div className="flex flex-col text-[0.56rem] md:text-[14px] gap-[0.172rem] lg:gap-[0.332rem] justify-center lg:text-[1.125rem] ">
              <div className="">
                <h1>Scan to download the NRC app now.</h1>
                <h1>Available on playstore and appstore</h1>
              </div>
              <div className="flex">
                <Image
                  className="w-[0.537rem] h-[0.638rem] md:w-auto md:h-auto lg:w-[1.694rem] lg:h-[1.694rem]"
                  src={fram3}
                  width={100}
                  height={100}
                  alt="apple-support"
                />
                <Image
                  className="w-[0.537rem] h-[0.638rem] md:w-auto md:h-auto lg:w-[1.694rem] lg:h-[1.694rem]"
                  src={fram4}
                  width={100}
                  height={100}
                  alt="playstore-support"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
