'use client';
import { useSearchStore } from '@/store/useSearchStore'; // Import useSearchStore

export default function ApplyVoucher() {
  const { selectedClass, passengers, selectedTrain } = useSearchStore(); // Use state from useSearchStore

  // Find the selected class details from the selectedTrain
  const selectedClassDetails = selectedTrain?.classes?.find(
    (cls) => cls.type === selectedClass
  );

  const calculateTotalFare = () => {
    if (!selectedClassDetails) {
      return 0; // Return 0 if selectedClassDetails is undefined
    }
    const adultFare =
      parseInt(selectedClassDetails.priceAdult.replace(/₦|,/g, ''), 10) *
      passengers.filter((p) => p.type === 'Adult').length;
    const childFare =
      parseInt(selectedClassDetails.priceChild.replace(/₦|,/g, ''), 10) *
      passengers.filter((p) => p.type === 'Child').length;
    const convenienceFee = 400; // Fixed convenience fee
    return adultFare + childFare + convenienceFee;
  };

  const totalFare = calculateTotalFare();

  const numAdults = passengers.filter((p) => p.type === 'Adult').length;
  const numChildren = passengers.filter((p) => p.type === 'Child').length;

  return (
    <div className=" border-[0.82px] lg:border-[1px] border-[#E2E2E2] w-full lg:w-[508px] xl:w-[408px] lg:rounded-[0.975rem] px-[1.333rem] xl:px-[18.33px] py-[29.3px] lg:py-[35.6px]">
     
      <div className="">
        <div className="flex flex-col gap-[1.283rem] lg:gap-[25px] mb-6">
          <div>
          <h1 className="text-[#263238] text-lg font-bold lg:text-[1.5rem] xl:text-[1.819rem]">
             Apply Voucher
             </h1>
         </div>
          <div className="flex justify-between gap-[0.616rem]">
           <button className="w-full bg-white border-[0.103rem] lg:border-[0.125rem] rounded-[0.411rem] lg:rounded-[0.5rem] border-[#D5D4D4]  text-[#848484] text-sm px-[0.813rem] py-[0.625rem]  ">
              Enter Voucher
             </button>            <button className="w-full bg-[#18A532] text-white px-[0.813rem]  py-[1rem] text-sm rounded-[0.411rem] lg:rounded-[0.5rem]">
              Apply
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-[1.283rem] lg:gap-[25px]">
          <div>
            <h1 className="text-[#263238] text-lg font-bold lg:text-[1.5rem] xl:text-[1.819rem]">
              Price Summary
            </h1>
          </div>
        </div>

        <div className="mt-[20px] xl:mt-[38px] mb-[20px] xl:mb-[38px] border-b-[1px] border-[#E5E5E5]"></div>

        <div>
          <div className="text-[#353535]">
            <div className="space-y-[7px] lg:space-y-[25px]">
              {numAdults > 0 && (
                <div className="flex justify-between text-[15px] xl:text-[1.625rem]">
                  <h1>Adult X {numAdults}</h1>
                  <h2>
                    ₦
                    {selectedClassDetails
                      ? parseInt(
                          selectedClassDetails.priceAdult.replace(/₦|,/g, ''),
                          10
                        ) * numAdults
                      : 0}
                  </h2>
                </div>
              )}
              {numChildren > 0 && (
                <div className="flex justify-between text-[15px] xl:text-[1.625rem]">
                  <h1>Child X {numChildren}</h1>
                  <h2>
                    ₦
                    {selectedClassDetails
                      ? parseInt(
                          selectedClassDetails.priceChild.replace(/₦|,/g, ''),
                          10
                        ) * numChildren
                      : 0}
                  </h2>
                </div>
              )}
              <div className="flex justify-between text-[16px] xl:text-[1.5rem] font-semibold">
                <h1>Convenience Fee</h1>
                <h2>₦400</h2>
              </div>
            </div>
          </div>
          <div className="flex justify-between text-lg xl:text-[1.75rem] pt-[17px] lg:pt-[36px] text-[#353535] font-bold">
            <h1>Total Fare</h1>
            <h2>₦{totalFare}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}