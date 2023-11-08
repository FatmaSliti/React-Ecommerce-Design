import styles from './SpecialCard.module.css';
function SpecialCard({ image, title, price }) {
    return (
        <div className={styles.card}>
            <img src={image} alt="" />
            <div>
                <p>{title}</p>
                <p>{price}</p>
            </div>
        </div>
    )
}

export default SpecialCard
