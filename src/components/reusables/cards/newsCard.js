import Image from "next/image";
import { FaCalendarAlt } from "react-icons/fa";
import { GoClock } from "react-icons/go";
export default function NewsCard({ Updates }) {
    return (
        <div className="">
            <div className="bg-white rounded-lg w-[277px] md:w-[295px] xl:w-[408px] 2xl:w-[458px]">
                <Image 
                    src={Updates?.image} 
                    
                    
                    alt={Updates?.name}   
                    className="w-full h-[179px] md:h-[248px] object-cover rounded-lg "
                />
                <div className="pt-4 space-y-4">
                    <p className="font-bold text-xl xl:text-2xl  ">{Updates?.name}</p>
                    <p className="text-sm text-[#4E4E4E]  xl:text-xl  font-medium">{Updates?.description}</p>
                    <div className="flex gap-4 font-medium">
                    <div className="flex gap-1 text-[#4E4E4E]">
                    <FaCalendarAlt className="mt-1 text-[#4E4E4E]"/>
                    <p>02 Jan, 2025</p>
                    </div>
                    <div className="flex gap-1 text-[#4E4E4E]">
                    <GoClock className="mt-1 text-[#4E4E4E]"/>
                    1 min read
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}
