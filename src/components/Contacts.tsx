import React from 'react';
import styles from '../styles/Contacts.module.scss';

const Contacts: React.FC = () => {
    return (
        <div className={styles.contacts}>
            <h2 className={styles.title}>Контакты</h2>
            <div className={styles.wrapper}>
                <div>
                    <iframe className={styles.map}
                        src="https://yandex.ru/map-widget/v1/?um=constructor%3A9591dbba050d36a3e851948ca04a7a9d4226bec453126bcd9a3c5ea56be5172a&amp;source=constructor"
                        width="600" height="600" frameBorder="0"></iframe>

                </div>
                <div className={styles.info}>
                    <p className={styles.text}>Наш музей техники располагается в удобном месте, которое вы можете легко найти с помощью Яндекс
                        Карт. Если же у вас возникнут трудности с поиском нашего музея, вы всегда можете связаться с
                        нами по телефону и уточнить местоположение.</p>
                    <p className={styles.address}>Адрес: г. Москва, ул. Примерная, 123</p>
                    <p className={styles.phone}>Телефон: +7 (999) 123-45-67</p>
                </div>
            </div>
        </div>
    );
};

export default Contacts;