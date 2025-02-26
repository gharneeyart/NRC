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
        <div className="flex gap-2 justify-between items-center px-[1.263rem] xl:px-[6.5rem] bg-white py-[2.49rem]">
            <div>
                <Image className="w-[8.893rem] h-[3.344rem]" src="/icons/image 3.png" alt="NRC-logo" width={100} height={100} priority={true} />
            </div>

            <div className="lg:hidden text-2xl justify-items-end px-4 cursor-pointer" onClick={toggleMenu}>
                {menuOpen ? <IoCloseOutline /> : <RxHamburgerMenu />}
            </div>

            <div className={`lg:static absolute  text-white text-[18.6px] flex flex-col lg:flex  left-[0.8rem] md:left-[0.5rem] md:w-full  gap-[3.375rem] top-28 rounded-sm  ${
  menuOpen ? 'block opacity-100 w-[350px] right-0  bg-white ' : 'hidden opacity-0 top-[100%] py-1'
} lg:block absolute lg:opacity-100 lg:flex-row lg:items-center lg:w-auto  font-semibold  z-50  lg:gap-[2.5rem] xl:gap-[10rem] 2xl:gap-[40rem] 2xl:font-bold`}>
                <div className="flex flex-col lg:flex-row items-center gap-[1.625rem] lg:gap-[2.2rem] 2xl:gap-[4rem] lg:text-[18.6px] text-[#263238] lg:text-[#01320A] font-sans">
                    <h1>Home</h1>
                    <h1>About</h1>
                    <h1 className="lg:w-[105px] mx-auto">Time Tables</h1>
                    <h1>FAQs</h1>
                    <h1 className="lg:w-[100px] mx-auto">Contact Us</h1>
                </div>

                <div className="flex flex-col w-full gap-[1.75rem] lg:flex-row lg:gap-[2.4rem]">
                    <button className="border border-[#18A532] text-[#18A532] py-2 px-6 rounded-md">Register</button>
                    <button className="text-white bg-[#18A532] py-2 px-6 rounded-md">Sign in</button>
                </div>
            </div>
        </div>
    )
}