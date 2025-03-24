'use client';
import { useAuth } from "@/context/AuthContext";
import { useEffect } from "react";
import { useSearchStore } from "@/store/useSearchStore";

export default function ContactDetails() {
  const { auth } = useAuth();
  const { setContactDetails } = useSearchStore();

  // Update contactDetails in Zustand store when auth changes
  useEffect(() => {
    if (auth?.user) {
      setContactDetails({
        email: auth.user.email,
        phone: auth.user.phoneNumber,
      });
    }
  }, [auth, setContactDetails]);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-7">Contact Details</h1>
      <div className="lg:flex gap-12 w-full mb-7">
        {/* Email Address */}
        <div className="lg:w-[30%] w-full">
          <label className="font-medium md:text-lg text-base 2xl:text-lg lg:text-lg">
            Email Address
          </label>
          <div className="border px-5 py-3 rounded-lg mt-3 mb-3 lg:mb-0 w-full h-12 hover:bg-[#D5D4D4] outline-none placeholder-[#848484]">
            {auth?.user?.email}
          </div>
        </div>

        {/* Phone Number */}
        <div className="lg:w-[30%] w-full">
          <label className="font-medium md:text-lg text-base 2xl:text-lg lg:text-lg">
            Phone Number
          </label>
          <div className="border px-5 py-3 rounded-lg mt-3 mb-3 lg:mb-0 w-full h-12 hover:bg-[#D5D4D4] hover:border-gray-800 outline-none placeholder-[#848484]">
            {auth?.user?.phoneNumber}
          </div>
        </div>
      </div>
    </div>
  );
}