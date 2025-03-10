import Image from "next/image"
export default function ClassCard({myBookings}) {
    return(
        <div className="xl:w-[360px] w-[260px] md:w-[260px] mx-auto  ">
            <div className=" text-center flex flex-col gap-[16px]  rounded-xl shadow border px-6 py-8  " >
               <div className=" flex flex-col items-center">
               <Image src={myBookings?.image} alt={myBookings?.class} />
               </div>
                <div className="flex flex-col gap-[10px]">
                <h2 className="font-semibold text-[18px] xl:text-[26px]">{myBookings?.class}</h2>
                <p className="font-medium text-[15px]  xl:text-[22px]"> {myBookings?.price}</p>
                <p className="font-medium  text-[15px] xl:text-[22px] text-[#767676]">{myBookings?.reserves}</p>
                </div>
                <button className="py-2  xl:w-full rounded-md border  border-[#18A532] text-[#18A532]">Book Now</button>
            </div>
        </div>
    )
}