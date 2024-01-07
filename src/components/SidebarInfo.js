import React from 'react';
import useStore from "../store";
import styles from "./SidebarInfo.module.css";

const SidebarInfo = () => {
    const {showGrid, setShowGrid, insertMode, selectedCell, getTableSize} = useStore();

    function toggleShowGrid() {
        setShowGrid(!showGrid);
    }

    return (
        <div className={styles.info}>
            <p>Size: {getTableSize()[0]}x{getTableSize()[1]}</p>
            <p>Coord: {selectedCell[0] + 1}:{selectedCell[1] + 1}</p>
            <p>Grid:&nbsp;
                <span className={`${styles.toggle} ${showGrid ? styles.on : ''}`}
                      onClick={() => toggleShowGrid()}
                >
                {showGrid ? 'ON' : 'OFF'}</span>
            </p>
            <p>Insert: {insertMode ? 'ON' : 'OFF'}</p>
        </div>
    );
};

export default SidebarInfo;