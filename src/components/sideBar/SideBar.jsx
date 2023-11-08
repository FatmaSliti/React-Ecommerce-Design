import logo from '../../assets/Logo (1).png'
import Menu from './Menu'
import styles from './SideBar.module.css'

import logout from '../../assets/Logout.png'
const SideBar = () => {
    return (
        <div className={styles.sidebar}>
            <img src={logo} alt="logo image" />
            <Menu />
            <div className={styles.logout}>
                <img src={logout} alt="" />
                Logout
            </div>
        </div>
    )
}

export default SideBar
