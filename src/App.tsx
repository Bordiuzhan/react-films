import './App.module.scss';
import { Outlet} from "react-router-dom";
import styles from "./App.module.scss"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
    return (
        <div className={styles.app}>
            <header className={styles.header}>
                <Navbar/>
            </header>
            <main>
                <Outlet/>
                <h> HELLO !!</h>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
}

export default App;