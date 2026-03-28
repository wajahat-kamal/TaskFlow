import { create } from 'zustand'

interface StoreState {
    createTaskPopup: boolean
    toggleCreateTaskPopup: () => void
}

const useStore = create<StoreState>((set, get) => ({
    createTaskPopup: false,
    toggleCreateTaskPopup: () => set({ createTaskPopup: !get().createTaskPopup }),
}))

export default useStore;