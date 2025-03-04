import { Classes } from "@/db"
import ClassCard from "../reusables/cards/classCard"


export default function Class() {
    return (
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[35px]  justify-between  rounded-md  my-[43px] pb-16">
        {Classes.map((bookings)=>(
            <div key={bookings?.id}>
              <ClassCard myBookings={bookings}/>
            </div>
        ))}
      </div>
    )
  
}