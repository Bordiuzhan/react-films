import React from 'react';
import {Link} from "react-router-dom";
import styles from "./Footer.module.scss"
import {Facebook, LinkedIn, Twitter} from "../images";

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <h3 className={styles.title}>Home</h3>
                    <ul className={styles.links}>
                        <li><Link to={"/"} className={styles.link}>Categories</Link></li>
                        <li><Link to={"/"} className={styles.link}>Devices</Link></li>
                        <li><Link to={"/"} className={styles.link}>Pricing</Link></li>
                        <li><Link to={"/"} className={styles.link}>FAQ</Link></li>
                    </ul>
                </div>
                <div className={styles.wrapper}>
                    <h3 className={styles.title}>Movies</h3>
                    <ul className={styles.links}>
                        <li><Link to={"/"} className={styles.link}>Gernes</Link></li>
                        <li><Link to={"/"} className={styles.link}>Trending</Link></li>
                        <li><Link to={"/"} className={styles.link}>New Release</Link></li>
                        <li><Link to={"/"} className={styles.link}>Popular</Link></li>
                    </ul>
                </div>
                <div className={styles.wrapper}>
                    <h3 className={styles.title}>Shows</h3>
                    <ul className={styles.links}>
                        <li><Link to={"/"} className={styles.link}>Gernes</Link></li>
                        <li><Link to={"/"} className={styles.link}>Trending</Link></li>
                        <li><Link to={"/"} className={styles.link}>New Release</Link></li>
                        <li><Link to={"/"} className={styles.link}>Popular</Link></li>
                    </ul>
                </div>
                <div className={styles.wrapper}>
                    <h3 className={styles.title}>Support</h3>
                    <ul className={styles.links}>
                        <Link to={"/"} className={styles.link}>Contact Us</Link>
                    </ul>
                </div>
                <div className={styles.wrapper}>
                    <h3 className={styles.title}>Subscription</h3>
                    <ul className={styles.links}>
                        <li><Link to={"/"} className={styles.link}>Plans</Link></li>
                        <li><Link to={"/"} className={styles.link}>Features</Link></li>
                    </ul>
                </div>
                <div className={styles.wrapper_social}>
                    <div className={styles.title}>Connect With Us</div>
                    <ul className={styles.buttons}>
                        <Link to={"/"} className={styles.button}>
                            <Facebook/>
                        </Link>
                        <Link to={"/"} className={styles.button}>
                            <Twitter/>
                        </Link>
                        <Link to={"/"} className={styles.button}>
                            <LinkedIn/>
                        </Link>
                    </ul>
                </div>
            </div>
            <div className={styles.copyright}>
                <div className={styles.content}>
                    <div className={styles.rights}>@2023 streamvib, All Rights Reserved</div>
                    <div className={styles.items}>
                        <Link to={"/"} className={styles.item}>Terms of Use</Link>
                        <Link to={"/"} className={styles.item}>Privacy Policy</Link>
                        <Link to={"/"} className={styles.item}>Cookie Policy</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;