'use client';
import Image from 'next/image';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoCloseOutline } from 'react-icons/io5';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { RiArrowDropDownLine } from 'react-icons/ri';
import Logo from '../icons/image 3.svg';
import { useAuth } from '@/context/AuthContext';
import Marquee from '@/components/home/marquee';



export default function Nav() {
  const { auth, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  const closeMenubar = () => {
    setMenuOpen(false);
  };

  const openMenubar = () => {
    if (window.innerWidth <= 1024) {
      // Check if the screen width is less than 1024px (mobile devices)
      setMenuOpen(!menuOpen);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        closeMenubar();
      }
    };

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  const [dropOpen, setDropOpenMenu] = useState(false);
  const openMenu = () => {
    setDropOpenMenu(!dropOpen);
  };
  const closeMenu = () => {
    setDropOpenMenu(false);
  };

  useEffect(() => {
    const clickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    if (dropOpen) {
      document.addEventListener('mousedown', clickOutside);
    } else {
      document.removeEventListener('mousedown', clickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', clickOutside);
    };
  }, [dropOpen]);

  const getInitials = (firstName, lastName) => {
    if (!firstName || !lastName) return '';
    return `${firstName.charAt(0)}${lastName.charAt(0)}`;
  };

  return (
   
      <div className='fixed left-0 right-0 z-50'>
        <Marquee/>
        <div className="w-full bg-white py-[2.49rem]  border border-[#D8D8D8]">
      <div className="w-11/12 container mx-auto flex items-center justify-between">
        <Link href="/">
          <Image
            className="w-[8.893rem] h-[3.344rem]"
            src={Logo}
            alt="NRC-logo"
            width={100}
            height={100}
            priority={true}
          />
        </Link>

        <div
          className="lg:hidden text-2xl  px-4 cursor-pointer"
          onClick={openMenubar}
        >
          {menuOpen ? (
            <IoCloseOutline />
          ) : (
            <RxHamburgerMenu className="text-[#0C4C51]" />
          )}
        </div>

        <div
          className={`lg:static container text-white text-[18.6px] flex flex-col gap-[3.375rem] top-24 rounded-sm lg:flex ${
            menuOpen
              ? 'w-full block opacity-100 bg-white right-0 p-8 '
              : 'hidden opacity-0 top-[100%] py-1'
          }  lg:block absolute lg:opacity-100 lg:flex-row lg:w-auto justify-between  font-semibold h-screen lg:h-full  z-50 lg:gap-[3rem]  xl:gap-[12rem] 2xl:gap-[20rem]`}
        >
          <div
            className="flex flex-col lg:flex-row items-center gap-[1.625rem] xl:gap-[2.2rem] text-[18.6px] text-[#263238] lg:text-[#01320A] font-sans "
            ref={navRef}
          >
            <Link href="/">
              <h1 className="hover:text-[#006B14]">Home</h1>
            </Link>
            <Link href="/about">
              <h1 className="hover:text-[#006B14]">About</h1>
            </Link>
            <Link href="/timetables">
              <h1 className="hover:text-[#006B14]">Time Tables</h1>
            </Link>
            <Link href="/faq">
              <h1 className="hover:text-[#006B14]">FAQs</h1>
            </Link>
            <Link href="/contact">
              <h1 className="hover:text-[#006B14]">Contact Us</h1>
            </Link>

            {auth ? (
              <div className="w-[228px] bg-white mx-auto items-center justify-center relative block lg:hidden">
                <div className="flex gap-[8px] items-center">
                  <div className="h-[51px] w-[51px] flex items-center justify-center text-lg text-[#006B14] text-center rounded-full bg-[#F0F7F6]">
                    <h1>{getInitials(auth?.user?.firstName, auth?.user?.lastName)}</h1>
                  </div>
                  <div className="text-base text-[#3C3C3C]">
                    <h3>{`${auth?.user?.firstName} ${auth?.user?.lastName}`}</h3>
                  </div>
                  <div
                    className="text-[#4F4F4F] text-4xl cursor-pointer "
                    onClick={openMenu}
                  >
                    <RiArrowDropDownLine />
                  </div>
                </div>

              {dropOpen && (
                <div className="w-[166px] py-[4px] absolute top-14 right-0 bg-white rounded-[10px] text-[#111014] text-[16px] drop-shadow shadow-[#00000026] cursor-pointer">
                  <div>
                    <ul className="px-[10px] py-[10px] grid gap-[10px]">
                      <li className="hover:text-[#006B14] ">My Tickets</li>
                      <li className="hover:text-[#006B14]">Reset Password</li>
                      <li className="text-[#DB3E3E] hover:text-[#006B14]" onClick={logout}>
                        Log Out
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
             ) : (
              <div className="flex flex-col text-center gap-[1.75rem] lg:flex-row lg:gap-[2.4rem]  lg:hidden">
                <Link href="/auth/signup" className="border border-[#18A532] text-[#18A532] py-2 px-6 rounded-md">Register</Link>
                <Link href="/auth/login"><button className="w-full text-white bg-[#18A532] py-2 px-6 rounded-md">Sign in</button></Link>
              </div>
            )}
          </div>

          {auth ? (
            <div className="w-[218px] bg-white gap-[23px] mx-auto items-center justify-center relative hidden lg:block">
              <div className="flex gap-[8px] items-center">
                <div className="h-[51px] w-[51px] flex items-center justify-center text-lg text-[#006B14] text-center rounded-full bg-[#F0F7F6]">
                  <h1>{getInitials(auth?.user?.firstName, auth?.user?.lastName)}</h1>
                </div>
                <div className="text-base text-[#3C3C3C]">
                  <h3>{`${auth?.user?.firstName} ${auth?.user?.lastName}`}</h3>
                </div>
                <div
                  className="text-[#4F4F4F] text-4xl cursor-pointer "
                  onClick={openMenu}
                >
                  <RiArrowDropDownLine />
                </div>
              </div>


            {dropOpen && (
              <div className="w-[166px] py-[4px] absolute top-14 right-0 bg-white rounded-[10px] text-[#111014] text-[16px] drop-shadow shadow-[#00000026] cursor-pointer ">
                <div>
                  <ul className="px-[10px] py-[10px] grid gap-[10px]">
                    <li className="hover:text-[#006B14] ">My Tickets</li>
                    <li className="hover:text-[#006B14]">Reset Password</li>
                    <li className="text-[#DB3E3E] hover:text-[#006B14]" onClick={logout}>
                      Log Out
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
          ) : (
            <div className="flex flex-col lg:flex-row text-center gap-[1.75rem] lg:gap-[2.4rem] lg:block">
              <Link href="/auth/signup" className="border border-[#18A532] text-[#18A532] py-2 px-6 rounded-md">Register</Link>
              <Link href="/auth/login"><button className="w-full text-white bg-[#18A532] py-2 px-6 rounded-md">Sign in</button></Link>
            </div>
          )}
        </div>
      </div>
    </div>
      </div>
  
  );
}
