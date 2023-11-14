import { Link } from 'react-router-dom';
import styles from './AuthPage.module.css';
import { useEffect, useState } from 'react';

const SignUp = () => {

    const [enteredName, setEnteredName] = useState('');
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');

    const nameChangeHandler = (e) => {
        setEnteredName(e.target.value);
    }

    const emailChangeHandler = (e) => {
        setEnteredEmail(e.target.value);
    }

    const passwordChangeHandler = (e) => {
        setEnteredPassword(e.target.value);
    }

    const fetchData = async (login) => {
        const response = await fetch('https://eshop-2013c-default-rtdb.firebaseio.com/signUp.json', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(login)

        });
        const data = await response.json();
        console.log(data);
    }


    const formSubmitHandler = (e) => {
        e.preventDefault();

        const login = {
            name: enteredName,
            email: enteredEmail,
            password: enteredPassword,
        }

        fetchData(login);

        setEnteredName('')
        setEnteredEmail('')
        setEnteredPassword('')
    }

    useEffect(() => {
        fetchData();
    }, [enteredName, enteredEmail, enteredPassword])

    return (
        <div className={styles.authContainer}>
            <h2>Sign Up</h2>
            <form onSubmit={formSubmitHandler}>
                <div className={styles.formGroup}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" placeholder="Enter your name" value={enteredName} required onChange={nameChangeHandler} />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" placeholder="Enter your email" value={enteredEmail} required onChange={emailChangeHandler} />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" placeholder="Enter your password" value={enteredPassword} required onChange={passwordChangeHandler} />
                </div>

                <button className={styles.signupButton} type="submit">Sign Up</button>
                <p className={styles.lastP}>Already signed up? <Link to='/signIn'>Login</Link></p>
            </form>
        </div>
    );
};

export default SignUp;
