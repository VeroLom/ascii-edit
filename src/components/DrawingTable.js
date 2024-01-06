import {useEffect, useState} from "react";
import styles from "./DrawingTable.module.css";
import {useAppContext} from "../context";

const initialTableData = [
    ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X' ],
    ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X' ],
    ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X' ],
    ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X' ],
    ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X' ],
    ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X' ],
    ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X' ],
    ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X' ],
    ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X' ],
    ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X' ],
    ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o' ],
];

function DrawingTable() {
    const {currentColor, setCurrentColor, tableData, setTableData } = useAppContext();
    const [selectedCell, setSelectedCell] = useState([0, 0]);

    const setCellValue = (row, col, char) => {
        const newTableData = [...tableData];
        newTableData[row][col] = char;
        setTableData(newTableData);
    }

    const setSelectedCellValue = char => setCellValue(selectedCell[0], selectedCell[1], char);

    const isSelected = (rowIndex, colIndex) =>
        rowIndex === selectedCell[0] && colIndex === selectedCell[1];

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
            default:
                if (key.length === 1) {
                    setSelectedCellValue(key);
                }
        }
    }

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);

        if(tableData.length === 0 || tableData[0].length === 0) {
            setTableData(initialTableData);
        }

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        }
    }, [selectedCell, tableData, setTableData]);

    return (
        <div>
            <table className={styles.table}>
                <tbody>
                    {tableData.map((row, rowIndex) => (
                        <tr key={rowIndex} className={styles.row}>
                            {row.map((col, colIndex) => (
                                <td
                                    key={colIndex}
                                    className={`${styles.col} ${isSelected(rowIndex, colIndex) ? styles.active : ''}`}
                                    onClick={() => selectCell(rowIndex, colIndex)}
                                >
                                    {col}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default DrawingTable;