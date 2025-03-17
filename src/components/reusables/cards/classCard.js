'use client'
import Image from "next/image"
import Link from "next/link"
import { useSearchStore } from "@/store/useSearchStore"
export default function ClassCard({myBookings}) {
    const { setSelectedClass } = useSearchStore()

    const handleSelectClass = () => {
      // Set the selected class when the user clicks "Book Now"
      setSelectedClass(myBookings?.class)
    }
    return(
        <div className="xl:w-[360px] w-[260px] md:w-[260px] mx-auto  ">
            <div className=" text-center flex flex-col gap-[16px]  rounded-xl shadow border px-6 py-8  " >
               <div className=" flex flex-col items-center">
               <Image src={myBookings?.image} alt={myBookings?.class} />
               </div>
                <div className="flex flex-col gap-[10px]">
                <h2 className="font-semibold text-[17px] xl:text-[26px]">{myBookings?.class}</h2>
                <div className="flex gap-2 font-medium text-[14px]  xl:text-[22px] items-center">
                <p className="">Adult - {myBookings?.priceAdult}</p> |
                <p className="">Child - {myBookings?.priceChild}</p>
                </div>
                <p className="font-medium  text-[15px] xl:text-[22px] text-[#767676]">Reserved - {myBookings?.reserves}</p>
                </div>
                <Link 
                    href="/bookaseat" 
                    onClick={handleSelectClass}
                    className="py-2 xl:w-full rounded-md border border-[#18A532] text-[#18A532]"
                    >
                    Book Now
                </Link>
            </div>
        </div>
    )
}