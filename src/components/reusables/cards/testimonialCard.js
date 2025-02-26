import Image from "next/image"
export default function TestimonialCard({myTesti}) {
    return(
        <div className=" rounded-xl flex flex-col  shadow-xl py-[23.26px] px-[23.98px] gap-[24px]">
            <div className="text-left text-[#5F5F60]">
            <p>{myTesti?.description}</p>
            </div>
           <div className="flex items-center font-sans gap-[15.21px]">
           <Image src={myTesti?.image} alt={myTesti?.name}/>
           <p className="text-[16.3px] font-semibold">{myTesti?.name}</p>
           </div>
        </div>
    )
}
