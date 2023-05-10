import React, {useEffect, useState} from "react";
import styles from "../../styles/Location.module.scss";
import axios from "axios";
import {Category} from "../../types/TypeProps";
import {useParams} from "react-router-dom";

interface Props {
    data: {
        id: number;
        title: string;
        description: string;
        img: string | null;
        creator: string;
        yearCreate: number;
    };
}

const Location: React.FC = () => {
    const {local} = useParams()
    const [data, setData] = useState<Category[]>([])

    useEffect(() => {
        axios.get('http://localhost:3001/categories').then(res => {
            setData(res.data[`${local}`])
        })
    }, [])

    return (
        <div className={styles.block}>
            {data.length > 0 && (
                <>
                    <button className={styles.button}>Купить билет в эту локацию</button>
                    {data.map((item) => (
                        <div className={styles.model} key={item.id}>
                            {item.img && <img src={item.img} alt={item.title} />}
                            <div className={styles.info}>
                                <h3>{item.title}</h3>
                                <p className={styles.desc}>Описание</p>
                                <p>{item.description}</p>
                                <div className={styles.line}></div>
                                <p>Создатель: {item.creator} в {item.yearCreate}</p>
                            </div>
                        </div>
                    ))}
                </>
            )}
        </div>
    );
};

export default Location;