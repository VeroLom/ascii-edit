import {COLORS} from "../constants";
import styles from "./ColorSelector.module.css";
import useStore from "../store";

const ColorSelector = () => {
    const {currentColor, setCurrentColor} = useStore();

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