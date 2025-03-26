// 'use client';
// import Image from 'next/image';
// import { RxHamburgerMenu } from 'react-icons/rx';
// import { IoCloseOutline } from 'react-icons/io5';
// import { useState, useEffect, useRef } from 'react';
// import Link from 'next/link';
// import { RiArrowDropDownLine } from 'react-icons/ri';
// import Logo from '../icons/image 3.svg';
// import { useAuth } from '@/context/AuthContext';
// import Marquee from '@/components/home/marquee';
// import { useRouter } from 'next/navigation';
// import LogoutModal from '@/components/modal/logOutModal'; // Import the Logout modal
// import ResetPasswordModal from '@/components/modal/changePasswordModal'; // Import the ResetPassword modal

// export default function Nav() {
//   const { auth, logout } = useAuth();
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [dropOpen, setDropOpenMenu] = useState(false);
//   const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
//   const [isResetPasswordModalOpen, setIsResetPasswordModalOpen] = useState(false);
//   const navRef = useRef(null);
//   const router = useRouter();

//   const closeMenubar = () => setMenuOpen(false);
//   const openMenubar = () => window.innerWidth <= 1024 && setMenuOpen(!menuOpen);
//   const openMenu = () => setDropOpenMenu(!dropOpen);
//   const closeMenu = () => setDropOpenMenu(false);

//   const handleClickOutside = (event) => {
//     if (navRef.current && !navRef.current.contains(event.target)) {
//       closeMenubar();
//       closeMenu();
//     }
//   };

//   useEffect(() => {
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, [menuOpen, dropOpen]);

//   const getInitials = (firstName, lastName) => (!firstName || !lastName ? '' : `${firstName.charAt(0)}${lastName.charAt(0)}`);

//   const handleLogout = () => {
//     logout();
//     router.push('/auth/login');
//   };

//   return (
//     <div className='fixed left-0 right-0 z-50'>
//       <Marquee />
//       <div className="w-full py-6 bg-white border border-[#D8D8D8]">
//         <div className="w-11/12 container mx-auto flex items-center justify-between">
//           <Link href="/"><Image className="w-[8.893rem] h-[3.344rem]" src={Logo} alt="NRC-logo" width={100} height={100} priority={true} /></Link>
//           <div className="lg:hidden text-2xl px-4 cursor-pointer" onClick={openMenubar}>
//             {menuOpen ? <IoCloseOutline /> : <RxHamburgerMenu className="text-[#0C4C51]" />}
//           </div>
//           <div className={`lg:static container text-white text-[18.6px] flex flex-col gap-[3.375rem] top-24 rounded-sm lg:flex ${menuOpen ? 'w-full block opacity-100 bg-white right-0 p-8' : 'hidden opacity-0 top-[100%] py-1'} lg:block absolute lg:opacity-100 lg:flex-row lg:w-auto justify-between font-semibold h-screen lg:h-full z-50 lg:gap-[3rem] xl:gap-[12rem] 2xl:gap-[20rem]`}>
//             <div className="flex flex-col lg:flex-row items-center gap-[1.625rem] xl:gap-[2rem] text-[18.6px] text-[#263238] lg:text-[#01320A] font-sans" ref={navRef}>
//               <Link href="/"><h1 className="hover:text-[#006B14]">Home</h1></Link>
//               <Link href="/about"><h1 className="hover:text-[#006B14]">About</h1></Link>
//               <Link href="/timetables"><h1 className="hover:text-[#006B14]">Time Tables</h1></Link>
//               <Link href="/faq"><h1 className="hover:text-[#006B14]">FAQs</h1></Link>
//               <Link href="/contact"><h1 className="hover:text-[#006B14]">Contact Us</h1></Link>
//               {auth.user != null ? (
//                 <div className="bg-white mx-auto items-center justify-center relative block lg:hidden">
//                   <div className="w-[250px] flex gap-[8px] items-center">
//                     <div className="h-[51px] w-[51px] flex items-center justify-center text-lg text-[#006B14] text-center rounded-full bg-[#F0F7F6]">
//                       <h1>{getInitials(auth?.user?.firstName, auth?.user?.lastName)}</h1>
//                     </div>
//                     <div className="text-base text-[#3C3C3C]"><h3>{`${auth?.user?.firstName} ${auth?.user?.lastName}`}</h3></div>
//                     <div className="text-[#4F4F4F] text-4xl cursor-pointer" onClick={openMenu}><RiArrowDropDownLine /></div>
//                   </div>
//                   {dropOpen && (
//                     <div className="w-[166px] py-[4px] absolute top-14 right-0 bg-white rounded-[10px] text-[#111014] text-[16px] drop-shadow shadow-[#00000026] cursor-pointer">
//                       <div><ul className="px-[10px] py-[10px] grid gap-[10px]">
//                         <li className="hover:text-[#006B14]">My Tickets</li>
//                         <li className="hover:text-[#006B14]" onClick={() => setIsResetPasswordModalOpen(true)}>Reset Password</li>
//                         <li className="text-[#DB3E3E] hover:text-[#006B14]" onClick={() => setIsLogoutModalOpen(true)}>Log Out</li>
//                       </ul></div>
//                     </div>
//                   )}
//                 </div>
//               ) : (
//                 <div className="flex flex-col text-center gap-[1.75rem] lg:hidden">
//                   <Link href="/auth/signup" className="border border-[#18A532] text-[#18A532] py-2 px-6 rounded-md">Register</Link>
//                   <Link href="/auth/login"><button className="w-full text-white bg-[#18A532] py-2 px-6 rounded-md">Sign in</button></Link>
//                 </div>
//               )}
//             </div>
//             {auth.user != null ? (
//               <div className="bg-white gap-[23px] items-center justify-center relative hidden lg:block">
//                 <div className="flex gap-2 items-center">
//                   <div className="flex gap-2 items-center">
//                     <h1 className='h-[51px] w-[51px] flex items-center justify-center text-lg text-[#006B14] text-center rounded-full bg-[#F0F7F6]'>{getInitials(auth?.user?.firstName, auth?.user?.lastName)}</h1>
//                     <div className="text-base text-[#3C3C3C]"><h3>{`${auth?.user?.firstName} ${auth?.user?.lastName}`}</h3></div>
//                   </div>
//                   <div className="text-[#4F4F4F] text-4xl cursor-pointer" onClick={openMenu}><RiArrowDropDownLine /></div>
//                 </div>
//                 {dropOpen && (
//                   <div className="w-[166px] py-[4px] absolute top-14 right-0 bg-white rounded-[10px] text-[#111014] text-[16px] drop-shadow shadow-[#00000026] cursor-pointer">
//                     <div><ul className="px-[10px] py-[10px] grid gap-[10px]">
//                       <li className="hover:text-[#006B14]">My Tickets</li>
//                       <li className="hover:text-[#006B14]" onClick={() => setIsResetPasswordModalOpen(true)}>Reset Password</li>
//                       <li className="text-[#DB3E3E] hover:text-[#006B14]" onClick={() => setIsLogoutModalOpen(true)}>Log Out</li>
//                     </ul></div>
//                   </div>
//                 )}
//               </div>
//             ) : (
//               <div className="flex flex-col lg:flex-row text-center gap-[1.75rem] border lg:gap-5 md:hidden lg:block">
//                 <Link href="/auth/signup" className="border border-[#18A532] text-[#18A532] py-2 px-6 rounded-md">Register</Link>
//                 <Link href="/auth/login"><button className="text-white bg-[#18A532] py-2 px-6 rounded-md">Sign in</button></Link>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Logout Modal */}
//       <LogoutModal isOpen={isLogoutModalOpen} onClose={() => setIsLogoutModalOpen(false)} onLogout={handleLogout} />

