import Image from "next/image";
import { FaCalendarAlt } from "react-icons/fa";
import { GoClock } from "react-icons/go";
export default function NewsCard({ Updates }) {
    return (
        <div className="w-[95%] mx-auto mt-8 flex justify-center">
            <div className="bg-white rounded-lg">
                <Image 
                    src={Updates?.image} 
                    alt={Updates?.name} 
                    width={500} 
                    height={500} 
                    className="w-full h-55 object-cover rounded-lg "
                />
                <div className="p-4">
                    <p className="font-bold lg:text-2xl text-xl">{Updates?.name}</p>
                    <p className="text-sm text-[#4E4E4E] mt-2 lg:text-xl ">{Updates?.description}</p>
                    <div className="flex gap-4">
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
