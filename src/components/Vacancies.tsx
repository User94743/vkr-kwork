import React, {useEffect, useState} from "react";
import styles from "../styles/Vacancies.module.scss";
import axios from "axios";
import {Vacancy} from "../types/TypeProps"

const Vacancies: React.FC = () => {

    const [vacancies, setVacancies] = useState<Vacancy[]>([]);

    useEffect( () => {
        axios.get('http://localhost:3001/vacancies').then(res => {
            console.log(res.data)
            setVacancies(res.data)
        })
    }, [])

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Вакансии в нашем музее</h2>
            <div className={styles.vacancies}>
                {vacancies.map((vacancy) => (
                    <div className={styles.vacancy} key={vacancy.title}>
                        <img src={vacancy.image} alt={vacancy.title} />
                        <h3>{vacancy.title}</h3>
                        <p>{vacancy.experience}</p>
                        <p>{vacancy.description}</p>
                        <p>{vacancy.salary}</p>
                    </div>
                ))}
            </div>
            <div className={styles.photo}>
                <img src={"https://www.kadrof.ru/sites/default/files/illustrations/pr_manager.jpg"} alt="photo" />
                <p>Я - Настя, PR-менеджер музея техники, ответственная за подбор персонала. Если у вас есть соответствующие навыки и интерес к работе в нашем музее, пожалуйста, свяжитесь со мной по электронной почте pr@museum.ru или по телефону +79991234555 в рабочее время.</p>
            </div>
        </div>
    );
};

export default Vacancies;