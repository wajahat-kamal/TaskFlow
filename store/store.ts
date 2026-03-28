import { create } from 'zustand'

interface TaskUIState {
    isLoading: boolean
    isCreateTaskPopupOpen: boolean
    actions: {
        setIsLoading: (value: boolean) => void
        toggleCreateTaskPopup: () => void
    }
}

const useTaskUIStore = create<TaskUIState>((set, get) => ({
    isLoading: false,
    isCreateTaskPopupOpen: false,
    actions: {
        setIsLoading: (value) => set({ isLoading: value }),
        toggleCreateTaskPopup: () => set({ isCreateTaskPopupOpen: !get().isCreateTaskPopupOpen }),
    }
}))

export default useTaskUIStore

export const useIsLoading = () => useTaskUIStore((state) => state.isLoading)
export const useIsCreateTaskPopupOpen = () => useTaskUIStore((state) => state.isCreateTaskPopupOpen)
export const useTaskUIActions = () => useTaskUIStore((state) => state.actions)