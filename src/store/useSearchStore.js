// import { create } from 'zustand';
// import { persist } from 'zustand/middleware';

// export const useSearchStore = create(
//   persist(
//     (set) => ({
//       from: '',
//       to: '',
//       date: '',
//       selectedClass: '',
//       passengers: [], // Initialize passengers with default values
//       setFrom: (from) => set({ from }),
//       setTo: (to) => set({ to }),
//       setDate: (date) => set({ date }),
//       setSelectedClass: (cls) => set({ selectedClass: cls }),
//       setPassengers: (passengers) => set({ passengers }), // Add setPassengers function
//     }),
//     {
//       name: 'search-storage',
//       getStorage: () => localStorage,
//       onRehydrateStorage: () => (state) => {
//         console.log("Hydrating state:", state);
//       },
//     }
//   )
// );

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useSearchStore = create(
  persist(
    (set) => ({
      from: '',
      to: '',
      date: '',
      selectedClass: '', // Store class name
      passengers: [], // Initialize passengers with default values
      setFrom: (from) => set({ from }),
      setTo: (to) => set({ to }),
      setDate: (date) => set({ date }),
      setSelectedClass: (cls) => set((state) => {
        // Clear passenger details, coach, and seat when a new class is selected
        if (state.selectedClass !== cls) {
          return {
            selectedClass: cls,
            passengers: []
          };
        }
        return { selectedClass: cls };
      }),
      setPassengers: (passengers) => set({ passengers }), // Add setPassengers function
      resetAll: () => set({
        from: '',
        to: '',
        date: '',
        selectedClass: '',
        passengers: []
      }), // Add resetAll function to reset all states
    }),
    {
      name: 'search-storage',
      getStorage: () => localStorage,
      onRehydrateStorage: () => (state) => {
        console.log("Hydrating state:", state);
      },
    }
  )
);