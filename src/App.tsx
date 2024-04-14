import './App.module.scss';
import { Outlet} from "react-router-dom";
import styles from "./App.module.scss"
import Navbar from "./components/Navbar";

function App() {
    return (
        <div className={styles.app}>
            <header className={styles.header}>
                <Navbar/>
            </header>
            <main>
                <Outlet/>
            </main>
        </div>
    );
}

export default App;