'use client'
export default function Search() {
    return(
        <div>
           <form className="flex flex-col lg:flex-row gap-8 items-end pt-4 pb-8 rounded-xl lg:rounded-md justify-between px-3 md:px-8 lg:px-10 w-[90%] mx-auto bg-white shadow-xl container">
            <div className="flex flex-col gap-1 w-full lg:w-[30%]">
                <label htmlFor="from">From</label>
               <select className="py-2 outline-none border-2 border-[#D5D4D4] rounded-md text-[#9C9C9C] px-2">
                <option value="">Select Originating Station</option>
                <option value="lagos">Mobolaji Johnson Station Ebute Metta</option>
               </select>
            </div>
            <div className="flex flex-col gap-1 w-full lg:w-[30%]">
                <label htmlFor="to">To</label>
               <select className="py-2 outline-none border-2 border-[#D5D4D4] rounded-md text-[#9C9C9C] px-2">
                <option value="">Select Destination Station</option>
                <option value="ibadan">Professor Yemi Osibanjo Station Kajola</option>
               </select>
            </div>
            <div className="flex flex-col gap-1 w-full lg:w-[25%]">
                <label htmlFor="date">Date</label>
                <input type="date" className="py-1.5 outline-none border-2 border-[#D5D4D4] rounded-md text-[#9C9C9C] px-2" placeholder="Select Date"/> 
            </div>    
            <button className="bg-[#18A532] py-2.5 rounded-sm text-white text-[14px] w-full lg:w-[20%]">Find my Train</button>
           </form>
        </div>
    )
}