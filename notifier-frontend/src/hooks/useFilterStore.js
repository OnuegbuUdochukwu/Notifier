import { create } from 'zustand'

const useFilterStore = create((set) => ({
    filter : "recorded",
    setFilter : (newFilter) => set({filter : newFilter}),
}))

export default useFilterStore;