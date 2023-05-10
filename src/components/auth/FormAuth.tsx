import React, { useState } from 'react';
import styles from '../../styles/Auth.module.scss';

interface LoginFormProps {
    submit: (username: string, password: string) => void
    title: string
    button: string
    color?: 'gray' | 'black' | 'white';
}

const FormAuth: React.FC<LoginFormProps> = ({ submit, title, button,color = 'gray' }) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className={`${styles.loginForm} ${styles[color]}`}>
            <h2>{title}</h2>
            <div className={styles.formGroup}>
                <label htmlFor="username">Логин</label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="password">Пароль</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
            </div>
            <button onClick={() => submit(username, password)} type="submit">{button}</button>
        </div>
    );
};

export default FormAuth;