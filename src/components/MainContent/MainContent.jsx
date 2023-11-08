import Top from "./Top"

import styles from './MainContent.module.css';
import CardPromotion from "./CardPromotion";
import OurProducts from "./OurProducts";
import SpecialForYou from "./SpecialForYou";
// import Products from "./Products";

const MainContent = () => {
    return (
        <main>
            <div className={styles.mainContent}>
                <Top />
            </div>
            <div>
                <CardPromotion />
            </div>
            <div>
                <OurProducts title='Our Products' />
            </div>
            <div><SpecialForYou /></div>
        </main>
    )
}

export default MainContent
