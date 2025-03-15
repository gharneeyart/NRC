export default function ContactDetail() {
  return (
    <div className="container w-full lg:w-[520px] xl:w-[664px] ">
      <div className="space-y-[0.526rem] mt-[2.098rem] lg:mt-[4.125rem]">
        <div className="space-y-[1rem]">
          <h1 className="text-lg lg:text-[1.5rem] xl:text-[1.819rem] font-bold ">Contact Details</h1>
          <table className="w-full text-left table-auto">
            <thead className="bg-[#F5F5F5]  ">
            <tr className="text-sm lg:text-[1.2rem] xl:text-[1.5rem] ">
              <th className="py-4 px-[1.326rem] lg:px-[1.878rem]">Email</th>
              <th className="">Phone Number</th>
            </tr>
            </thead>

            <tbody className=""> 
            <tr className="font-semibold text-sm lg:text-[1rem] xl:text-[1.375rem]  ">
              <td className="pt-[8.42px] lg:pt-[12.47px] px-[0.703rem] lg:px-[1.878rem]">koredex@gmail.com</td>
              <td className="pt-[8.42px] lg:pb-[8px] lg:pt-[12.47px]">08162458760</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}