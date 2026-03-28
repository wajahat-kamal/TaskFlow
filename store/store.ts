import { create } from 'zustand'

interface StoreState {
    createTaskPopup: boolean
    toggleCreateTaskPopup: () => void
}

const useStore = create<StoreState>((set, get) => ({
    createTaskPopup: true,
    toggleCreateTaskPopup: () => set({ createTaskPopup: !get().createTaskPopup }),
}))

// export const isCreateTaskPopupOpen = useStore((state) => state.createTaskPopup)
// export const toggleCreateTaskPopup = useStore((state) => state.toggleCreateTaskPopup)
export default useStore;