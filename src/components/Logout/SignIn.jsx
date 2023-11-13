import styles from './AuthPage.module.css';

import { Link } from 'react-router-dom';

const SignIn = () => {
    return (
        <div className={styles.authContainer}>
            <h2>Sign In</h2>
            <form>
                <div className={styles.formGroup}>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" placeholder="Enter your email" required />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" placeholder="Enter your password" required />
                </div>
                <div className={styles.buttons}>
                    <button type="submit">Sign In</button>
                    <Link to="/signup" >Sign Up</Link>
                </div>
            </form>
        </div>
    );
};

export default SignIn;
