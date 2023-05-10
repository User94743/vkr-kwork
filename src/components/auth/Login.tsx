import React from 'react';
import FormAuth from "./FormAuth";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {useActions} from "../../hooks/actions";
const Login = () => {

    const navigate = useNavigate();
    const {addUser} = useActions()
    const handleSubmit = (username: string, password: string) =>  {
        console.log(`Username: ${username}, Password: ${password}`);

        axios.post('http://localhost:3001/login', {
            "email": `${username}`,
            "password": `${password}`
        }).then(res => {
            console.log(res.data)
            localStorage.setItem('accessToken', res.data.accessToken)
            addUser(res.data.user)
            navigate('/cabinet')
        }).catch(error => {
            console.log(error)
        })
    };

    return (
        <div>
            <FormAuth submit={handleSubmit}
                      button={"Войти"} color={"gray"} title={"Авторизация"} />
        </div>
    );
};

export default Login;