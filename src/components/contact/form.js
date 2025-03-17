



export default function Form(){
    return(
        <div className=" border rounded-md  ">
            <form className="px-4 py-4 md:px-6 lg:px-[28px] lg:py-[30px] w-full  ">
              <div className=" grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-10 lg:mb-4">
              <div className="flex flex-col">
                <label className="py-1 text-[14px]" htmlFor="">Full Name</label>
                <input className="border p-2 rounded outline-none  text-[14px]" type="text" placeholder="Enter Your Name"/>
                </div>
              <div className="flex flex-col">
              <label className="py-1 text-[14px]" htmlFor="">Enter Your Email</label>
              <input className="border p-2 rounded outline-none text-[14px]" type="email" placeholder="Email"/>
              </div>
              </div>
             <div className="flex flex-col lg:mb-4">
             <label className="py-1 text-[14px]" htmlFor="">Phone Number</label>
             <input  className="border p-2 rounded outline-none text-[14px]"type="text" placeholder="Enter Your Phone number"/>
             </div>
           <div className="flex flex-col lg:mb-3">
           <label className="py-1 text-[14px]" htmlFor="">Message</label>
           <textarea className="border p-2 h-[70px] rounded outline-none text-[14px]" placeholder="Type your Message"></textarea>
           </div>
                <button className="bg-[#18A532] text-white w-full my-2 p-2 rounded-md " type="submit">Submit</button>
            </form>
        </div>
    )
}