import styles from './SpecialForYou.module.css'

import Image from '../../assets/Images.png'
import SpecialCard from './SpecialCard'

const SpecialForYou = () => {
    return (
        <>
            <div className={styles.special}>
                <p>Special For You</p>
                <p>View All</p>
            </div>
            <div className={styles.card}>
                <SpecialCard image={Image} title='Mouse x1' price='$543' />
                <SpecialCard image={Image} title='Headphone' price='$323' />
                <SpecialCard image={Image} title='Headphone' price='$323' />
                <SpecialCard image={Image} title='Headphone' price='$323' />
            </div>
        </>
    )
}

export default SpecialForYou
