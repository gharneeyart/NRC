'use client'
import Image from "next/image"
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import { useState } from "react";

export default function Nav() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        if (window.innerWidth < 1024) {
            setMenuOpen(!menuOpen);
        }
    }

    return (
        <div className="w-full   bg-white py-[2.49rem]">
            <div className="w-11/12 container mx-auto flex items-center justify-between">
            <div>
                <Image className="w-[8.893rem] h-[3.344rem]" src="/icons/image 3.svg" alt="NRC-logo" width={100} height={100} priority={true} />
            </div>

            <div className="lg:hidden text-2xl  px-4 cursor-pointer" onClick={toggleMenu}>
                {menuOpen ? <IoCloseOutline /> : <RxHamburgerMenu className="text-[#0C4C51]"/>}
            </div>

            <div className={`lg:static  text-white text-[18.6px] flex flex-col   gap-[3.375rem] top-24 rounded-sm lg:flex  ${
  menuOpen ? 'w-full block opacity-100 bg-white right-0 p-8 ' : 'hidden opacity-0 top-[100%] py-1'
}  lg:block absolute lg:opacity-100 lg:flex-row lg:w-auto  justify-between  font-semibold  z-50   xl:gap-[10rem] `}>
                <div className="flex flex-col lg:flex-row items-center gap-[1.625rem] xl:gap-[2.2rem] text-[18.6px] text-[#263238] lg:text-[#01320A] font-sans">
                    <h1>Home</h1>
                    <h1>About</h1>
                    <h1 className="">Time Tables</h1>
                    <h1>FAQs</h1>
                    <h1 className="">Contact Us</h1>
                </div>

                <div className="flex flex-col  gap-[1.75rem] lg:flex-row lg:gap-[2.4rem]">
                    <button className="border border-[#18A532] text-[#18A532] py-2 px-6 rounded-md">Register</button>
                    <button className="text-white bg-[#18A532] py-2 px-6 rounded-md">Sign in</button>
                </div>
            </div>
            </div>
        </div>
    )
}