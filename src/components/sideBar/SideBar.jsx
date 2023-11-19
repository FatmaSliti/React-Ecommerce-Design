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







// export default SideNavBar;
// import { useState } from 'react';
// import '@trendmicro/react-sidenav/dist/react-sidenav.css';
// import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

// const SideNavBar = () => {
//     const [isVisible, setIsVisible] = useState(true);

//     return (
//         <SideNav
//             expanded={isVisible}
//             style={{
//                 backgroundColor: 'white', // Dark gray background
//                 color: 'black', // White text color
//                 width: isVisible ? '250px' : '64px',
//                 transition: 'width 0.2s ease'
//             }}
//         >
//             <Toggle
//                 onClick={() => setIsVisible(!isVisible)}
//                 style={{
//                     backgroundColor: 'blue', // Dark gray background
//                     color: 'white', // White text color
//                     padding: '10px',
//                     cursor: 'pointer'
//                 }}
//             />

//             <Nav defaultSelected="home">
//                 <NavItem eventKey="home" style={{ backgroundColor: 'white', color: 'black' }}> {/* Darker gray for the section */}
//                     <NavIcon>
//                         <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em', color: 'black' }} />
//                     </NavIcon>
//                     <NavText>Home</NavText>
//                 </NavItem>

//                 <NavItem eventKey="placed orders" style={{ backgroundColor: '#222' }}> {/* Darker gray for the section */}
//                     <NavIcon>
//                         <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
//                     </NavIcon>
//                     <NavText>Placed Orders</NavText>
//                 </NavItem>
//                 {/* Add more NavItems as needed */}
//             </Nav>
//         </SideNav>
//     );
// };

// export default SideNavBar;
