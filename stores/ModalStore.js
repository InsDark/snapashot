import {create} from 'zustand'
export const ModalStore = create(set => ({
    modalVisible: false,
    setModalVisible: (visible) => set({modalVisible: visible})
}))