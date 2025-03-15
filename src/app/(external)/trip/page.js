// 'use client'
// import { useSearchStore } from "@/store/useSearchStore";
// import SearchTrain from "@/components/reusables/search";
// import Class from "@/components/transport/class";
// import Hours from "@/components/transport/hours";

// export default function Trip() {
//     // Retrieve the persisted search state
//     const { from, to } = useSearchStore();

//     return (
//         <div className="space-y-11 mt-6">
//             <SearchTrain
//                 w="w-[90%]"
//                 bg="bg-[#006B14]"
//                 gap="gap-8"
//                 btnBg="bg-[#FFFFFF]"
//                 inputPy="py-2"
//                 inputPadding="py-1.5"
//                 inputBg="bg-[#FFFFFF36]"
//                 inputBorder="border-2 border-[#FFFFFF61]"
//                 inputText="text-[#FFFFFF]"
//                 btnText="text-[#006B14]"
//                 inputW="w-full lg:w-[25%] xl:w-[25%]"
//                 btnWidth="w-full lg:w-[25%] xl:w-[20%]"
//                 py="pt-6 pb-6 lg:pt-8 lg:pb-12 xl:pt-10 xl:pb-14"
//             />
//             <div className="w-[335px] md:w-[81%] lg:w-11/12 container mx-auto shadow-md rounded-b-md">
//                 <div className="font-semibold text-[16px] md:text-[20px] px-[39px] xl:text-[29px] text-center bg-[#E2F5E5] py-6 rounded-t-md">
//                     <h1>Lagos - Ibadan | Morning Train | Train No - LL1</h1>
//                 </div>
//                 <div className="lg:px-11 ">
//                     <div>
//                         <Hours/>
//                     </div>
//                     <div className="border-b"></div>
//                     <Class/>
//                 </div>
//             </div>
//             <div className="mt-4 text-center">
//                 <p>Search criteria: From: <strong>{from}</strong> | To: <strong>{to}</strong></p>
//             </div>
//         </div>
//     );
// }

// 'use client'
// import { useSearchStore } from "@/store/useSearchStore";
// import SearchTrain from "@/components/reusables/search";
// import Class from "@/components/transport/class";
// import Hours from "@/components/transport/hours";
// import trainData from "@/train.json"; // Import the JSON data

// export default function Trip() {
//     // Retrieve the persisted search state
//     const { from, to } = useSearchStore();

//     // Filter trains based on the time of day
//     const morningTrains = trainData.trains.filter(train => train.train_name && train.train_name.includes("Morning"));
//     const afternoonTrains = trainData.trains.filter(train => train.train_name && train.train_name.includes("Afternoon"));
//     const eveningTrains = trainData.trains.filter(train => train.train_name && train.train_name.includes("Evening"));

//     // Log the filtered trains for debugging
//     console.log("Morning Trains:", morningTrains);
//     console.log("Afternoon Trains:", afternoonTrains);
//     console.log("Evening Trains:", eveningTrains);
//     return (
//         <div className="space-y-11 mt-6">
//             <SearchTrain
//                 w="w-[90%]"
//                 bg="bg-[#006B14]"
//                 gap="gap-8"
//                 btnBg="bg-[#FFFFFF]"
//                 inputPy="py-2"
//                 inputPadding="py-1.5"
//                 inputBg="bg-[#FFFFFF36]"
//                 inputBorder="border-2 border-[#FFFFFF61]"
//                 inputText="text-[#FFFFFF]"
//                 btnText="text-[#006B14]"
//                 inputW="w-full lg:w-[25%] xl:w-[25%]"
//                 btnWidth="w-full lg:w-[25%] xl:w-[20%]"
//                 py="pt-6 pb-6 lg:pt-8 lg:pb-12 xl:pt-10 xl:pb-14"
//             />
//             <div className="mt-4 text-center">
//                 <p>Search criteria: From: <strong>{from}</strong> | To: <strong>{to}</strong></p>
//             </div>
//             <div className="space-y-11 mt-6">
//                 <h2 className="text-xl font-bold">Morning Trains</h2>
//                 {morningTrains.map((train, index) => (
//                     <div key={index} className="w-[335px] md:w-[81%] lg:w-11/12 container mx-auto shadow-md rounded-b-md">
//                         <div className="font-semibold text-[16px] md:text-[20px] px-[39px] xl:text-[29px] text-center bg-[#E2F5E5] py-6 rounded-t-md">
//                             <h1>{train.train_name}</h1>
//                         </div>
//                         <div className="lg:px-11 ">
//                             <div>
//                                 <Hours/>
//                             </div>
//                             <div className="border-b"></div>
//                             <Class/>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//             <div className="space-y-11 mt-6">
//                 <h2 className="text-xl font-bold">Afternoon Trains</h2>
//                 {afternoonTrains.map((train, index) => (
//                     <div key={index} className="w-[335px] md:w-[81%] lg:w-11/12 container mx-auto shadow-md rounded-b-md">
//                         <div className="font-semibold text-[16px] md:text-[20px] px-[39px] xl:text-[29px] text-center bg-[#E2F5E5] py-6 rounded-t-md">
//                             <h1>{train.train_name}</h1>
//                         </div>
//                         <div className="lg:px-11 ">
//                             <div>
//                                 <Hours/>
//                             </div>
//                             <div className="border-b"></div>
//                             <Class/>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//             <div className="space-y-11 mt-6">
//                 <h2 className="text-xl font-bold">Evening Trains</h2>
//                 {eveningTrains.map((train, index) => (
//                     <div key={index} className="w-[335px] md:w-[81%] lg:w-11/12 container mx-auto shadow-md rounded-b-md">
//                         <div className="font-semibold text-[16px] md:text-[20px] px-[39px] xl:text-[29px] text-center bg-[#E2F5E5] py-6 rounded-t-md">
//                             <h1>{train.train_name}</h1>
//                         </div>
//                         <div className="lg:px-11 ">
//                             <div>
//                                 <Hours/>
//                             </div>
//                             <div className="border-b"></div>
//                             <Class/>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// 'use client'
// import { useSearchStore } from "@/store/useSearchStore";
// import SearchTrain from "@/components/reusables/search";
// import Class from "@/components/transport/class";
// import Hours from "@/components/transport/hours";
// import trainData from "@/train.json"; // Import the JSON data

