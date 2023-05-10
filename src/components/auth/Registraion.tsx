import React from 'react';
import FormAuth from "./FormAuth";
import axios from "axios/index";

const Registration = () => {

    const handleSubmit = ( username: string, password: string) =>  {

        console.log(`Username: ${username}, Password: ${password}`);

    };

    return (
        <div>
            <FormAuth submit={handleSubmit} title={"Регистрация"} button={"Создать"} color={'gray'} />
        </div>
    );
};

export default Registration;