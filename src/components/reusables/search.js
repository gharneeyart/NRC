'use client'

import CustomDatePicker from "../home/date"

export default function SearchTrain({w, bg, btnBg, rounded, inputBg, gap, inputBorder, inputPy, inputPadding, inputText, btnText, content1, content2, content3, inputW, btnWidth, py}) {
    return(
        <div>
           <form className={`${w} ${bg} flex flex-col lg:flex-row ${gap} items-end ${py}  ${rounded} justify-between px-3 md:px-8 lg:px-10 mx-auto shadow-xl container`}>
            <div className="flex flex-col gap-1 w-full lg:w-[25%] xl:w-[30%]">
                <label htmlFor="from">{content1}</label>
               <select className={`${inputBg} ${inputBorder} ${inputText} ${inputPy} outline-none  rounded-md px-2`}>
                <option value="">Select Originating Station</option>
                <option value="lagos">Mobolaji Johnson Station Ebute Metta</option>
               </select>
            </div>
            <div className="flex flex-col gap-1 w-full lg:w-[25%]  xl:w-[30%]">
                <label htmlFor="to">{content2}</label>
               <select className={`${inputBg} ${inputBorder} ${inputText} ${inputPy} outline-none  rounded-md px-2`}>
                <option value="">Select Destination Station</option>
                <option value="ibadan">Professor Yemi Osibanjo Station Kajola</option>
               </select>
            </div>
            <div className={`flex flex-col gap-1 ${inputW}`}>
                <label htmlFor="date">{content3}</label>
                <input type="date" className={`${inputBg} ${inputBorder} ${inputText} ${inputPadding} outline-none rounded-md px-2`} placeholder="Select Date"/> 
            </div>    
            <button className={`${btnBg} ${btnText} py-2.5 rounded-sm text-[14px] ${btnWidth} font-medium`}>Find my Train</button>
           </form>
        </div>
    )
    
    // bg-[#18A532]
    // border-[#D5D4D4]
    // text-[#9C9C9C]
    // rounded-xl lg:rounded-md
    // w-full lg:w-[25%] xl:w-[20%]
    // w-full lg:w-[25%]  xl:w-[25%]  --input
    // pt-6 pb-6 lg:pt-8 lg:pb-12 xl:pt-10 xl:pb-14


}