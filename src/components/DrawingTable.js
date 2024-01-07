import {useEffect} from "react";
import styles from "./DrawingTable.module.css";
import {initialTableData} from "../constants";
import useStore from "../store";

function DrawingTable() {
    const {
        currentColor,
        tableData, setTableData,
        selectedCell, setSelectedCell,
    } = useStore();

    const setCellValue = (row, col, char = undefined) => {
        char = char ? char : tableData[row][col][1];
        const newTableData = [...tableData];
        newTableData[row][col] = [currentColor, char];
        setTableData(newTableData);
    }

    const setSelectedCellValue = char => setCellValue(selectedCell[0], selectedCell[1], char);

    const isSelected = (rowIndex, colIndex) => rowIndex === selectedCell[0] && colIndex === selectedCell[1];
    const selectCell = (rowIndex, colIndex) => setSelectedCell([rowIndex, colIndex]);

    const handleKeyDown = (event) => {
        const key = event.key;
        console.log('* Key pressed:', key);

        switch (key) {
            case 'ArrowUp':
                if (selectedCell[0]) {
                    selectCell(selectedCell[0] - 1, selectedCell[1]);
                } else {
                    selectCell(tableData.length - 1, selectedCell[1]);
                }
                break;
            case 'ArrowDown':
                if (selectedCell[0] < tableData.length - 1) {
                    selectCell(selectedCell[0] + 1, selectedCell[1]);
                } else {
                    selectCell(0, selectedCell[1]);
                }
                break;
            case 'ArrowLeft':
                if (selectedCell[1]) {
                    selectCell(selectedCell[0], selectedCell[1] - 1);
                } else {
                    selectCell(selectedCell[0], tableData[0].length - 1);
                }
                break;
            case 'ArrowRight':
                if (selectedCell[1] < tableData[0].length - 1) {
                    selectCell(selectedCell[0], selectedCell[1] + 1);
                } else {
                    selectCell(selectedCell[0], 0);
                }
                break;
            case 'Delete':
                setSelectedCellValue(' ');
                break;
            case 'Home':
                selectCell(selectedCell[0], 0);
                break;
            case 'End':
                selectCell(selectedCell[0], tableData[0].length - 1);
                break;
            case 'PageUp':
                selectCell(0, selectedCell[1]);
                break;
            case 'PageDown':
                selectCell(tableData.length - 1, selectedCell[1]);
                break;
            default:
                if (key.length === 1) {
                    setSelectedCellValue(key);
                }
        }
    }

    const handleCellClick = (event, rowIndex, colIndex) => {
        if (event.ctrlKey) {
            selectCell(rowIndex, colIndex);
        } else {
            selectCell(rowIndex, colIndex);
            setCellValue(rowIndex, colIndex);
        }

    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);

        if(tableData.length === 0 || tableData[0].length === 0) {
            setTableData([...initialTableData]);
        }

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        }
    });

    return (
        <div className={styles.table}>
            {tableData.map((row, rowIndex) => (
                <div key={rowIndex} className={styles.row}>
                    {row.map((col, colIndex) => (
                        <div
                            key={colIndex}
                            className={`${styles.col} ${isSelected(rowIndex, colIndex) ? styles.active : ''}`}
                            onClick={(event) => handleCellClick(event, rowIndex, colIndex)}
                            style={{color: col[0]}}
                        >
                            {col[1]}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default DrawingTable;