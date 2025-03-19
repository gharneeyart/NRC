'use client'
import { useSearchStore } from "@/store/useSearchStore";
import SearchTrain from "@/components/reusables/search";
import Class from "@/components/transport/class";
import Hours from "@/components/transport/hours";

export default function Trip() {
    // Retrieve the persisted search state
    const { from, to } = useSearchStore();

    return (
        <div className="space-y-11 mt-6">
            <SearchTrain
                w="w-[90%]"
                bg="bg-[#006B14]"
                gap="gap-8"
                btnBg="bg-[#FFFFFF]"
                inputPy="py-2"
                inputPadding="py-1.5"
                inputBg="bg-[#FFFFFF36]"
                inputBorder="border-2 border-[#FFFFFF61]"
                inputText="text-[#FFFFFF]"
                btnText="text-[#006B14]"
                inputW="w-full lg:w-[25%] xl:w-[25%]"
                btnWidth="w-full lg:w-[25%] xl:w-[20%]"
                py="pt-6 pb-6 lg:pt-8 lg:pb-12 xl:pt-10 xl:pb-14"
            />
            <div className="w-[335px] md:w-[81%] lg:w-11/12 container mx-auto">
                <div className="font-semibold text-[16px] md:text-[20px] px-[39px] xl:text-[29px] text-center bg-[#E2F5E5] py-6 rounded-t-md">
                    <h1>Lagos - Ibadan | Morning Train | Train No - LL1</h1>
                </div>
                <div className="lg:px-11 shadow-md rounded-b-md">
                    <div>
                        <Hours/>
                    </div>
                    <div className="border-b"></div>
                    <Class/>
                </div>
            </div>
            <div className="mt-4 text-center">
                <p>Search criteria: From: <strong>{from}</strong> | To: <strong>{to}</strong></p>
            </div>
        </div>
    );
} 