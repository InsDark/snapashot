import {create} from 'zustand'
export const navStore = create((set) => ({
    visible: 'false',
    currentRoute: 'Home',
    setCurrentRoute: (newRoute) => {
        set({currentRoute: newRoute})},
    setVisible: (isVisible) => set({visible: isVisible})
}
))