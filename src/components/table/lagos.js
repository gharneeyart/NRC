import { trainSchedule } from '@/db';

export default function Lagos() {
  return (
    <div className="w-11/12 container mx-auto">
      <div className="py-4   ">
        <h1 className="text-2xl font-semibold ">
          Lagos - Ibadan Mornin Train (LI1)
        </h1>
        <div className="space-x-5">
          <span className=" border-r-2 border-[#263238] pr-2">
            Train Type - <b>120 KM</b>
          </span>
          <span className=" border-r-2 border-[#263238] pr-2">
            Total Time - <b>2 hrs, 33 mins</b>
          </span>
          <span>
            Total Distance - <b>180 KM</b>
          </span>
        </div>
      </div>

      <table className=" px-6 lg:px-0 w-full ">
        <thead className="bg-[#F2FAF4] ">
          <tr>
            <th className=" py-3 font-semibold text-left pl-6">NO</th>
            <th className=" py-3  font-semibold text-left px-3">Code</th>
            <th className=" py-3  font-semibold text-left px-3 w-[171px] lg:w-[270px]">
              Station Name
            </th>
            <th className=" py-3  font-semibold text-left px-3">
              Arrival Time
            </th>
            <th className=" py-3  font-semibold text-left px-3">
              Departure Time
            </th>
            <th className=" py-3  font-semibold text-left px-3">Distance</th>
          </tr>
        </thead>
        <tbody>
          {trainSchedule.map((schedule, index) => (
            <tr
              key={schedule.id}
              className="border border-gray-300 text-start text-[#263238] font-medium  text-sm lg:text-[18px] "
            >
              <td className="pb-6 pt-2 pl-6">{index + 1}</td>
              <td className="pb-6 pt-2 px-6 ">{schedule?.code}</td>
              <td className="pb-6 pt-2 px-6 ">{schedule?.name}</td>
              <td className="pb-6 pt-2 px-6">{schedule?.arrivalTime}</td>
              <td className="pb-6 pt-2 px-6">{schedule?.departureTime}</td>
              <td className="pb-6 pt-2 px-6">{schedule?.distance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
