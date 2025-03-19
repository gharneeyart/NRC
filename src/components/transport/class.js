// import { Classes } from "@/db"
// import ClassCard from "../reusables/cards/classCard"

// export default function Class() {
//     return (
//       <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[35px]  justify-between  rounded-md  my-[43px] pb-16">
//         {Classes.map((bookings)=>(
//             <div key={bookings?.id}>
//               <ClassCard myBookings={bookings}/>
//             </div>
//         ))}
//       </div>
//     )

// }


import ClassCard from '../reusables/cards/classCard';
import Imag from '/public/icons/Frame 1000003430.svg';
import Img1 from '/public/icons/Frame 1000003430 (1).svg';
import Img2 from '/public/icons/Frame 1000003430 (2).svg';

const classImages = {
  'First Class': Imag,
  'Business Class': Img1,
  'Standard Class': Img2,
};
export default function Class({ train, timeOfDay }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[35px] justify-between rounded-md my-[43px] pb-16">
      {train?.classes.map((booking) => (
        <div key={booking?.id}>
          <ClassCard
            myBookings={{
              class: booking.type,
              priceAdult: booking.priceAdult,
              priceChild: booking.priceChild,
              reserves: booking.availableSeats,
              image: classImages[booking.type], // Add this if not already included
            }}
            train={train}
            timeOfDay={timeOfDay}
          />
        </div>
      ))}
    </div>
  );
}
