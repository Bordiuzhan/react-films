import styles from "./Navbar.module.scss"
import {ReactComponent as Logo} from "../images/logo.svg"
import {ReactComponent as Loop} from "../images/loop.svg"
import {ReactComponent as Bel} from "../images/bel.svg"
import {Link, NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div className={styles.container}>
            <Link to={"/"} className={styles.logo}>
                <Logo/>
                <div>StreamVibe</div>
            </Link>
            <div className={styles.menu}>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <NavLink to={"/home"}
                                 className={({isActive}) => (isActive ? `${styles.link} ${styles.activeLink}` : styles.link)}
                        >Home</NavLink>
                    </li>
                    <li className={styles.item}>
                        <NavLink to={"/movies-and-shows"}
                                 className={({isActive}) => (isActive ? `${styles.link} ${styles.activeLink}` : styles.link)}>Movies &amp; Shows</NavLink>
                    </li>
                    <li className={styles.item}>
                        <NavLink to={"/support"}
                                 className={({isActive}) => (isActive ? `${styles.link} ${styles.activeLink}` : styles.link)}>Support</NavLink>
                    </li>
                    <li className={styles.item}>
                        <NavLink to={"/subscriptions"}
                                 className={({isActive}) => (isActive ? `${styles.link} ${styles.activeLink}` : styles.link)}>Subscriptions</NavLink>
                    </li>
                </ul>
            </div>
            <div className={styles.buttons}>
                <button className={styles.button}><Loop/></button>
                <button className={styles.button}><Bel/></button>
            </div>

        </div>
    );
};

export default Navbar;
