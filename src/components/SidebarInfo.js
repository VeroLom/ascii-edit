import React from 'react';
import useStore from "../store";
import styles from "./SidebarInfo.module.css";

const SidebarInfo = () => {
    const {selectedCell, getTableSize} = useStore();

    return (
        <div className={styles.info}>
            <p>Size: {getTableSize()[0]}x{getTableSize()[1]}</p>
            <p>Coord: {selectedCell[0] + 1}:{selectedCell[1] + 1}</p>
        </div>
    );
};

export default SidebarInfo;