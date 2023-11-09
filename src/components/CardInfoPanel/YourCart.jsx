import styles from './YourCart.module.css'

import SpecialCard from '../../components/MainContent/SpecialCard'

import Image from '../../assets/Images.png'
import Cart from './Cart'

function YourCart() {
    return (
        <div className={styles.yourCart}>
            <p>Your Cart</p>
            <p>3 ITEMS</p>
            <div className={styles.card}>
                <Cart image={Image} title='Mouse x1' price='$543' />
                <Cart image={Image} title='Headphone' price='$323' />
                <Cart image={Image} title='Headphone' price='$323' />
            </div>
            <div className={styles.total}>
                <div className={styles.topTotal}>
                    <p>Total</p>
                    <p>$1852</p>
                </div>
                <button>Checkout</button>
            </div>
        </div>
    )
}

export default YourCart
