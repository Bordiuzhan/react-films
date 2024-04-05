import './App.module.scss';
import logo from "./logo.png"
import {Link, Outlet} from "react-router-dom";
import styles from "./App.module.scss"

function App() {
    return (
        <div className={styles.app}>
            <header className={styles.header}>
                <div className={styles.container}>
                    <Link to={"/"}>
                        <img src={logo} alt="Logo" className={styles.logo}/>
                    </Link>
                    <nav className={styles.menu}>
                        <ul className={styles.list}>
                            <li className={styles.item}><Link to={"/about"} className={styles.link}>About</Link></li>
                            <li className={styles.item}><Link to={"/movies"} className={styles.link}>Movies</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>
            <main>
                <Outlet/>
            </main>
        </div>
    );
}

export default App;