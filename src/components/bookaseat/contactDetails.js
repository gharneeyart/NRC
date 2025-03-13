import Link from "next/link";

export default function ContactDetails() {
    return(
        <div>
            <h1 className="text-2xl font-bold mb-7" >Contact Details</h1>
            <div className="lg:flex gap-12 w-full mb-7">
            <div className="lg:w-[30%] w-full">
            <label className="font-medium md:text-lg text-base 2xl:text-lg lg:text-lg">Email Address</label>
            <input type="email" className="border px-5 py-3 rounded-lg mt-3 mb-3 lg:mb-0 w-full h-12 hover:bg-[#D5D4D4] outline-none placeholder-[#848484]" placeholder="judebellingham09@gmail.com" />
          </div>
  
          {/* Phone Number */}
          <div className="lg:w-[30%] w-full">
            <label className="font-medium md:text-lg text-base 2xl:text-lg lg:text-lg">Phone Number</label>
            <input type="tel" className="border px-5 py-3 rounded-lg mt-3 mb-3 lg:mb-0 w-full h-12 hover:bg-[#D5D4D4] hover:border-gray-800 outline-none placeholder-[#848484]" placeholder="08123456790" />
          </div>
            </div>
            <hr className="mb-8"/>
            <div className="lg:flex gap-12 w-full ">
                <Link href='/paymentpart' className="bg-[#18A532] text-white lg:w-[30%] w-full rounded-lg py-3 mb-5 lg:mb-0 placeholder-[#263238] text-center">Proceed</Link>
                <button className="border border-[#18A532] text-[#18A532] lg:w-[30%] w-full rounded-lg py-3 placeholder-[#263238]"> Cancel</button>
            </div>
            
        </div>
    )
}