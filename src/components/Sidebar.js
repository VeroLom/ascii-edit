import styles from "./Sidebar.module.css";
import ColorSelector from "./ColorSelector";

function Sidebar() {
    return (
        <aside className={styles.aside}>
            <ColorSelector />
        </aside>
    )
}

export default Sidebar;