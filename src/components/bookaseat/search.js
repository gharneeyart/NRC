// 'use client';
// import { useSearchStore } from '@/store/useSearchStore';
// import { useState, useEffect } from 'react';
// import CoachModal from '../modal/coachModal';
// import { Classes } from '@/db';

// const Search = ({
//   selectedSeats,
//   setSelectedSeats,
//   passengers,
//   setPassengers,
// }) => {
//   const { selectedClass, setSelectedClass } = useSearchStore();
//   const [localClass, setLocalClass] = useState(selectedClass);
//   const [selectedCoach, setSelectedCoach] = useState('');
//   const [filteredCoaches, setFilteredCoaches] = useState([]);

//   useEffect(() => {
//     setLocalClass(selectedClass);
//   }, [selectedClass]);

//   // Filter coaches based on the selected class
//   useEffect(() => {
//     const filtered =
//       Classes.find((cls) => cls.class === localClass)?.coach || [];
//     setFilteredCoaches(filtered);
//   }, [localClass]);

//   // Handle class change event
//   const handleClassChange = (e) => {
//     const newClass = e.target.value;
//     setLocalClass(newClass);
//     setSelectedClass(newClass);
//     setSelectedCoach(''); // Reset coach selection when class changes
//   };

//   return (
//     <div className="mb-11">
//       <div className="">
//         <div className="lg:flex gap-12 w-full">
//           {/* Class */}
//           <div className="w-full">
//             <label className="font-medium md:text-lg text-base 2xl:text-lg lg:text-lg">
//               Class
//             </label>
//             <select
//               value={localClass}
//               onChange={handleClassChange}
//               className="border px-5 py-3 rounded-lg mt-3 mb-3 lg:mb-0 w-full h-12 text-[#848484]"
//             >
//               <option value="" disabled className="text-[#848484]">
//                 {selectedClass || 'Select Class'}
//               </option>
//               <option value="First Class">First Class</option>
//               <option value="Business Class">Business Class</option>
//               <option value="Standard Class">Standard Class</option>
//             </select>
//           </div>

//           {/* Coach */}
//           <div className="w-full">
//             <label className="font-medium md:text-lg text-base 2xl:text-lg lg:text-lg">
//               Coach
//             </label>
//             <select
//               value={selectedCoach}
//               onChange={(e) => setSelectedCoach(e.target.value)}
//               className="border px-5 py-3 rounded-lg mt-3 mb-3 lg:mb-0 w-full h-12 text-[#848484]"
//             >
//               <option value="" disabled className="text-[#848484]">
//                 Select Coach
//               </option>
//               {filteredCoaches.map((coach, index) => (
//                 <option key={index} value={coach}>
//                   {coach}
//                 </option>
//               ))}
//             </select>
//           </div>

//           {/* Seat */}
//           <div className="w-full flex flex-col gap-3">
//             <label className="font-medium md:text-lg text-base 2xl:text-lg lg:text-lg">
//               Seat
//             </label>
//             <div>
//               <CoachModal
//                 selectedSeats={selectedSeats}
//                 setSelectedSeats={setSelectedSeats}
//                 passengers={passengers}
//                 setPassengers={setPassengers}
//                 selectedCoach={selectedCoach}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Search;


// 'use client';
// import { useSearchStore } from '@/store/useSearchStore';
// import { useState, useEffect } from 'react';
// import CoachModal from '../modal/coachModal';
// // import { Classes } from '@/db';

// const Search = ({
//   selectedSeats,
//   setSelectedSeats,
//   passengers,
//   setPassengers,
// }) => {
//   const { selectedClass, setSelectedClass, selectedTrain } = useSearchStore();
//   const [localClass, setLocalClass] = useState(selectedClass);
//   const [selectedCoach, setSelectedCoach] = useState('');
//   const [filteredCoaches, setFilteredCoaches] = useState([]);
//   const [totalSeats, setTotalSeats] = useState(0); // State for totalSeats

//   useEffect(() => {
//     setLocalClass(selectedClass);
//   }, [selectedClass]);

//   // Filter coaches and set totalSeats based on the selected class
//   useEffect(() => {
//     const selectedClassData = train?.classes?.find((cls) => cls.class === localClass);
//     if (selectedClassData) {
//       setFilteredCoaches(selectedClassData.coach || []);
//       setTotalSeats(selectedClassData.totalSeats || 0); // Set totalSeats
//     }
//   }, [localClass]);

//   const handleClassChange = (e) => {
//     const newClass = e.target.value;
//     setLocalClass(newClass);
//     setSelectedClass(newClass);
//     setSelectedCoach(''); // Reset coach selection when class changes
//   };

//   return (
//     <div className="mb-11">
//       <div className="">
//         <div className="lg:flex gap-12 w-full">
//           {/* Class */}
//           <div className="w-full">
//             <label className="font-medium md:text-lg text-base 2xl:text-lg lg:text-lg">
//               Class
//             </label>
//             <select
//               value={localClass}
//               onChange={handleClassChange}
//               className="border px-5 py-3 rounded-lg mt-3 mb-3 lg:mb-0 w-full h-12 text-[#848484]"
//             >
//               <option value="" disabled className="text-[#848484]">
//                 {selectedClass || 'Select Class'}
//               </option>
//               <option value="First Class">First Class</option>
//               <option value="Business Class">Business Class</option>
//               <option value="Standard Class">Standard Class</option>
//             </select>
//           </div>

