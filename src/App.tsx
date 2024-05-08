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
                <div className={styles.container}>
                    <h1>App</h1>
                </div>
                <div className={styles.container}>
                    <h1>App</h1>
                </div>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
}

export default App;