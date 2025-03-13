import Image from "next/image"
export default function ExploreCard({myExp}) {
    return(
        <div className="relative w-[284px] h-[328px] lg:w-[287px] xl:w-[377px] xl:h-[436px]">
            <div className="">
            <Image src={myExp?.image} alt={myExp?.location} className="w-full h-full object-cover"/>
            </div>
            <div className="absolute bottom-5 left-5 text-white">
            <h2>{myExp?.location}</h2>
            <p>{myExp?.destination}</p>
            </div>
        </div>
    )
}
