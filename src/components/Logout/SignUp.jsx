import styles from './AuthPage.module.css';


const SignUp = () => {
    return (
        <div className={styles.authContainer}>
            <h2>Sign Up</h2>
            <form>
                <div className={styles.formGroup}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" placeholder="Enter your name" required />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" placeholder="Enter your email" required />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" placeholder="Enter your password" required />
                </div>

                <button className={styles.signupButton} type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default SignUp;
