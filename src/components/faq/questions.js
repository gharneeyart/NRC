'use client';
import { useState } from 'react';
import { FiPlusCircle, FiMinusCircle } from 'react-icons/fi';
import { Faq } from '@/db';
import Answer from './error';
import Link from 'next/link';

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
    <div className="flex flex-col  w-11/12 container mx-auto pt-10">
      {filteredFaq.length > 0 ? (
        filteredFaq.map((faq, index) => (
          <div
            key={faq.id}
            onClick={() => toggleAccordion(index)}
            className="cursor-pointer p-6"
          >
            <div className="flex justify-between items-center">
              <h2 className="text-base md:text-xl lg:text-2xl font-medium w-[260px] md:w-[650px]">
                {faq.question}
              </h2>
              {openIndex === index ? (
                <FiMinusCircle className="text-base md:text-xl lg:text-2xl" />
              ) : (
                <FiPlusCircle className="text-base md:text-xl lg:text-2xl" />
              )}
            </div>
            {openIndex === index && (
              <p
                dangerouslySetInnerHTML={{ __html: faq.answer }}
                className="mt-3 text-[#263238] text-sm md:text-lg lg:text-xl lg:pr-20"
              ></p>
            )}
          </div>
        ))
      ) : (
        <Answer />
      )}
      <span className="flex flex-col lg:flex-row lg:gap-2 text-[16px] lg:text-3xl  text-center mx-auto">
        <h2 className="font-medium">
          Can’t find the answer you are looking for?
        </h2>
        <Link className="text-[#006B14] font-semibold" href="/contact">
          Send us a message
        </Link>
      </span>
    </div>
  );
}
