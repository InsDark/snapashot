import { create } from 'zustand'
export const navStore = create((set) => ({
    index: 0,
    setIndex: (index) => {
        set({ index })
    }
}
))