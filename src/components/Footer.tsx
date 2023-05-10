import React from "react";
import styles from "../styles/Footer.module.scss";
import Logo from "../images/logo.png"

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.title}>Музей техники города Москва</div>
                <img className={styles.logo} src={Logo} />
                <div className={styles.links}>
                    <a href="#">О музее</a>
                    <a href="#">Время работы</a>
                    <a href="#">Вакансии</a>
                    <a href="#">Контакты</a>
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