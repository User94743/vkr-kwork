import React from "react";
import styles from "../styles/Timework.module.scss";

    const TimeWork: React.FC = () => {
    return (
        <div className={styles.container}>
                            <h2 className={styles.title}>Время работы музея</h2>
            <div className={styles.schedule}>
                <div className={styles.days}>
                    <div className={styles.day}>
                        <div className={styles.dayOfWeek}>Понедельник</div>
                        <div className={styles.time}>10:00 - 18:00</div>
                    </div>
                    <div className={styles.day}>
                        <div className={styles.dayOfWeek}>Вторник</div>
                        <div className={styles.time}>10:00 - 18:00</div>
                    </div>
                    <div className={styles.day}>
                        <div className={styles.dayOfWeek}>Среда</div>
                        <div className={styles.time}>10:00 - 18:00</div>
                    </div>
                    <div className={styles.day}>
                        <div className={styles.dayOfWeek}>Четверг</div>
                        <div className={styles.time}>10:00 - 20:00</div>
                    </div>
                    <div className={styles.day}>
                        <div className={styles.dayOfWeek}>Пятница</div>
                        <div className={styles.time}>10:00 - 18:00</div>
                    </div>
                    <div className={styles.day}>
                        <div className={styles.dayOfWeek}>Суббота</div>
                        <div className={styles.time}>10:00 - 18:00</div>
                    </div>
                    <div className={styles.day}>
                        <div className={styles.dayOfWeek}>Воскресенье</div>
                        <div className={styles.time}>10:00 - 16:00</div>
                    </div>
                </div>
                <div className={styles.imageContainer}>
                    <img className={styles.image} src={"https://warspot-asset.s3.amazonaws.com/articles/announces/000/004/668/source/26-168db8d057d68cf7294c70d3070cedcc.jpg"} alt="Museum" />
                </div>
            </div>

            <div className={styles.infoBlock}>
                <div className={styles.icon}>!</div>
                <div className={styles.text}>Иногда музей может закрыться на определенные дни, например, во время новогодних праздников или национальных праздников. Поэтому, если вы хотите посетить музей техники в определенный день, необходимо заранее уточнить его график работы.

                    Кроме того, возможно, что музей будет работать в другом режиме во время выставки или специального мероприятия. В таких случаях также следует проверить график работы и возможность посещения музея.</div>
            </div>

        </div>
    );
};

export default TimeWork;