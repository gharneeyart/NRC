export default function UserAgreement() {
  return (
    <div className="container w-full flex flex-col gap-[45.43px] lg:gap-[52px] mt-[36.57px] lg:mt-[31px] ">
        <div className="flex gap-[9px] text-[14px] lg:text-lg px-[0.703rem] lg:px-[1.878rem]">
          <div>
            <input className="accent-[#18A532]" type="checkbox"></input>
          </div>
          <div className="w-full lg:w-[500.47px] xl:w-[560.57px]">
            <h1>By proceeding with the booking, I confirm that I have read and accepted the Privaccy Policy, User Agreement and Terms of Service</h1>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-[23px] xl:gap-[49px] px-[0.703rem] lg:px-[1.878rem]">
          <button className="px-[94px] py-[22px] text-center rounded-[4.65px] bg-[#18A532] text-white lg:text-lg">Make Payment</button>
          <button className="px-[127px] py-[22px] text-center rounded-[4.65px] lg:text-lg text-[#18A532] border border-[#18A532]">Cancel</button>
        </div>
      </div>
  )
}