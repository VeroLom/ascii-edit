import styles from "./Sidebar.module.css";
import ColorSelector from "./ColorSelector";
import SidebarInfo from "./SidebarInfo";

function Sidebar() {
    return (
        <aside className={styles.aside}>
            <SidebarInfo />
            <ColorSelector />
        </aside>
    )
}

export default Sidebar;