import { useEffect, useState } from 'react';
import styles from './AuthPage.module.css';

import { Link, Navigate, useNavigate } from 'react-router-dom';

const SignIn = () => {
    const navigate = useNavigate();
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');
    const [usersData, setUsersData] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://eshop-2013c-default-rtdb.firebaseio.com/signUp.json')
            const data = await response.json();
            console.log(data);
            setUsersData(data);
        }
        fetchData();
    }, [])

    const emailChangeHandler = (e) => {
        setEnteredEmail(e.target.value);
    }

    const passwordChangeHandler = (e) => {
        setEnteredPassword(e.target.value);
    }

    const signInHandler = (e) => {
        e.preventDefault();

        const user = Object.values(usersData).find(user => user.email === enteredEmail);

        if (user && user.password === enteredPassword) {
            console.log('Sign-in successful!');
            navigate('/root')
        } else {
            console.log('Invalid email or password');
        }
    }

    return (
        <div className={styles.authContainer}>
            <h2>Sign In</h2>
            <form onSubmit={signInHandler}>
                <div className={styles.formGroup}>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" placeholder="Enter your email" required onChange={emailChangeHandler} />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" placeholder="Enter your password" required onChange={passwordChangeHandler} />
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
