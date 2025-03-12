'use client';
import { useState } from 'react';
import { IoIosClose } from "react-icons/io";
import Image from 'next/image';
import White from '/public/images/White Dot.png'
import Oxblod from '/public/images/oxblod Dot.png'
import Red from '/public/images/red dot.png'


export default function CoachModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className=" text-[#848484] px-5  w-full py-3 rounded-lg text-start transition border"
      >
        Select Seat
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="bg-white rounded-2xl shadow-xl p-6 max-w-sm relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={() => setIsOpen(false)}
            >
              <IoIosClose size={20} />
            </button>
              <div className=' flex flex-col gap-6 mb-5'>
                       <div className='flex flex-col gap-2'>
                        <h1 className='font-bold text-base'>Please Select Seat(s)</h1>
                        <div className='w-[90%] grid grid-cols-3'>
                           <div className='flex items-center gap-1'>
                               <Image src={White} alt="White" className='w-[10px]' />
                               <p className='text-[10px]'>Available</p>
                           </div>
                           <div className='flex items-center gap-1'>
                               <Image src={Oxblod} alt="Oxblod" className='w-[10px]' />
                               <p className='text-[10px]'>Selected</p> 
                           </div>
                           <div className='flex items-center gap-1'>
                               <Image src={Red} alt="Red" className='w-[10px]' />
                               <p className='text-[10px]'>Unavailable</p>
                           </div>
                       </div>
                       </div>
                       <div className='grid grid-cols-3 justify-between'>
                           <div className='flex flex-col gap-2 '>
                               <div className='grid grid-cols-2 gap-2'>
                                  <p className='bg-[#E8EAEE] rounded-sm text-center text-[14px]'>1</p>
                                  <p className='bg-[#E8EAEE] rounded-sm text-center text-[14px]'>2</p>
                               </div>
                               <div className='grid grid-cols-2 gap-2'>
                                  <p className='bg-[#E8EAEE] rounded-sm text-center text-[14px]'>5</p>
                                  <p className='bg-[#E8EAEE] rounded-sm text-center text-[14px]'>6</p>
                               </div>
                               <div className='grid grid-cols-2 gap-2'>
                                  <p className='bg-[#E8EAEE] rounded-sm text-center text-[14px]'>9</p>
                                  <p className='bg-[#E8EAEE] rounded-sm text-center text-[14px]'>10</p>
                               </div>
                               <div className='grid grid-cols-2 gap-2'>
                                  <p className='bg-[#E8EAEE] rounded-sm text-center text-[14px]'>13</p>
                                  <p className='bg-[#E8EAEE] rounded-sm text-center text-[14px]'>14</p>
                               </div>
                               <div className='grid grid-cols-2 gap-2'>
                                  <p className='bg-[#E8EAEE] rounded-sm text-center text-[14px]'>17</p>
                                  <p className='bg-[#E8EAEE] rounded-sm text-center text-[14px]'>18</p>
                               </div>
                               <div className='grid grid-cols-2 gap-2'>
                                  <p className='bg-[#E8EAEE] rounded-sm text-center text-[14px]'>21</p>
                                  <p className='bg-[#E8EAEE] rounded-sm text-center text-[14px]'>22</p>
                               </div>
                               <div className='grid grid-cols-2 gap-2'>
                                  <p className='bg-[#E8EAEE] rounded-sm text-center text-[14px]'>25</p>
                                  <p className='bg-[#E8EAEE] rounded-sm text-center text-[14px]'>26</p>
                               </div>
                               <div className='grid grid-cols-2 gap-2'>
                                  <p className='bg-[#E8EAEE] rounded-sm text-center text-[14px]'>29</p>
                                  <p className='bg-[#E8EAEE] rounded-sm text-center text-[14px]'>30</p>
                               </div>
                               <div className='grid grid-cols-2 gap-2'>
                                  <p className='bg-[#E8EAEE] rounded-sm text-center text-[14px]'>33</p>
                                  <p className='bg-[#E8EAEE] rounded-sm text-center text-[14px]'>34</p>
                               </div>
                               <div className='grid grid-cols-2 gap-2'>
                                  <p className='bg-[#E8EAEE] rounded-sm text-center text-[14px]'>37</p>
                                  <p className='bg-[#E8EAEE] rounded-sm text-center text-[14px]'>38</p>
                               </div>
                               <div className='grid grid-cols-2 gap-2'>
                                  <p className='bg-[#E8EAEE] rounded-sm text-center text-[14px]'>41</p>
                                  <p className='bg-[#E8EAEE] rounded-sm text-center text-[14px]'>42</p>
                               </div>
                               <div className='grid grid-cols-2 gap-2'>
                                  <p className='bg-[#E8EAEE] rounded-sm text-center text-[14px]'>45</p>
                                  <p className='bg-[#E8EAEE] rounded-sm text-center text-[14px]'>46</p>
                               </div>
                           </div>
                           <div></div>
                           <div className='flex flex-col gap-2'>
                               <div className='grid grid-cols-2 gap-2'>
                                  <p className='bg-[#E8EAEE] rounded-sm text-center text-[14px]'>3</p>
                                  <p className='bg-[#E8EAEE] rounded-sm text-center text-[14px]'>4</p>
                               </div>
                               <div className='grid grid-cols-2 gap-2'>
                                  <p className='bg-[#E8EAEE] rounded-sm text-center text-[14px]'>7</p>
                                  <p className='bg-[#E8EAEE] rounded-sm text-center text-[14px]'>8</p>
                               </div>
                               <div className='grid grid-cols-2 gap-2'>
                                  <p className='bg-[#E8EAEE] rounded-sm text-center text-[14px]'>11</p>
                                  <p className='bg-[#E8EAEE] rounded-sm text-center text-[14px]'>12</p>
                               </div>
                               <div className='grid grid-cols-2 gap-2'>
                                  <p className='bg-[#E8EAEE] rounded-sm text-center text-[14px]'>15</p>
                                  <p className='bg-[#E8EAEE] rounded-sm text-center text-[14px]'>16</p>
                               </div>
                               <div className='grid grid-cols-2 gap-2'>
                                  <p className='bg-[#E8EAEE] rounded-sm text-center text-[14px]'>19</p>
                                  <p className='bg-[#E8EAEE] rounded-sm text-center text-[14px]'>20</p>
                               </div>
                               <div className='grid grid-cols-2 gap-2'>
                                  <p className='bg-[#E8EAEE] rounded-sm text-center text-[14px]'>23</p>
                                  <p className='bg-[#E8EAEE] rounded-sm text-center text-[14px]'>24</p>
                               </div>
                               <div className='grid grid-cols-2 gap-2'>
                                  <p className='bg-[#E8EAEE] rounded-sm text-center text-[14px]'>27</p>
                                  <p className='bg-[#E8EAEE] rounded-sm text-center text-[14px]'>28</p>
                               </div>
                               <div className='grid grid-cols-2 gap-2'>
                                  <p className='bg-[#E8EAEE] rounded-sm text-center text-[14px]'>31</p>
                                  <p className='bg-[#E8EAEE] rounded-sm text-center text-[14px]'>32</p>
                               </div>
                               <div className='grid grid-cols-2 gap-2'>
                                  <p className='bg-[#E8EAEE] rounded-sm text-center text-[14px]'>35</p>
                                  <p className='bg-[#E8EAEE] rounded-sm text-center text-[14px]'>36</p>
                               </div>
                               <div className='grid grid-cols-2 gap-2'>
                                  <p className='bg-[#E8EAEE] rounded-sm text-center text-[14px]'>39</p>
                                  <p className='bg-[#E8EAEE] rounded-sm text-center text-[14px]'>40</p>
                               </div>
                               <div className='grid grid-cols-2 gap-2'>
                                  <p className='bg-[#E8EAEE] rounded-sm text-center text-[14px]'>43</p>
                                  <p className='bg-[#E8EAEE] rounded-sm text-center text-[14px]'>44</p>
                               </div>
                               <div className='grid grid-cols-2 gap-2'>
                                  <p className='bg-[#E8EAEE] rounded-sm text-center text-[14px]'>47</p>
                                  <p className='bg-[#E8EAEE] rounded-sm text-center text-[14px]'>48</p>
                               </div>
                           </div>
                       </div>
                   </div>
            <div className="mt-4 flex justify-end">
              <button
                onClick={() => setIsOpen(false)}
                className="bg-[#18A532] w-full text-white py-1 rounded-sm hover:bg-gray-400 transition"
              >
                Proceed
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
