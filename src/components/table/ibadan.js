import { Schedule } from '@/db';

export default function Ibadan() {
  return (
    <div className="px-4 pb-5 bg-[#FFFFFF]">
      <div className="max-w-7xl lg:px-15 mx-auto">
        <div className="mb-6 p-4 rounded-lg">
          <h2 className="text-2xl font-bold">Ibadan - Lagos Morning Train (IL2)</h2>
          <div className="flex flex-wrap gap-3">
            <p>
              Train Type - <strong>100 KM</strong> |
            </p>
            <p>
              Duration - <strong>2 hrs, 33 mins</strong> |
            </p>
            <p>
              Distance - <strong>180 KM</strong>
            </p>
          </div>

          {/* Scrollable Table Container */}
          <div className="overflow-x-auto mt-4">
            <table className="w-full min-w-max border-collapse border">
              <thead>
                <tr className="bg-[#F2FAF4]">
                  <th className="border p-2 text-start">No</th>
                  <th className="border p-2 text-start">Code</th>
                  <th className="border p-2 text-start">Station</th>
                  <th className="border p-2 text-start">Arrival</th>
                  <th className="border p-2 text-start">Departure</th>
                  <th className="border p-2 text-start">Distance</th>
                </tr>
              </thead>
              <tbody>
                {Schedule.map((item, index) => (
                  <tr key={item.id} className="border border-gray-300">
                    <td className="border p-2 text-start">{index + 1}</td>
                    <td className="border p-2 text-start">{item.code}</td>
                    <td className="border p-2 text-start">{item.name}</td>
                    <td className="border p-2 text-start">{item.arrivalTime}</td>
                    <td className="border p-2 text-start">{item.departureTime}</td>
                    <td className="border p-2 text-start">{item.distance}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}