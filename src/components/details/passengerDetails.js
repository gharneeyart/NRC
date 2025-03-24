'use client';
import { useSearchStore } from '@/store/useSearchStore';

export default function PassengerDetails() {
  // Retrieve passenger details from Zustand store
  const { passengers, selectedCoach, selectedSeats } = useSearchStore();

  return (
    <div className="container w-full lg:w-[520px] xl:w-[664px]  text-[#263238] text-[14px]">
      <div className="space-y-[1rem] lg:space-y-[1.813rem]">
        <h1 className="hidden lg:block text-lg lg:text-[1.5rem] xl:text-[1.819rem] font-bold">
          Passenger Details
        </h1>
        <h1 className="block lg:hidden font-bold text-lg">Book a Seat</h1>

        <table className="w-full text-left">
  <thead className="bg-[#F5F5F5]">
    <tr className="text-sm lg:text-[1.2rem] xl:text-[1.5rem]">
      <th className="py-[0.813rem] px-[1.326rem] lg:px-[1.878rem]">Name</th>
      <th className="py-[0.813rem] px-[1.326rem] lg:px-[1.878rem]">Type</th>
      <th className="py-[0.813rem] px-[1.326rem] lg:px-[1.878rem]">Coach/Seat No</th>
    </tr>
  </thead>
  <tbody>
    {passengers.map((passenger, index) => (
      <tr key={index} className="text-sm lg:text-[1rem] xl:text-[1.375rem] font-semibold">
        <td className="px-[0.703rem] lg:px-[1.878rem] py-[0.214rem] lg:py-[0.779rem]">
          {passenger.name}
          <td  className=" pb-[0.5rem]">                    
            <div className="text-[#6D6D6D] text-sm lg:text-[1rem] xl:text-[20px] font-normal space-y-2 mt-2">                      
              <div>{passenger.email}</div>
              <div>{passenger.phone}</div>
            </div>
            </td>
        </td>
        <td className="px-[0.703rem] lg:px-[1.878rem] py-[0.214rem] lg:py-[0.779rem]">
          {passenger.type}
        </td>
        <td className="px-[0.703rem] lg:px-[1.878rem] py-[0.214rem] lg:py-[0.779rem]">
          {selectedCoach}/{selectedSeats}
        </td>
      </tr>
    ))}
  </tbody>
</table>
      </div>
    </div>
  );
}


// 'use client';
// import { useSearchStore } from '@/store/useSearchStore';

// export default function PassengerDetails() {
//   const { passengers, selectedCoach, selectedSeats } = useSearchStore();

//   return (
//     <div className="container w-full lg:w-[520px] xl:w-[664px] text-[#263238] text-[14px] overflow-x-auto">
//       <div className="space-y-[1rem] lg:space-y-[1.813rem]">
//         <h1 className="hidden lg:block text-lg lg:text-[1.5rem] xl:text-[1.819rem] font-bold">
//           Passenger Details
//         </h1>
//         <h1 className="block lg:hidden font-bold text-lg">Book a Seat</h1>

//         <table className="w-full text-left">
//           <thead className="bg-[#F5F5F5]">
//             <tr className="text-sm lg:text-[1.2rem] xl:text-[1.5rem]">
//               <th className="py-[0.813rem] px-[1.326rem] lg:px-[1.878rem]">Name</th>
//               <th className="py-[0.813rem]">Type</th>
//               <th className="py-[0.813rem]">Coach/Seat No</th>
//             </tr>
//           </thead>
//           <tbody>
//             {passengers.map((passenger, index) => (
//               <div key={index}>
//                 <tr className="text-sm lg:text-[1rem] xl:text-[1.375rem] font-semibold">
//                   <td className="px-[0.703rem] lg:px-[1.878rem] py-[0.214rem] lg:py-[0.779rem]">
//                     {passenger.name}
//                   </td>
//                   <td className="py-[0.214rem] lg:py-[0.779rem]">
//                     {passenger.type}
//                   </td>
//                   <td className="py-[0.214rem] lg:py-[0.779rem]">
//                     {selectedCoach}/{selectedSeats}
//                   </td>
//                 </tr>
//                 <tr>
//                   <td colSpan={3} className="px-[0.703rem] lg:px-[1.878rem] pb-[0.5rem]">
//                     <div className="text-[#6D6D6D] text-sm lg:text-[1rem] xl:text-[20px]">
//                       <div>{passenger.email}</div>
//                       <div>{passenger.phone}</div>
//                     </div>
//                   </td>
//                 </tr>
//               </div>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }
