import {create} from 'zustand'
export const navStore = create((set) => ({
    currentRoute: 'Home',
    setCurrentRoute: (newRoute) => {
        set({currentRoute: newRoute})}
}))