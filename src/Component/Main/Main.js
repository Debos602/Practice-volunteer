import React from 'react';
import NavBar from '../NavBar/NavBar';
import { Outlet } from 'react-router-dom';
import './Main.css';
import Image from '../../assets/images/6.jpg'

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;