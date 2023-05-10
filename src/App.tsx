import React, {FC, useEffect, useState} from 'react';
import {Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import './App.scss'
import Main from "./components/Main";
import Footer from "./components/Footer";
import TimeWork from "./components/TimeWork";
import Museum from "./components/AboutMuseum";
import Login from "./components/auth/Login";
import Registration from "./components/auth/Registraion";
import axios from "axios";
import {useActions} from "./hooks/actions";
import Cabinet from "./components/Cabinet";
import PrivateRoute from "./hooks/privateRoute";
import Location from "./components/Location/Location";
import Contacts from "./components/Contacts";

const App: FC = () => {
    const {addUser} = useActions()
    useEffect(() => {

        const accessToken = localStorage.getItem('accessToken');
        console.log(accessToken)

        axios.get('http://localhost:3001/users', {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })
            .then(response => {
                const user = response.data[0];
                console.log(user);
                addUser(user)
            })
            .catch(error => {
                console.log(error);
            });
    }, [])

  return (
      <>
          <Header />
          <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/timework" element={<TimeWork />} />
              <Route path="/about" element={<Museum />} />
              <Route path={"/login"} element={<Login />} />
              <Route path={"/registration"} element={<Registration />} />
              <Route path={"/location/:local"} element={<Location />} />
              <Route path={"/contacts"} element={<Contacts />} />
              <Route element={<PrivateRoute/>}>
                  <Route path={"/cabinet"} element={<Cabinet />} />
              </Route>
          </Routes>
          <Footer />
      </>
  );
};

export default App;
