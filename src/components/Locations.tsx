import React, {useEffect, useState} from 'react';
import  styles from '../styles/Locations.module.scss';
import axios from "axios";
import {Link} from "react-router-dom";
interface Location {
    id: number
    img: string
    name: string
    title: string
}


const Locations: React.FC = () => {
    const [locations, setLocations] = useState<Location[]>([])

    useEffect(() => {
        axios.get('http://localhost:3001/technique').then(res => {
            console.log(res.data)
            setLocations(res.data)
        })
    }, [])

    return (
        <div className={styles.locations}>
            <h2 className={styles.locations__title}>Локации</h2>
            <div className={styles.locations__list}>
                {locations.map((location) => (

                        <div className={styles.locations__item} key={location.name}>
                            <Link to={`/location/${location.name}` }>
                            <img src={require(`../images/${location.img}`)}  alt={location.name} />
                            <div className={styles.locations__item__name}>{location.title}</div>
                            </Link>
                        </div>


                ))}
            </div>
        </div>
    );
};

export default Locations;