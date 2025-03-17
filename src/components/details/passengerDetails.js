'use client';
import { useSearchStore } from "@/store/useSearchStore";

export default function PassengerDetails() {
  // Retrieve passenger details from Zustand store
  const { passengers } = useSearchStore();

  return (
    <div className="container w-full lg:w-[520px] xl:w-[664px]  text-[#263238] text-[14px]">
      <div className="space-y-[1rem] lg:space-y-[1.813rem]">
        <h1 className="hidden lg:block text-lg lg:text-[1.5rem] xl:text-[1.819rem] font-bold">Passenger Details</h1>
        <h1 className="block lg:hidden font-bold text-lg">Book a Seat</h1>
      
        <table className="w-full text-left">
          <thead className="bg-[#F5F5F5]">  
            <tr className="text-sm lg:text-[1.2rem] xl:text-[1.5rem]">
              <th className="py-[0.813rem] px-[1.326rem] lg:px-[1.878rem]">Name</th>
              <th className="">Type</th>
              <th className="">Coach/Seat No</th>
            </tr>
          </thead>
          <tbody>
            {passengers.map((passenger, index) => (
              <div key={index}>
                <tr className="text-sm lg:text-[1rem] xl:text-[1.375rem] font-semibold">
                  <td className="px-[0.703rem] lg:px-[1.878rem] pt-[0.214rem] lg:pt-[0.779rem]">{passenger.name}</td>
                  <td className="pt-[0.214rem] lg:pt-[0.779rem]">{passenger.passenger}</td>
                  <td className="pt-[0.214rem] lg:pt-[0.779rem]">{passenger.coach}/{passenger.seat}</td>
                </tr>
                <tr className="flex flex-col px-[0.703rem] lg:px-[1.878rem] text-sm lg:text-[1rem] xl:text-[20px]">
                  <td className="text-[#6D6D6D] pt-[6.36px] lg:pt-[9px]">{passenger.email}</td>
                  <td className="text-[#6D6D6D] pt-[4.24px] lg:pt-[6px]">{passenger.phone}</td>
                </tr>
              </div>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}