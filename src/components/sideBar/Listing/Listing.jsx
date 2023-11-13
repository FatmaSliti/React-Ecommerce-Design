import { useEffect, useState } from 'react';
import styles from './Listing.module.css';
import ProductList from './ProductList';

function Listing() {

    const [data, setData] = useState([])
    const [visibleProducts, setVisibleProducts] = useState(7);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://fakestoreapi.com/products/')
            const data = await response.json();

            const transData = data.map(product => {
                return {
                    id: product.id,
                    title: product.title,
                    price: product.price,
                    description: product.description,
                }
            })
            setData(transData);
        }

        fetchData();

    }, [])
    // const displayedProducts = data.slice(0, 9);

    const loadMore = () => {
        setVisibleProducts(prevProducts => prevProducts + 5)
    }

    return (
        <div className={styles.listingContainer}>
            <h1>Listing</h1>
            <div className={styles.list}>
                <section>
                    <ProductList data={data} visibleProducts={visibleProducts} />

                    {visibleProducts < data.length && (
                        <button onClick={loadMore}>Show More ... </button>
                    )}
                </section>
            </div>
        </div>
    )
}

export default Listing