//           {/* Coach */}
//           <div className="w-full">
//             <label className="font-medium md:text-lg text-base 2xl:text-lg lg:text-lg">
//               Coach
//             </label>
//             <select
//               value={selectedCoach}
//               onChange={(e) => setSelectedCoach(e.target.value)}
//               className="border px-5 py-3 rounded-lg mt-3 mb-3 lg:mb-0 w-full h-12 text-[#848484]"
//             >
//               <option value="" disabled className="text-[#848484]">
//                 Select Coach
//               </option>
//               {filteredCoaches.map((coach, index) => (
//                 <option key={index} value={coach}>
//                   {coach}
//                 </option>
//               ))}
//             </select>
//           </div>

//           {/* Seat */}
//           <div className="w-full flex flex-col gap-3">
//             <label className="font-medium md:text-lg text-base 2xl:text-lg lg:text-lg">
//               Seat
//             </label>
//             <div>
//               <CoachModal
//                 selectedSeats={selectedSeats}
//                 setSelectedSeats={setSelectedSeats}
//                 passengers={passengers}
//                 setPassengers={setPassengers}
//                 selectedCoach={selectedCoach}
//                 totalSeats={totalSeats} // Pass totalSeats to CoachModal
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Search;

// 'use client';
// import { useSearchStore } from '@/store/useSearchStore';
// import { useState, useEffect } from 'react';
// import CoachModal from '../modal/coachModal';

// const Search = ({
//   selectedSeats,
//   setSelectedSeats,
//   passengers,
//   setPassengers,
//   selectedTrain, // Receive selectedTrain as a prop
// }) => {
//   const { selectedClass, setSelectedClass } = useSearchStore();
//   const [localClass, setLocalClass] = useState(selectedClass);
//   const [selectedCoach, setSelectedCoach] = useState('');
//   // const [filteredCoaches, setFilteredCoaches] = useState([]);
//   const [coaches, setCoaches] = useState([]); // State for coaches
//   const [totalSeats, setTotalSeats] = useState(0); // State for totalSeats

//   useEffect(() => {
//     setLocalClass(selectedClass);
//   }, [selectedClass]);

//   // Filter coaches and set totalSeats based on the selected class
//   // useEffect(() => {
//   //   if (selectedTrain) {
//   //     const selectedClassData = selectedTrain.classes.find(
//   //       (cls) => cls.type === localClass
//   //     );
//   //     if (selectedClassData) {
//   //       setFilteredCoaches(selectedClassData.coach || []);
//   //       setTotalSeats(selectedClassData.totalSeats || 0); // Set totalSeats
//   //     }
//   //   }
//   // }, [localClass, selectedTrain]);
//   useEffect(() => {
//     if (selectedTrain && localClass) {
//       // Find the selected class in the train data
//       const selectedClassData = selectedTrain.classes.find(
//         (cls) => cls.type === localClass
//       );

//       if (selectedClassData) {
//         // Determine the number of coaches based on the class
//         let coachNames = [];
//         switch (localClass) {
//           case 'First Class':
//             coachNames = ['C01'];
//             break;
//           case 'Business Class':
//             coachNames = ['C02', 'C03'];
//             break;
//           case 'Standard Class':
//             coachNames = ['C04', 'C05', 'C06', 'C07', 'C08'];
//             break;
//           default:
//             coachNames = [];
//         }
//          // Generate coach names dynamically (e.g., "C01", "C02", etc.)
//          const generatedCoaches = coachNames.map((name) => ({
//           name,
//           totalSeats: selectedClassData.totalSeats,
//         }));

//         setCoaches(generatedCoaches);
//         setTotalSeats(selectedClassData.totalSeats); // Set totalSeats for the selected class
//       }
//     }
//   }, [localClass, selectedTrain]);


//   const handleClassChange = (e) => {
//     const newClass = e.target.value;
//     setLocalClass(newClass);
//     setSelectedClass(newClass);
//     setSelectedCoach(''); // Reset coach selection when class changes
//   };

//   return (
//     <div className="mb-11">
//       <div className="">
//         <div className="lg:flex gap-12 w-full">
//           {/* Class */}
//           <div className="w-full">
//             <label className="font-medium md:text-lg text-base 2xl:text-lg lg:text-lg">
//               Class
//             </label>
//             <select
//               value={localClass}
//               onChange={handleClassChange}
//               className="border px-5 py-3 rounded-lg mt-3 mb-3 lg:mb-0 w-full h-12 text-[#848484]"
//             >
//               <option value="" disabled className="text-[#848484]">
//                 {selectedClass || 'Select Class'}
//               </option>
//               {selectedTrain?.classes.map((cls) => (
//                 <option key={cls.id} value={cls.type}>
//                   {cls.type}
//                 </option>
//               ))}
//             </select>
//           </div>

