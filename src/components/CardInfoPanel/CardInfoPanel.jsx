import PaymentCard from "./PaymentCard"

import styles from './CardInfoPanel.module.css';
import YourCart from "./YourCart";


const CardInfoPanel = () => {
    return (
        <>
            <div className={styles.infoPanel}>
                <PaymentCard />
                <YourCart />
            </div>
        </>
    )
}

export default CardInfoPanel
