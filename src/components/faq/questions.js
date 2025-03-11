"use client"
import { Data } from "@/db";
import { useState } from "react";
import { FiPlusCircle, FiMinusCircle } from "react-icons/fi";

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="flex flex-col md:px-10 lg:px-20">
        {Data.map((faq, index) => (
            <div key={index} onClick={() => toggleAccordion(index)} className="cursor-pointer p-6">
                <div className="flex justify-between  items-center   ">
                    <h2 className="text-[15px] md:text-[18px] font-semibold w-[260px] md:w-[600px] ">{faq.question}</h2>
                    {openIndex === index ? <FiMinusCircle className="lg:text-[26px] text-[20px] "/> : <FiPlusCircle className="lg:text-[26px] text-[20px]"/>}
                </div>
                {openIndex === index && (
                    <p dangerouslySetInnerHTML={{ __html: faq.answer }} className="mt-2 text-[#263238] text-[12px] md:text-[16px]"></p>
                )}
            </div>
        ))}
    </div>
    
    );
}
