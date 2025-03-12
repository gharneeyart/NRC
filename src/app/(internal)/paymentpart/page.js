import ApplyVoucher from "@/components/details/applyVoucher"
import ContactDetail from "@/components/details/contactDetails"
import PassengerDetails from "@/components/details/passengerDetails"
import UserAgreement from "@/components/details/userAgreement"
import Hours from "@/components/transport/hours"
export default function Payment() {
  return (
    <div className="container w-11/12 mx-auto text-[#263238] rounded-[1.063rem] pb-[76px]">
      <div className="bg-[#E2F5E5] py-2 text-center rounded-t-lg">
          <h1 className="text-[16px] md:text-[1.4rem] xl:text-[1.819rem] font-bold">Lagos - Ibadan | Morning Train | Train No - LL1</h1>
      </div>
      <Hours/>
      <div className="container w-[95%] mx-auto mt-[2.875rem] lg:mt-[5.221rem] flex flex-col md:flex-row md:gap-[2rem] lg:flex-row lg:gap-[5.462rem]">
        <div className="w-full mb-[51.01px] md:mb-0">
          <PassengerDetails/>
          <ContactDetail/>
        </div>
        <ApplyVoucher/>
      </div>
      <UserAgreement/>
    </div>
  )
}