//       {/* Reset Password Modal */}
//       <ResetPasswordModal isOpen={isResetPasswordModalOpen} onClose={() => setIsResetPasswordModalOpen(false)} />
//     </div>
//   );
// }
// import LogoutModal from '@/components/modal/logOutModal'; // Import the Logout modal
// import ResetPasswordModal from '@/components/modal/changePasswordModal'; // Import the ResetPassword modal

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
import { useRouter } from 'next/navigation';
import LogoutModal from '@/components/modal/logOutModal';
import ChangePasswordModal from '@/components/modal/changePasswordModal';


export default function Nav() {
  const { auth, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropOpen, setDropOpenMenu] = useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const [isResetPasswordModalOpen, setIsResetPasswordModalOpen] = useState(false);
  const navRef = useRef(null);
  const router = useRouter();

  const closeMenubar = () => setMenuOpen(false);
  const openMenubar = () => window.innerWidth <= 1024 && setMenuOpen(!menuOpen);
  const openMenu = () => setDropOpenMenu(!dropOpen);
  const closeMenu = () => setDropOpenMenu(dropOpen);

  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      closeMenubar();
    
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen]);

  const getInitials = (firstName, lastName) => (!firstName || !lastName ? '' : `${firstName.charAt(0)}${lastName.charAt(0)}`);

  const handleLogoutClicked = ()=>{
    setIsLogoutModalOpen(true);
    setDropOpenMenu(false);
  }
  const handleChangeClicked=()=>{
    setIsResetPasswordModalOpen(true);
    setDropOpenMenu(false);
  }
  

  

  const handleLogout = () => {
    logout();
    router.push('/auth/login');
  };

  return (
    <div className='fixed left-0 right-0 z-50'>
      <Marquee />
      <div className="w-full py-6 bg-white border border-[#D8D8D8]">
        <div className="w-11/12 container mx-auto flex items-center justify-between">
          <Link href="/"><Image className="w-[8.893rem] h-[3.344rem]" src={Logo} alt="NRC-logo" width={100} height={100} priority={true} /></Link>
          <div className="lg:hidden text-2xl px-4 cursor-pointer" onClick={openMenubar}>
            {menuOpen ? <IoCloseOutline /> : <RxHamburgerMenu className="text-[#0C4C51]" />}
          </div>
          <div className={`lg:static container text-white text-[18.6px] flex flex-col gap-[3.375rem] top-24 rounded-sm lg:flex ${menuOpen ? 'w-full block opacity-100 bg-white right-0 p-8' : 'hidden opacity-0 top-[100%] py-1'} lg:block absolute lg:opacity-100 lg:flex-row lg:w-auto justify-between font-semibold h-screen lg:h-full z-50 lg:gap-[3rem] xl:gap-[12rem] 2xl:gap-[20rem]`}>
            <div className="flex flex-col lg:flex-row items-center gap-[1.625rem] xl:gap-[2rem] text-[18.6px] text-[#263238] lg:text-[#01320A] font-sans" ref={navRef}>
              <Link href="/"><h1 className="hover:text-[#006B14]">Home</h1></Link>
              <Link href="/about"><h1 className="hover:text-[#006B14]">About</h1></Link>
              <Link href="/timetables"><h1 className="hover:text-[#006B14]">Time Tables</h1></Link>
              <Link href="/faq"><h1 className="hover:text-[#006B14]">FAQs</h1></Link>
              <Link href="/contact"><h1 className="hover:text-[#006B14]">Contact Us</h1></Link>
              {auth.user != null ? (
                <div className="bg-white mx-auto items-center justify-center relative block lg:hidden">
                  <div className="w-[250px] flex gap-[8px] items-center">
                    <div className="h-[51px] w-[51px] flex items-center justify-center text-lg text-[#006B14] text-center rounded-full bg-[#F0F7F6]">
                      <h1>{getInitials(auth?.user?.firstName, auth?.user?.lastName)}</h1>
                    </div>
                    <div className="text-base text-[#3C3C3C]"><h3>{`${auth?.user?.firstName} ${auth?.user?.lastName}`}</h3></div>
                    <div className="text-[#4F4F4F] text-4xl cursor-pointer" onClick={openMenu}><RiArrowDropDownLine /></div>
                  </div>
                  {dropOpen && (
                    <div className="w-[166px] py-[4px] absolute top-14 right-0 bg-white rounded-[10px] text-[#111014] text-[16px] drop-shadow shadow-[#00000026] cursor-pointer">
                      <div> <div className="px-[10px] py-[10px] grid gap-[10px]">
                      <Link href="/ticket" className="hover:text-[#006B14]">My Tickets</Link>
                      
                    <button className="hover:text-[#006B14] text-start" onClick={handleChangeClicked}>
                      Change Password
                    </button>
                    <button onClick={handleLogoutClicked} className="text-[#DB3E3E] text-start">
                      Log Out
                    </button>
                    </div></div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="w-full flex flex-col text-center gap-[1.75rem] lg:hidden">
                  <Link href="/auth/signup" className="border border-[#18A532] text-[#18A532] py-2 px-6 rounded-md w-full">Register</Link>
                  <Link href="/auth/login"><button className="w-full text-white bg-[#18A532] py-2 px-6 rounded-md">Sign in</button></Link>
                </div>
              )}
            </div>
            {auth.user != null ? (
              <div className="bg-white gap-[23px] items-center justify-center relative hidden lg:block">
                <div className="flex gap-2 items-center">
                  <div className="flex gap-2 items-center">
                    <h1 className='h-[51px] w-[51px] flex items-center justify-center text-lg text-[#006B14] text-center rounded-full bg-[#F0F7F6]'>{getInitials(auth?.user?.firstName, auth?.user?.lastName)}</h1>
                    <div className="text-base text-[#3C3C3C]"><h3>{`${auth?.user?.firstName} ${auth?.user?.lastName}`}</h3></div>
                  </div>
                  <div className="text-[#4F4F4F] text-4xl cursor-pointer" onClick={openMenu}><RiArrowDropDownLine /></div>
                </div>
                {dropOpen && (
                  <div className="w-[166px] py-[4px] absolute top-14 right-0 bg-white rounded-[10px] text-[#111014] text-[16px] drop-shadow shadow-[#00000026] cursor-pointer">
                    <div>
                      <div className="px-[10px] py-[10px] grid gap-[10px]">
                      <Link href="/ticket" className="hover:text-[#006B14]">My Tickets</Link>
                      
                    <button className="hover:text-[#006B14] text-start" onClick={handleChangeClicked}>
                      Change Password
                    </button>
                    <button onClick={handleLogoutClicked} className="text-[#DB3E3E]  text-start">
                      Log Out
                    </button>
                    </div></div>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex flex-col lg:flex-row text-center gap-[1.75rem] lg:gap-5 hidden lg:block space-x-5">
                <Link href="/auth/signup" className="border border-[#18A532] text-[#18A532] py-2 px-6 rounded-md">Register</Link>
                <Link href="/auth/login"><button className="text-white bg-[#18A532] py-2 px-6 rounded-md">Sign in</button></Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Logout Modal */}
      {isLogoutModalOpen && (
        <LogoutModal
          isOpen={isLogoutModalOpen}
          onClose={() => setIsLogoutModalOpen(false)}
          onLogout={handleLogout}
        />
      )}

      {/* Reset Password Modal */}
      {isResetPasswordModalOpen && (
        <ChangePasswordModal
          isOpen={isResetPasswordModalOpen}
          onClose={() => setIsResetPasswordModalOpen(false)}
        />
      )}
    </div>
  );
}