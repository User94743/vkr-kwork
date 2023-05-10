import React from 'react';
import {useAppSelector} from "./redux";
import {Outlet, Navigate} from "react-router-dom"

const PrivateRoute = () => {

    const {email} = useAppSelector(state => state.UserState)

    return (
        email ? <Outlet /> : <Navigate to={'/login'}/>
    );
};

export default PrivateRoute;