// export default function Trip() {
//     // Retrieve the persisted search state
//     const { from, to } = useSearchStore();

//     // Determine the direction of travel based on the sequence of stations
//     const isLagosToIbadan = trainData.trains.some(train => {
//         const fromIndex = train.schedule.findIndex(station => station.station_name === from);
//         const toIndex = train.schedule.findIndex(station => station.station_name === to);
//         return fromIndex !== -1 && toIndex !== -1 && fromIndex < toIndex;
//     });

//     const isIbadanToLagos = trainData.trains.some(train => {
//         const fromIndex = train.schedule.findIndex(station => station.station_name === from);
//         const toIndex = train.schedule.findIndex(station => station.station_name === to);
//         return fromIndex !== -1 && toIndex !== -1 && fromIndex > toIndex;
//     });

//     // Filter trains based on the direction and time of day
//     const lagosToIbadanTrains = trainData.trains.filter(train => train.train_name && train.train_name.includes("Lagos-Ibadan"));
//     const ibadanToLagosTrains = trainData.trains.filter(train => train.train_name && train.train_name.includes("Ibadan-Lagos"));

//     const morningLagosToIbadanTrains = lagosToIbadanTrains.filter(train => train.train_name.includes("Morning"));
//     const afternoonLagosToIbadanTrains = lagosToIbadanTrains.filter(train => train.train_name.includes("Afternoon"));
//     const eveningLagosToIbadanTrains = lagosToIbadanTrains.filter(train => train.train_name.includes("Evening"));

//     const morningIbadanToLagosTrains = ibadanToLagosTrains.filter(train => train.train_name.includes("Morning"));
//     const afternoonIbadanToLagosTrains = ibadanToLagosTrains.filter(train => train.train_name.includes("Afternoon"));
//     const eveningIbadanToLagosTrains = ibadanToLagosTrains.filter(train => train.train_name.includes("Evening"));

