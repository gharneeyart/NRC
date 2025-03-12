'use client'
import { useState } from "react";
import { FiPlusCircle, FiMinusCircle } from "react-icons/fi";
import { Faq } from "@/db";
import Answer from "./error";
import Link from "next/link";

export default function FAQ({ searchTerm }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Filter the FAQ list based on the search term
  const filteredFaq = Faq.filter((faq) =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col  w-11/12 container mx-auto">
      {filteredFaq.length > 0 ? (
        filteredFaq.map((faq, index) => (
          <div key={faq.id} onClick={() => toggleAccordion(index)} className="cursor-pointer p-6">
            <div className="flex justify-between items-center">
              <h2 className="text-[15px] md:text-[18px] font-semibold w-[260px] md:w-[600px]">
                {faq.question}
              </h2>
              {openIndex === index ? (
                <FiMinusCircle className="lg:text-[26px] text-[20px]" />
              ) : (
                <FiPlusCircle className="lg:text-[26px] text-[20px]" />
              )}
            </div>
            {openIndex === index && (
              <p
                dangerouslySetInnerHTML={{ __html: faq.answer }}
                className="mt-2 text-[#263238] text-[12px] md:text-[16px]"
              ></p>
            )}
           
          </div>
        ))
      ) : (
        <Answer />
      )}
       <span className="flex flex-col lg:flex-row lg:gap-2 text-[16px] lg:text-3xl  justify-center">
         <h2 className="font-medium">Can’t find the answer you are looking for?</h2>
         <Link className="text-[#006B14] font-semibold" href="/contact">Send us a message</Link>
         </span>
    </div>
  );
}