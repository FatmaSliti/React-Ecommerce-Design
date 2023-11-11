import Product from "./Product";

import styles from './ProductList.module.css';

function ProductList(props) {
    return (
        <ul className={styles.products}>
            {props.data.slice(0, props.visibleProducts).map((product) => (
                <Product
                    key={product.id}
                    title={product.title}
                    price={product.price}
                    description={product.description}
                />
            ))}
        </ul>
    );
}

export default ProductList;
