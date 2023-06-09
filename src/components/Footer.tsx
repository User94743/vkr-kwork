import React from "react";
import styles from "../styles/Footer.module.scss";
import Logo from "../images/logo.png"
import {Link} from "react-router-dom";

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.title}>Музей техники города Москва</div>
                <img className={styles.logo} src={Logo} />
                <div className={styles.links}>
                    <Link to={'/about'}>О музее</Link>
                    <Link to={'/timework'}>Время работы</Link>
                    <Link to={'/vacancies'}>Вакансии</Link>
                    <Link to={'/contacts'}>Контакты</Link>
                </div>

                <div className={styles.address}>
                    <p>
                        Адрес: г. Москва, ул. Примерная, 123
                        <br />
                        Телефон: +7 (999) 123-45-67
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;