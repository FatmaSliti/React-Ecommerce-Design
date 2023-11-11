import styles from './Product.module.css'
const Product = (props) => {
    return (
        <li className={styles.product}>
            <h2>{props.title}</h2>
            <h3>{props.price}$</h3>
            <p>{props.description}</p>
        </li>
    )
}

export default Product
