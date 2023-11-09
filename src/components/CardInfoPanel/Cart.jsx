import styles from './Cart.module.css';

import dot from '../../assets/Icon - Dot.png'

function Cart({ image, title, price }) {
    return (
        <div className={styles.card}>
            <div className={styles.leftSide}>
                <img src={image} alt="" />
                <div>
                    <p>{title}</p>
                    <p>{price}</p>
                </div>
            </div>
            <div className={styles.rightSide}>
                <img src={dot} alt="" className={styles.dot} />
                <div className={styles.calcul} >
                    <button>-</button>
                    <div>01</div>
                    <button>+</button>
                </div>
            </div>
        </div>
    )
}

export default Cart
