import Card from './Card'
import styles from './OurProducts.module.css'

import Image from '../../assets/Images.png';

const Products = ({ title }) => {
    return (
        <>
            <div className={styles.header}>
                <p>{title}</p>
                <p>View All</p>
            </div>
            <div className={styles.body}>
                <div className={styles.className}>
                    <Card image={Image} title='Monitor 231' price='$986' />
                    <Card image={Image} title='Headphone NM12' price='$678' />
                    <Card image={Image} title='Mouse V1' price='$543' />
                    <Card image={Image} title='Keyboard K2' price='$299' />
                </div>
            </div>
        </>
    )
}

export default Products
