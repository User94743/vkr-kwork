import React, {useEffect, useState} from "react";
import styles from "../../styles/Location.module.scss";
import axios from "axios";
import {Category, Ticket} from "../../types/TypeProps";
import {useParams} from "react-router-dom";
import {useAppSelector} from "../../hooks/redux";
import {useActions} from "../../hooks/actions";


const Location: React.FC = () => {
    const {id, tickets} = useAppSelector(state => state.UserState)
    const {setTickets} = useActions()
    const {local} = useParams()
    const [data, setData] = useState<Category[]>([])

    useEffect(() => {
        axios.get('http://localhost:3001/categories').then(res => {
            setData(res.data[`${local}`])
        })
    }, [])

    const payTicket = () => {
        let dataToSend: Ticket[] = []
        axios.get('http://localhost:3001/locationsTime').then(res => {
          const dataLocal = res.data[0][`${local}`]
            console.log(dataLocal)
            return dataLocal
        }).then((dataLocal) => {

            const nd = new Date().toLocaleDateString()


            dataToSend = tickets.slice(0)
            dataToSend.push({
                id: tickets.length+1,
                name: dataLocal.name,
                dateEvent: dataLocal.dateEvent,
                datePurchase: nd
            })
            setTickets(dataToSend)
            axios.patch(`http://localhost:3001/users/${id}`, {
                tickets: dataToSend
            })
        })
    }

    return (
        <div className={styles.block}>
            {data.length > 0 && (
                <>
                    <button onClick={payTicket} className={styles.button}>Купить билет в данную локацию</button>
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