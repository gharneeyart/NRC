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
                
            <table className=" px-6 lg:px-0">
                <thead className="bg-[#F2FAF4] ">
                    <tr>
                        <th className=" py-3 px-4 font-semibold">NO</th>
                        <th className=" py-3 px-4 font-semibold">Code</th>
                        <th className=" py-3 px-10 font-semibold text-left">Station Name</th>
                        <th className=" py-3 px-4 font-semibold">Arrival Time</th>
                        <th className=" py-3 px-4 font-semibold">Departure Time</th>
                        <th className=" py-3 px-4 font-semibold">Distance</th>
                    </tr>
                </thead>
                <tbody>
                    {Morning.map((morning, index) => (
                        <tr key={morning.id} className="border border-gray-300 text-center ">
                            <td className="pb-6 pt-2">{index + 1}</td>
                            <td className="pb-6 pt-2">{morning?.code}</td>
                            <td className="pb-6 pt-2 text-[#263238] font-medium lg:px-12 text-[13px] lg:text-[18px] ">{morning?.name}</td>
                            <td className="pb-6 pt-2">{morning?.arrivalTime}</td>
                            <td className="pb-6 pt-2">{morning?.departureTime}</td>
                            <td className="pb-6 pt-2">{morning?.distance || "N/A"}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}