import styles from './Menu.module.css'

import icon from '../../assets/icon.png'
import cart from '../../assets/cartt.png'
import list from '../../assets/list.png'
import fav from '../../assets/fav.png'
import profile from '../../assets/profile.png'
import settings from '../../assets/settings.png'
import support from '../../assets/support.png'

const Menu = () => {
    return (
        <ul className={styles.menu}>
            <div className={`${styles.element} ${styles.dashboard}`}>
                <img src={icon} alt="" />
                <li>Dashboard</li>
            </div>
            <div className={styles.element}>
                <img src={profile} alt="" />
                <li>Profile</li>
            </div><div className={styles.element}>
                <img src={list} alt="" />
                <li>Listing</li>
            </div><div className={styles.element}>
                <img src={cart} alt="" />
                <li>My Cart</li>
            </div><div className={styles.element}>
                <img src={fav} alt="" />
                <li>Favorite</li>
            </div><div className={styles.element}>
                <img src={support} alt="" />
                <li>Support</li>
            </div><div className={styles.element}>
                <img src={settings} alt="" />
                <li>Settings</li>
            </div>
        </ul>
    )
}

export default Menu
