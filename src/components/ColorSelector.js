import {COLORS} from "../constants/colors";
import styles from "./ColorSelector.module.css";
import {useAppContext} from "../context";

const ColorSelector = () => {
    const {currentColor, setCurrentColor} = useAppContext();



    return (
        <div className={styles.colors}>
            {Object.keys(COLORS).map(color =>
                <div
                    key={color}
                    className={`${styles.color} ${color === currentColor ? styles.active : ''}`}
                    style={{background: color}}
                    onClick={() => setCurrentColor(color)}
                ></div>
            )}
        </div>
    );
};

export default ColorSelector;