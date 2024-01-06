import {createContext, useContext, useState} from "react";

const AppContext = createContext();

export const useAppContext = () => {
    return useContext(AppContext);
};

export const AppProvider = ({children}) => {
    const [currentColor, setCurrentColor] = useState('#ffffff');
    const [tableData, setTableData] = useState([[]]);

    const contextValue = {
        currentColor,
        setCurrentColor,
        tableData,
        setTableData,
    };

    return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
};