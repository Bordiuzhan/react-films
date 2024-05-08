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
                <h1> HELLO 1!!</h1>
                <h1> HELLO !1!</h1>
                <h1> HELLO !!1</h1>
                <h1> BY !!1</h1>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
}

export default App;