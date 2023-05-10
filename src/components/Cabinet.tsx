import React, {useEffect, useState} from 'react';
import styles from '../styles/Cabinet.module.scss';
import {useAppSelector} from "../hooks/redux";
import {Ticket} from "../types/TypeProps";
import axios from "axios";
import {useActions} from "../hooks/actions";





const PersonalAccount: React.FC = () => {

    const User = useAppSelector(state => state.UserState)
    const {addUser} = useActions()

    const [isEditing, setIsEditing] = useState(false);
    const [firstName, setFirstName] = useState(User.firstName);
    const [lastName, setLastName] = useState(User.lastName);
    const [middleName, setMiddleName] = useState(User.middleName);
    const [description, setDescription] = useState(User.description);

    useEffect(() => {
        setFirstName(User.firstName);
        setLastName(User.lastName);
        setMiddleName(User.middleName);
        setDescription(User.description);
    }, [User])

    const handleEditButtonClick = () => {
        setIsEditing(true);
    };

    const handleSaveButtonClick = () => {
        setIsEditing(false);
        // отправляем данные на сервер

        axios.patch(`http://localhost:3001/users/${User.id}`, {
            data: {
                firstName: firstName,
                lastName: lastName,
                middleName: middleName,
                description: description
            }
         }).then(res => addUser(res.data))
    };

    const handleCancelButtonClick = () => {
        setIsEditing(false);
        // восстанавливаем исходные значения
        setFirstName(User.firstName);
        setLastName(User.lastName);
        setMiddleName(User.middleName);
        setDescription(User.description);
    };

    const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFirstName(e.target.value);
    };

    const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLastName(e.target.value);
    };

    const handleMiddleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMiddleName(e.target.value);
    };

    const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(e.target.value);
    };

    return (
        <div className={styles.personalAccount}>
            <div className={styles.avatarContainer}>
                <img src={User.avatarSrc} alt="avatar" className={styles.avatar} />
            </div>
            <div className={styles.infoContainer}>
                <div className={styles.name}>
                    {isEditing ? (
                        <>
                            <input type="text" value={firstName} onChange={handleFirstNameChange} />
                            <input type="text" value={lastName} onChange={handleLastNameChange} />
                            <input type="text" value={middleName} onChange={handleMiddleNameChange} />
                        </>
                    ) : (
                        <>
                            {lastName} {firstName} {middleName}
                        </>
                    )}
                </div>
                <div className={styles.description}>
                    {isEditing ? (
                        <textarea value={description} onChange={handleDescriptionChange} />
                    ) : (
                        <div>{description}</div>
                    )}
                </div>
                {isEditing ? (
                    <div className={styles.buttons}>
                        <button onClick={handleSaveButtonClick}>Сохранить</button>
                        <button onClick={handleCancelButtonClick}>Отмена</button>
                    </div>
                ) : (
                    <button onClick={handleEditButtonClick}>Редактировать</button>
                )}
            </div>
            <div className={styles.ticketsContainer}>
                <div className={styles.ticketsTitle}>Купленные билеты:</div>
                <div className={styles.ticket}>
                    <div className={styles.ticketName}>Наименование выставки</div>
                    <div className={styles.ticketName}>Дата события</div>
                    <div className={styles.ticketDate}>Дата покупки</div>
                </div>
                {User.tickets.map((ticket: Ticket) => (
                    <div className={styles.ticket} key={ticket.id}>
                        <div className={styles.ticketName}>{ticket.name}</div>
                        <div className={styles.ticketName}>{ticket.dateEvent}</div>
                        <div className={styles.ticketDate}>{ticket.datePurchase}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PersonalAccount;