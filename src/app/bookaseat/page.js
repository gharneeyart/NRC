import Search from "@/components/bookaseat/search"
import Passenger from "@/components/bookaseat/passenger"
import ContactDetails from "@/components/bookaseat/contactDetails"
export default function Book() {
    return(
        <div>
            <h1 className="font-bold text-3xl mb-5 lg:ml-12 ml-5">Book a Seat</h1>
        <div className=" mx-auto w-11/12 lg:w-11/12 py-9 lg:border rounded-lg shadow lg:shadow-none lg:px-[66px] px-3 mb-12 text-[#263238]">
            <div className="text-[#263238]"> <Search /></div>
            <hr className="mb-7"/>
            <div className="text-[#263238]"><Passenger/> <hr className="mb-7"/></div>
            <div className="text-[#263238]"> <ContactDetails/> </div>
            
        </div>
        </div>
    )
}