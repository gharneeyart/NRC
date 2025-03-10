import Class from "@/components/transport/class";
import Hours from "@/components/transport/hours";

export default function Trip() {
    return(
        <div className="w-[335px] md:w-[81%] lg:w-11/12 container mx-auto  ">
            <div className="font-semibold text-[16px] md:text-[20px] px-[39px] xl:text-[29px] text-center bg-[#E2F5E5] py-6 rounded-t-md">
            <h1 className=" ">Lagos - Ibadan | Morning Train | Train No - LL1</h1>
            </div>
           <div className="lg:px-11  shadow-md rounded-b-md">
           <div className="">
           <Hours/>
           </div>
           <div className="border-b "></div>
           <Class/>
           </div>
        </div>
    )
} 