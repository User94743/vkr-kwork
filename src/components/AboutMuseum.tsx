import React, {useEffect, useState} from "react";
import styles from "../styles/AboutMuseum.module.scss";
import axios from "axios";
import {AchievementProps} from '../types/TypeProps'



const Achievement: React.FC<AchievementProps> = ({
                                                     title,
                                                     description,
                                                     image,
                                                 }) => {
    return (
        <div className={styles.achievement}>
            <img src={image} alt={title} className={styles.achievementImage}/>
            <div className={styles.achievementContent}>
                <h3 className={styles.achievementTitle}>{title}</h3>
                <p className={styles.achievementDescription}>{description}</p>
            </div>
        </div>
    );
};

const Museum: React.FC = () => {

    const [achievements, setAchievements] = useState<AchievementProps[]>([])

    useEffect(() => {
        axios.get('http://localhost:3001/achievements').then(res => {
            console.log(res.data)
            setAchievements(res.data)
        })
    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>Информация о нас</h1>
            </div>
            <div className={styles.content}>
                <div className={styles.left}>
                    <p className={styles.leftText}>Мы представляем коллекцию из более чем 1000 экспонатов, которые охватывают разные эпохи и культуры. В нашем музее вы можете узнать больше о истории и культуре нашей страны.</p>
                    <img src={"https://www.частныемузеи.рф/wp-content/uploads/2019/07/Zadoroznyi-3-1024x682.jpg"} alt="" className={styles.leftImage} />
                </div>
                <div className={styles.right}>
                    <img src={"https://captour.ru/wp-content/uploads/2019/06/vertolotnyy-tur-v-muzey-tekhnika-vadim-zadorozhnyy-700x490.jpg"} alt="" className={styles.rightImage} />
                    <p className={styles.rightText}>Наша миссия - сохранить историю и культуру нашей страны для будущих поколений. Мы постоянно работаем над тем, чтобы улучшить нашу коллекцию и сделать наш музей более интерактивным и интересным для посетителей.</p>
                </div>
            </div>
            <div className={styles.achievements}>
                <h2 className={styles.achievementsTitle}>Достижения</h2>
                <div className={styles.achievementsList}>
                    {achievements.map((achievement) => (
                        <Achievement key={achievement.title} {...achievement} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Museum;