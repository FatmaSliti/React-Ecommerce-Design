import styles from './Card.module.css';
function Card({ image, title, price }) {
    return (
        <div className={styles.card}>
            <img src={image} alt="" />
            <p>{title}</p>
            <p>{price}</p>
        </div>
    )
}

export default Card