//           {/* Coach */}
//           <div className="w-full">
//             <label className="font-medium md:text-lg text-base 2xl:text-lg lg:text-lg">
//               Coach
//             </label>
//             <select
//               value={selectedCoach}
//               onChange={(e) => setSelectedCoach(e.target.value)}
//               className="border px-5 py-3 rounded-lg mt-3 mb-3 lg:mb-0 w-full h-12 text-[#848484]"
//             >
//               <option value="" disabled className="text-[#848484]">
//                 Select Coach
//               </option>
//               {coaches.map((coach, index) => (
//                 <option key={index} value={coach.name}>
//                   {coach.name}
//                 </option>
//               ))}
//             </select>
//           </div>

//           {/* Seat */}
//           <div className="w-full flex flex-col gap-3">
//             <label className="font-medium md:text-lg text-base 2xl:text-lg lg:text-lg">
//               Seat
//             </label>
//             <div>
//               <CoachModal
//                 selectedSeats={selectedSeats}
//                 setSelectedSeats={setSelectedSeats}
//                 passengers={passengers}
//                 setPassengers={setPassengers}
//                 selectedCoach={selectedCoach}
//                 totalSeats={totalSeats} // Pass totalSeats to CoachModal
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Search;


'use client';
import { useSearchStore } from '@/store/useSearchStore';
import { useState, useEffect } from 'react';
import CoachModal from '../modal/coachModal';

const Search = ({
  selectedSeats,
  setSelectedSeats,
  passengers,
  setPassengers,
  selectedTrain, // Receive selectedTrain as a prop
}) => {
  const { selectedClass, setSelectedClass, selectedCoach, setSelectedCoach } = useSearchStore();
  const [localClass, setLocalClass] = useState(selectedClass);
  const [coaches, setCoaches] = useState([]); // State for coaches
  const [totalSeats, setTotalSeats] = useState(0); // State for totalSeats

  useEffect(() => {
    setLocalClass(selectedClass);
  }, [selectedClass]);

  useEffect(() => {
    if (selectedTrain && localClass) {
      const selectedClassData = selectedTrain.classes.find(
        (cls) => cls.type === localClass
      );

      if (selectedClassData) {
        let coachNames = [];
        switch (localClass) {
          case 'First Class':
            coachNames = ['C01'];
            break;
          case 'Business Class':
            coachNames = ['C02', 'C03'];
            break;
          case 'Standard Class':
            coachNames = ['C04', 'C05', 'C06', 'C07', 'C08'];
            break;
          default:
            coachNames = [];
        }

        const generatedCoaches = coachNames.map((name) => ({
          name,
          totalSeats: selectedClassData.totalSeats,
        }));

        setCoaches(generatedCoaches);
        setTotalSeats(selectedClassData.totalSeats); // Set totalSeats for the selected class
      }
    }
  }, [localClass, selectedTrain]);

  const handleClassChange = (e) => {
    const newClass = e.target.value;
    setLocalClass(newClass);
    setSelectedClass(newClass);
    setSelectedCoach(''); // Reset coach selection when class changes
  };

  return (
    <div className="mb-11">
      <div className="">
        <div className="lg:flex gap-12 w-full">
          {/* Class */}
          <div className="w-full">
            <label className="font-medium md:text-lg text-base 2xl:text-lg lg:text-lg">
              Class
            </label>
            <select
              value={localClass}
              onChange={handleClassChange}
              className="border px-5 py-3 rounded-lg mt-3 mb-3 lg:mb-0 w-full h-12 text-[#848484]"
            >
              <option value="" disabled className="text-[#848484]">
                {selectedClass || 'Select Class'}
              </option>
              {selectedTrain?.classes.map((cls) => (
                <option key={cls.id} value={cls.type}>
                  {cls.type}
                </option>
              ))}
            </select>
          </div>

          {/* Coach */}
          <div className="w-full">
            <label className="font-medium md:text-lg text-base 2xl:text-lg lg:text-lg">
              Coach
            </label>
            <select
              value={selectedCoach}
              onChange={(e) => setSelectedCoach(e.target.value)}
              className="border px-5 py-3 rounded-lg mt-3 mb-3 lg:mb-0 w-full h-12 text-[#848484]"
            >
              <option value="" disabled className="text-[#848484]">
                Select Coach
              </option>
              {coaches.map((coach, index) => (
                <option key={index} value={coach.name}>
                  {coach.name}
                </option>
              ))}
            </select>
          </div>

          {/* Seat */}
          <div className="w-full flex flex-col gap-3">
            <label className="font-medium md:text-lg text-base 2xl:text-lg lg:text-lg">
              Seat
            </label>
            <div>
              <CoachModal
                selectedSeats={selectedSeats}
                setSelectedSeats={setSelectedSeats}
                passengers={passengers}
                setPassengers={setPassengers}
                selectedCoach={selectedCoach}
                totalSeats={totalSeats} // Pass totalSeats to CoachModal
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;