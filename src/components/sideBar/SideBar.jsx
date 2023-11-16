import logo from '../../assets/Logo (1).png'
import Menu from './Menu'
import styles from './SideBar.module.css'

import logout from '../../assets/Logout.png'

import { Link } from 'react-router-dom';
const SideBar = () => {
    return (
        <div className={styles.sidebar}>
            <img src={logo} alt="logo image" />
            <Menu />
            <Link to='/signIn'>
                <div className={styles.logout}>
                    <img src={logout} alt="" />
                    Logout
                </div>
            </Link>
        </div>
    )
}

export default SideBar
