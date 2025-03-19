import { Morning } from '@/db';

export default function Ibadan2() {
    return (
         <div className="pb-[234px] w-11/12 container mx-auto">
                
          <div className="py-4   ">
          <h1 className="text-2xl font-semibold ">Lagos - Ibadan Mornin Train (LI4)</h1>
                    <div className="space-x-5">
            <span className=" border-r-2 border-[#263238] pr-2">Train Type - <b>100 KM</b></span>
            <span className=" border-r-2 border-[#263238] pr-2">Total Time - <b>2 hrs, 21 mins</b></span>
            <span>Total Distance - <b>120 KM</b></span>
        </div>
          </div>
                
            <table className=" px-6 lg:px-0 w-full">
                <thead className="bg-[#F2FAF4] ">
                    <tr>
                        <th className=" py-3 font-semibold pl-6 text-left">NO</th>
                        <th className=" py-3 px-3 font-semibold text-left">Code</th>
                        <th className=" py-3 px-3 font-semibold text-left w-[171px] lg:w-[270px]">Station Name</th>
                        <th className=" py-3 px-3 font-semibold text-left">Arrival Time</th>
                        <th className=" py-3 px-3 font-semibold text-left">Departure Time</th>
                        <th className=" py-3 px-3 font-semibold text-left">Distance</th>
                    </tr>
                </thead>
                <tbody>
                    {Morning.map((morning, index) => (
                        <tr key={morning?.id} className="border border-gray-300 text-start  font-medium text-[#263238] text-sm lg:text-[18px] ">
                            <td className="pb-6 pt-2 pl-6">{index + 1}</td>
                            <td className="pb-6 pt-2 px-4">{morning?.code}</td>
                            <td className="pb-6 pt-2 px-4 ">{morning?.name}</td>
                            <td className="pb-6 pt-2 px-4">{morning?.arrivalTime}</td>
                            <td className="pb-6 pt-2 px-4">{morning?.departureTime}</td>
                            <td className="pb-6 pt-2 px-4">{morning?.distance}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )

}
