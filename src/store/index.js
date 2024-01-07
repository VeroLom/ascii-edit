import {create} from 'zustand';

const useStore = create((set, get) => ({
    insertMode: false,
    setInsertMode: (newInsertMode) => set({ insertMode: newInsertMode }),

    currentColor: '#ffffff',
    setCurrentColor: (newCurrentColor) => set({ currentColor: newCurrentColor}),

    tableData: [[]],
    setTableData: (newTableData) => set({ tableData: [...newTableData] }),
    getTableSize: () => {
        const { tableData } = get();
        return [tableData.length, tableData[0]?.length];
    },

    selectedCell: [0, 0],
    setSelectedCell: (newSelectedCell) => set({ selectedCell: [...newSelectedCell]}),
}));

export default useStore;