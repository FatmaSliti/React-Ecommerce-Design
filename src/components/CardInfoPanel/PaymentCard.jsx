import card from '../../assets/Card.png'

import styles from './PaymentCard.module.css'

const PaymentCard = () => {
    return (
        <div className={styles.payment}>
            <p>Payment Card</p>
            <img src={card} alt="" />
        </div>
    )
}

export default PaymentCard
