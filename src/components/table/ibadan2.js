import { Morning } from "@/db";

export default function HomePage() {
    return (
         <div className="">
                
          <div className="py-4   ">
          <h1 className="text-2xl font-semibold ">Lagos - Ibadan Mornin Train (LI1)</h1>
                    <div className="space-x-5">
            <span className=" border-r-2 border-[#263238] pr-2">Train Type - <b>120 KM</b></span>
            <span className=" border-r-2 border-[#263238] pr-2">Total Time - <b>2 hrs, 33 mins</b></span>
            <span>Total Distance - <b>180 KM</b></span>
        </div>
          </div>
                
            <table className=" px-6 lg:px-0 w-full">
                <thead className="bg-[#F2FAF4] ">
                    <tr>
                        <th className=" py-3 px-4 font-semibold">NO</th>
                        <th className=" py-3 px-4 font-semibold">Code</th>
                        <th className=" py-3 px-4 font-semibold text-left">Station Name</th>
                        <th className=" py-3 px-4 font-semibold">Arrival Time</th>
                        <th className=" py-3 px-4 font-semibold">Departure Time</th>
                        <th className=" py-3 px-4 font-semibold">Distance</th>
                    </tr>
                </thead>
                <tbody>
                    {Morning.map((morning, index) => (
                        <tr key={morning?.id} className="border border-gray-300 text-start  font-medium text-[#263238] text-lg text-[22px]">
                            <td className="pb-6 pt-2 pl-6">{index + 1}</td>
                            <td className="pb-6 pt-2 pl-10">{morning?.code}</td>
                            <td className="pb-6 pt-2 px-3  ">{morning?.name}</td>
                            <td className="pb-6 pt-2 pl-12">{morning?.arrivalTime}</td>
                            <td className="pb-6 pt-2 pl-12">{morning?.departureTime}</td>
                            <td className="pb-6 pt-2 pl-8">{morning?.distance}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}