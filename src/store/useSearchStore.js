import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useSearchStore = create(
  persist(
    (set) => ({
      from: '',
      to: '',
      date: '',
      selectedClass: '', // add a field for the selected class
      setFrom: (from) => set({ from }),
      setTo: (to) => set({ to }),
      setDate: (date) => set({ date }),
      setSelectedClass: (cls) => set({ selectedClass: cls }),
    }),
    {
      name: 'search-storage',
    }
  )
);