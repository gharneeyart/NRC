import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// Define the store
const useSearchStore = create(
  persist(
    (set) => ({
      // State variables
      from: '',
      to: '',
      date: '',
      selectedClass: '',
      selectedCoach: '',
      selectedSeats: [],
      selectedTrain: null,
      timeOfDay: '',
      passengers: [],
      contactDetails: { email: '', phone: '' },

      // Actions to update state
      setFrom: (from) => set({ from }),
      setTo: (to) => set({ to }),
      setDate: (date) => set({ date }),
      setSelectedTrain: (selectedTrain) => set({ selectedTrain }),
      setSelectedSeats: (selectedSeats) => set({ selectedSeats }),
      setTimeOfDay: (timeOfDay) => set({ timeOfDay }),
      setSelectedCoach: (selectedCoach) => set({ selectedCoach }),
      setSelectedClass: (selectedClass) =>
        set((state) => {
          if (state.selectedClass !== selectedClass) {
            return {
              selectedClass,
              passengers: [], // Reset passengers when class changes
            };
          }
          return { selectedClass };
        }),
      setPassengers: (passengers) => set({ passengers }),
      setContactDetails: (contactDetails) => set({ contactDetails }),

      // Add a new passenger
      addPassenger: (passenger) =>
        set((state) => ({
          passengers: [...state.passengers, passenger],
        })),

      // Update a passenger by ID
      updatePassenger: (id, updatedPassenger) =>
        set((state) => ({
          passengers: state.passengers.map((passenger) =>
            passenger.id === id ? { ...passenger, ...updatedPassenger } : passenger
          ),
        })),

      // Remove a passenger by ID
      removePassenger: (id) =>
        set((state) => ({
          passengers: state.passengers.filter((passenger) => passenger.id !== id),
        })),

      // Reset all state variables
      resetAll: () =>
        set({
          from: '',
          to: '',
          date: '',
          selectedClass: '',
          selectedCoach: '',
          selectedSeats: [],
          selectedTrain: null,
          timeOfDay: '',
          passengers: [],
          contactDetails: { email: '', phone: '' },
        }),
    }),
    {
      name: 'search-storage', // Name for localStorage
      getStorage: () => localStorage, // Use localStorage for persistence
      onRehydrateStorage: () => (state) => {
        console.log('Hydrating state:', state); // Debugging: Log state after hydration
      },
    }
  )
);

export { useSearchStore };