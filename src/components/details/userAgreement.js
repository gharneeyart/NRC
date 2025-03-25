'use client';
import { useState, useEffect } from 'react';
import Paystack from '../modal/paystackModal';
import { useSearchStore } from '@/store/useSearchStore';
import { useRouter } from 'next/navigation';

export default function UserAgreement() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { bookingData } = useSearchStore();
  const router = useRouter();
  useEffect(() => {
    if (!bookingData?._id) { // Check for _id specifically
      router.push('/bookaseat');
    }
  }, [bookingData, router]);

  return (
    <div className="container w-full flex flex-col gap-[45.43px] xl:gap-[52px] mt-[36.57px] lg:mt-[31px]">
      {/* Agreement Checkbox */}
      <div className="flex gap-[9px] text-[14px] lg:text-lg px-[0.703rem] lg:px-[1.878rem]">
        <div>
          <input className="accent-[#18A532]" type="checkbox" checked />
        </div>
        <div className="w-full lg:w-[490.47px] xl:w-[593.57px]">
          <h1>
            By proceeding with the booking, I confirm that I have read and
            accepted the Privacy Policy, User Agreement, and Terms of Service.
          </h1>
        </div>
      </div>

      {/* Buttons */}
      <div className="w-full lg:w-[575px] xl:w-[677px] flex flex-col lg:flex-row gap-[23px] lg:gap-[35px] xl:gap-[49px] px-[0.703rem] lg:px-[1.878rem]">
        {/* Make Payment Button */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="w-full lg:w-[314px] py-[22px] text-center rounded-[4.65px] bg-[#18A532] text-white lg:text-lg hover:bg-[#148C2A] transition-colors"
        >
          Make Payment
        </button>

        {/* Cancel Button */}
        <button className="w-full lg:w-[314px] py-[22px] text-center rounded-[4.65px] lg:text-lg text-[#18A532] border border-[#18A532] hover:bg-[#E2F5E5] transition-colors">
          Cancel
        </button>
      </div>

   
      {/* Modal */}
      {bookingData?._id && (
        <Paystack
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          bookingId={bookingData?._id}
        />
      )}
    </div>
  );
}