import React from 'react';
import FormAuth from "./FormAuth";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {useActions} from "../../hooks/actions";

const Registration = () => {

    const navigate = useNavigate();
    const {addUser} = useActions()

    const handleSubmitRegister = async (username: string, password: string) => {

        console.log(`Username: ${username}, Password: ${password}`);
        await axios.post('http://localhost:3001/signup', {
            "email": `${username}`,
            "password": `${password}`
        }).then(async res => {
            console.log(res.data)
            await axios.patch(`http://localhost:3001/users/${res.data.user.id}`, {
                tickets: [],
                avatarSrc: "https://madlads.ru/files/avatars/1681492481.jpg",
                data: {
                    firstName: "",
                    lastName: "",
                    middleName: "",
                    description: "Я новый пользователь!"
                }
            }).then(res => {
                console.log(res.data)
                localStorage.setItem('accessToken', res.data.accessToken)
                addUser(res.data)
                navigate('/cabinet')
            })
        }).catch(error => {
            console.log(error)
        })

    };

    return (
        <div>
            <FormAuth submit={handleSubmitRegister} title={"Регистрация"} button={"Создать"} color={'gray'} />
        </div>
    );
};

export default Registration;