import bullet from '../../assets/Image (1).png'
import vector from '../../assets/Vector.png'
import searchImage from '../../assets/Icon - Search.png'
import notifImage from '../../assets/Icon - Notification.png'

import styles from './Top.module.css';

const Top = () => {
    return (
        <div className={styles.top}>
            <div className={styles.leftSide}>
                <img src={bullet} alt="" />
                <p>Robert Fox</p>
                <img src={vector} alt="" />
            </div>
            <div className={styles.rightSide}>
                <img src={searchImage} alt="" />
                <img src={notifImage} alt="" />
            </div>
        </div>
    )
}

export default Top
