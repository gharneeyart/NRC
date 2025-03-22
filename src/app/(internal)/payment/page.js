'use client';
import ApplyVoucher from '@/components/details/applyVoucher';
import ContactDetail from '@/components/details/contactDetails';
import PassengerDetails from '@/components/details/passengerDetails';
import UserAgreement from '@/components/details/userAgreement';
import Hours from '@/components/transport/hours';
import { useSearchStore } from '@/store/useSearchStore';
export default function Payment() {
  const { selectedTrain } = useSearchStore();
  return (
    <div className="container w-11/12 mx-auto text-[#263238] rounded-[1.063rem] pb-[76px] pt-48">
      <div className="bg-[#E2F5E5] py-2 text-center rounded-t-lg">
        <h1 className="text-[16px] md:text-[1.4rem] xl:text-[1.819rem] font-bold">
        {selectedTrain?.route} | {selectedTrain?.timeOfDay} |{' '}
        {selectedTrain?.trainNumber}
        </h1>
      </div>
      <Hours schedule={selectedTrain} />
      <div className="w-11/12 mx-auto my-[2.875rem] lg:my-[5.221rem] flex flex-col md:flex-row md:gap-[2rem] lg:flex-row lg:gap-[5.462rem]">
        <div className=" ">
          <PassengerDetails />
          <ContactDetail />
        </div>
        <ApplyVoucher />
      </div>
      <UserAgreement />
    </div>
  );
}