//     return (
//         <div className="space-y-11 mt-6">
//             <SearchTrain
//                 w="w-[90%]"
//                 bg="bg-[#006B14]"
//                 gap="gap-8"
//                 btnBg="bg-[#FFFFFF]"
//                 inputPy="py-2"
//                 inputPadding="py-1.5"
//                 inputBg="bg-[#FFFFFF36]"
//                 inputBorder="border-2 border-[#FFFFFF61]"
//                 inputText="text-[#FFFFFF]"
//                 btnText="text-[#006B14]"
//                 inputW="w-full lg:w-[25%] xl:w-[25%]"
//                 btnWidth="w-full lg:w-[25%] xl:w-[20%]"
//                 py="pt-6 pb-6 lg:pt-8 lg:pb-12 xl:pt-10 xl:pb-14"
//             />
//             <div className="mt-4 text-center">
//                 <p>Search criteria: From: <strong>{from}</strong> | To: <strong>{to}</strong></p>
//             </div>
//             {isLagosToIbadan && (
//                 <>
//                     <div className="space-y-11 mt-6">
//                         <h2 className="text-xl font-bold">Lagos to Ibadan - Morning Trains</h2>
//                         {morningLagosToIbadanTrains.map((train, index) => (
//                             <div key={index} className="w-[335px] md:w-[81%] lg:w-11/12 container mx-auto shadow-md rounded-b-md">
//                                 <div className="font-semibold text-[16px] md:text-[20px] px-[39px] xl:text-[29px] text-center bg-[#E2F5E5] py-6 rounded-t-md">
//                                     <h1>{train.train_name}</h1>
//                                 </div>
//                                 <div className="lg:px-11 ">
//                                     <div>
//                                     <Hours schedule={train.schedule} />
//                                     </div>
//                                     <div className="border-b"></div>
//                                     <Class/>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                     <div className="space-y-11 mt-6">
//                         <h2 className="text-xl font-bold">Lagos to Ibadan - Afternoon Trains</h2>
//                         {afternoonLagosToIbadanTrains.map((train, index) => (
//                             <div key={index} className="w-[335px] md:w-[81%] lg:w-11/12 container mx-auto shadow-md rounded-b-md">
//                                 <div className="font-semibold text-[16px] md:text-[20px] px-[39px] xl:text-[29px] text-center bg-[#E2F5E5] py-6 rounded-t-md">
//                                     <h1>{train.train_name}</h1>
//                                 </div>
//                                 <div className="lg:px-11 ">
//                                     <div>
//                                     <Hours schedule={train.schedule} />
//                                     </div>
//                                     <div className="border-b"></div>
//                                     <Class/>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                     <div className="space-y-11 mt-6">
//                         <h2 className="text-xl font-bold">Lagos to Ibadan - Evening Trains</h2>
//                         {eveningLagosToIbadanTrains.map((train, index) => (
//                             <div key={index} className="w-[335px] md:w-[81%] lg:w-11/12 container mx-auto shadow-md rounded-b-md">
//                                 <div className="font-semibold text-[16px] md:text-[20px] px-[39px] xl:text-[29px] text-center bg-[#E2F5E5] py-6 rounded-t-md">
//                                     <h1>{train.train_name}</h1>
//                                 </div>
//                                 <div className="lg:px-11 ">
//                                     <div>
//                                     <Hours schedule={train.schedule} />
//                                     </div>
//                                     <div className="border-b"></div>
//                                     <Class/>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </>
//             )}
//             {isIbadanToLagos && (
//                 <>
//                     <div className="space-y-11 mt-6">
//                         <h2 className="text-xl font-bold">Ibadan to Lagos - Morning Trains</h2>
//                         {morningIbadanToLagosTrains.map((train, index) => (
//                             <div key={index} className="w-[335px] md:w-[81%] lg:w-11/12 container mx-auto shadow-md rounded-b-md">
//                                 <div className="font-semibold text-[16px] md:text-[20px] px-[39px] xl:text-[29px] text-center bg-[#E2F5E5] py-6 rounded-t-md">
//                                     <h1>{train.train_name}</h1>
//                                 </div>
//                                 <div className="lg:px-11 ">
//                                     <div>
//                                     <Hours schedule={train.schedule} />
//                                     </div>
//                                     <div className="border-b"></div>
//                                     <Class/>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                     <div className="space-y-11 mt-6">
//                         <h2 className="text-xl font-bold">Ibadan to Lagos - Afternoon Trains</h2>
//                         {afternoonIbadanToLagosTrains.map((train, index) => (
//                             <div key={index} className="w-[335px] md:w-[81%] lg:w-11/12 container mx-auto shadow-md rounded-b-md">
//                                 <div className="font-semibold text-[16px] md:text-[20px] px-[39px] xl:text-[29px] text-center bg-[#E2F5E5] py-6 rounded-t-md">
//                                     <h1>{train.train_name}</h1>
//                                 </div>
//                                 <div className="lg:px-11 ">
//                                     <div>
//                                     <Hours schedule={train.schedule} />
//                                     </div>
//                                     <div className="border-b"></div>
//                                     <Class/>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                     <div className="space-y-11 mt-6">
//                         <h2 className="text-xl font-bold">Ibadan to Lagos - Evening Trains</h2>
//                         {eveningIbadanToLagosTrains.map((train, index) => (
//                             <div key={index} className="w-[335px] md:w-[81%] lg:w-11/12 container mx-auto shadow-md rounded-b-md">
//                                 <div className="font-semibold text-[16px] md:text-[20px] px-[39px] xl:text-[29px] text-center bg-[#E2F5E5] py-6 rounded-t-md">
//                                     <h1>{train.train_name}</h1>
//                                 </div>
//                                 <div className="lg:px-11 ">
//                                     <div>
//                                     <Hours schedule={train.schedule} />
//                                     </div>
//                                     <div className="border-b"></div>
//                                     <Class/>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </>
//             )}
//         </div>
//     );
// }

