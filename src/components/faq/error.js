import Image from "next/image"
import NotFound from '/public/images/Group 26795.png'
// import Link from "next/link"


export default function Answer(){
  
    return(
        <div className="flex flex-col gap-8 lg:gap-14 items-center py-14 px-6 lg:px-0">
        <div>
        <Image src={NotFound} alt=""/>
        </div>
         <div className="text-center space-y-3 lg:space-y-8">
            <h1 className="font-bold py-2 text-2xl md:text-3xl lg:text-5xl">Not Found</h1>
         {/* <span className="flex flex-col lg:flex-row lg:gap-2 text-[16px] lg:text-3xl  ">
         <h2 className="font-medium">Can’t find the answer you are looking for?</h2>
         <Link className="text-[#006B14] font-semibold" href="/contact">Send us a message</Link>
         </span> */}
         </div>

        </div>
    )
}