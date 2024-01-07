import {create} from 'zustand';

const useStore = create((set) => ({
    currentColor: '#ffffff',
    setCurrentColor: (newCurrentColor) => set({ currentColor: newCurrentColor}),
    tableData: [],
    clearTableData: () => set({tableData: []}),
    setTableData: (newTableData) => set({ tableData: [...newTableData] }),
}));

export default useStore;