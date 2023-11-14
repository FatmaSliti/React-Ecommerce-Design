import styles from "./Menu.module.css";

import icon from "../../assets/icon.png";
import cart from "../../assets/cartt.png";
import list from "../../assets/list.png";
import fav from "../../assets/fav.png";
import profile from "../../assets/profile.png";
import settings from "../../assets/settings.png";
import support from "../../assets/support.png";

import { Link } from "react-router-dom";

const Menu = () => {
    return (
        <ul className={styles.menu}>
            <div className={`${styles.element} ${styles.dashboard}`}>
                <img src={icon} alt="" />
                <li>Dashboard</li>
            </div>
            <div className={styles.element}>
                <img src={profile} alt="" />
                <li>
                    <Link to="/Profile">Profile</Link>
                </li>
            </div>
            <div className={styles.element}>
                <img src={list} alt="" />
                <li>
                    <Link to="/listing">Listing</Link>
                </li>
            </div>
            <div className={styles.element}>
                <img src={cart} alt="" />
                <li>
                    <Link to="/">My Cart</Link>
                </li>
            </div>
            <div className={styles.element}>
                <img src={fav} alt="" />
                <li>
                    <Link to="/">Favorite</Link>
                </li>
            </div>
            <div className={styles.element}>
                <img src={support} alt="" />
                <li>
                    <Link to="/support">Support</Link>
                </li>
            </div>
            <div className={styles.element}>
                <img src={settings} alt="" />
                <li>
                    <Link to="">Settings</Link>
                </li>
            </div>
            {/* <div className={styles.element}>
                <img src={settings} alt="" />
                <li>
                    <Link to='/signin'>Sign In</Link>
                </li>
            </div> */}
        </ul>
    );
};

export default Menu;
