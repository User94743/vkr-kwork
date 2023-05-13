import '../styles/Header.scss'
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png"
import {useAppSelector} from "../hooks/redux";
import {useActions} from "../hooks/actions";
const Header: React.FC = () => {

    const {email} = useAppSelector(state => state.UserState)
    const {removeUser} = useActions()


    console.log("NOW - " + email)

    const ExitUser = () => {
        removeUser()
        localStorage.removeItem('accessToken')
    }

    return (
        <header className="header">
            <nav className="header__nav">
                <img className="header__logo" src={Logo}/>

                <ul className="header__nav-list">
                    <li className="header__nav-item">
                        <Link to="/" className="header__nav-link">
                            ГЛАВНАЯ
                        </Link>
                    </li>
                    <li className="header__nav-item">
                        <Link to="/about" className="header__nav-link">
                            О МУЗЕЕ
                        </Link>
                    </li>
                    <li className="header__nav-item">
                        <Link to="/timework" className="header__nav-link">
                            ВРЕМЯ РАБОТЫ
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className="header__buttons">
                {email ? <>
                    <Link to={'/cabinet'}><button className="header__button">{email}</button></Link>
                    <button onClick={ExitUser} className="header__button">Выйти</button>
                </> : <>
                    <Link to={'/login'}><button className="header__button">Авторизация</button></Link>
                    <Link to={'/registration'}><button className="header__button">Регистрация</button></Link>
                </>}

            </div>
        </header>
    );
};

export default Header;