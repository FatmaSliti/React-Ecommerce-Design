import styles from './Profile.module.css';

import profileImage from '../../assets/fatmaaa.jpg'

const Profile = () => {
    const userData = {
        name: 'Fatma Sliti',
        email: 'fatmasliti289@gmail.com',
        address: '123 Main Street, Tunis, Tunisia',
        orders: [
            { id: 1, date: '2023-01-01', status: 'Shipped' },
            { id: 2, date: '2023-02-01', status: 'Delivered' },
        ],
        wishlist: ['Headphone', 'Mouse'],
    };

    return (
        <div className={styles.cont}>
        <div className={styles.profileContainer}>
            <h2 className={styles.sectionTitle}>Profile Information</h2>
            <p className={styles.profileName}>
                <strong>Name:</strong> {userData.name}
            </p>
            <p>
                <img src={profileImage} alt="fatma" className={styles.profileImage} />
            </p>
            <p>
                <strong>Email:</strong> {userData.email}
            </p>
            <p>
                <strong>Address:</strong> {userData.address}
            </p>

            <h2 className={styles.sectionTitle}>Order History</h2>
            <ul>
                {userData.orders.map((order) => (
                    <li key={order.id}>
                        Order #{order.id} - Date: {order.date}, Status: {order.status}
                    </li>
                ))}
            </ul>

            <h2 className={styles.sectionTitle}>Wishlist</h2>
            <ul>
                {userData.wishlist.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>

        </div>
        </div>

    );
};

export default Profile;