'use client'
import { useSearchStore } from "@/store/useSearchStore";
import SearchTrain from "@/components/reusables/search";
import Class from "@/components/transport/class";
import Hours from "@/components/transport/hours";
import trainData from "@/train.json"; // Import the JSON data

export default function Trip() {
    // Retrieve the persisted search state
    const { from, to } = useSearchStore();

    // Determine the direction of travel based on the sequence of stations
    const direction = trainData.trains.reduce((result, train) => {
        const fromIndex = train.schedule.findIndex(station => station.station_name === from);
        const toIndex = train.schedule.findIndex(station => station.station_name === to);

        if (fromIndex !== -1 && toIndex !== -1) {
            if (fromIndex > toIndex) {
                result = "Lagos-Ibadan";
            } else if (fromIndex < toIndex) {
                result = "Ibadan-Lagos";
            }
        }
        return result;
    }, "");

    // Debugging: Log the direction
    console.log("Direction:", direction);

    // Filter trains based on the direction and time of day
    const filteredTrains = trainData.trains.filter(train => 
        train.train_name && train.train_name.includes(direction)
    );

    const morningTrains = filteredTrains.filter(train => train.train_name.includes("Morning"));
    const afternoonTrains = filteredTrains.filter(train => train.train_name.includes("Afternoon"));
    const eveningTrains = filteredTrains.filter(train => train.train_name.includes("Evening"));

    return (
        <div className="space-y-11 mt-6">
            <SearchTrain
                w="w-[90%]"
                bg="bg-[#006B14]"
                gap="gap-8"
                btnBg="bg-[#FFFFFF]"
                inputPy="py-2"
                inputPadding="py-1.5"
                inputBg="bg-[#FFFFFF36]"
                inputBorder="border-2 border-[#FFFFFF61]"
                inputText="text-[#FFFFFF]"
                btnText="text-[#006B14]"
                inputW="w-full lg:w-[25%] xl:w-[25%]"
                btnWidth="w-full lg:w-[25%] xl:w-[20%]"
                py="pt-6 pb-6 lg:pt-8 lg:pb-12 xl:pt-10 xl:pb-14"
            />
            <div className="mt-4 text-center">
                <p>Search criteria: From: <strong>{from}</strong> | To: <strong>{to}</strong></p>
            </div>

            {/* Render Trains based on Direction */}
            {direction && (
                <>
                    <div className="space-y-11 mt-6">
                        <h2 className="text-xl font-bold">{direction} - Morning Trains</h2>
                        {morningTrains.map((train, index) => (
                            <div key={index} className="w-[335px] md:w-[81%] lg:w-11/12 container mx-auto shadow-md rounded-b-md">
                                <div className="font-semibold text-[16px] md:text-[20px] px-[39px] xl:text-[29px] text-center bg-[#E2F5E5] py-6 rounded-t-md">
                                    <h1>{train.train_name}</h1>
                                </div>
                                <div className="lg:px-11 ">
                                    <div>
                                        <Hours schedule={train.schedule} />
                                    </div>
                                    <div className="border-b"></div>
                                    <Class/>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="space-y-11 mt-6">
                        <h2 className="text-xl font-bold">{direction} - Afternoon Trains</h2>
                        {afternoonTrains.map((train, index) => (
                            <div key={index} className="w-[335px] md:w-[81%] lg:w-11/12 container mx-auto shadow-md rounded-b-md">
                                <div className="font-semibold text-[16px] md:text-[20px] px-[39px] xl:text-[29px] text-center bg-[#E2F5E5] py-6 rounded-t-md">
                                    <h1>{train.train_name}</h1>
                                </div>
                                <div className="lg:px-11 ">
                                    <div>
                                        <Hours schedule={train.schedule} />
                                    </div>
                                    <div className="border-b"></div>
                                    <Class/>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="space-y-11 mt-6">
                        <h2 className="text-xl font-bold">{direction} - Evening Trains</h2>
                        {eveningTrains.map((train, index) => (
                            <div key={index} className="w-[335px] md:w-[81%] lg:w-11/12 container mx-auto shadow-md rounded-b-md">
                                <div className="font-semibold text-[16px] md:text-[20px] px-[39px] xl:text-[29px] text-center bg-[#E2F5E5] py-6 rounded-t-md">
                                    <h1>{train.train_name}</h1>
                                </div>
                                <div className="lg:px-11 ">
                                    <div>
                                        <Hours schedule={train.schedule} />
                                    </div>
                                    <div className="border-b"></div>
                                    <Class/>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}