import PassengerDetails from "@/components/details/passengerDetails"
import MorningTrain from "@/components/reusables/morningTrain"
export default function Payment() {
  return (
    <div className="container w-11/12 mx-auto text-[#263238] rounded-[1.063rem]">
      <div className="bg-[#E2F5E5] py-2 text-center rounded-t-lg">
          <h1 className="text-[16px] xl:text-[1.819rem] font-bold">Lagos - Ibadan | Morning Train | Train No - LL1</h1>
      </div>
      <MorningTrain/>
      <PassengerDetails/>
    </div>
  )
}