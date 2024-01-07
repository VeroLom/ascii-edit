import useStore from "../store";
import {useState} from "react";
import styles from "./Menu.module.css";

const Menu = () => {
    const {setTableData, setSelectedCell} = useStore();
    const [width, setWidth] = useState(10);
    const [height, setHeight] = useState(10);

    function handleNewClick() {
        console.log("* New button clicked", width, height);
        let newTableData = [];

        for (let i = 0; i < height; i++) {
            let row = [];
            for (let j = 0; j < width; j++) {
                row.push(['#ffffff', 'X']);
            }
            newTableData.push(row);
        }

        setTableData([...newTableData]);
        setSelectedCell([0, 0]);
    }

    return (
        <div className={styles.menu}>
            <input type="number" value={width} onChange={(event) => setWidth(parseInt(event.target.value))}/>
            <input type="number" value={height} onChange={(event) => setHeight(parseInt(event.target.value))}/>
            <button
                onClick={() => handleNewClick()}>
                New
            </button>
         </div>
    );
};

export default Menu;
