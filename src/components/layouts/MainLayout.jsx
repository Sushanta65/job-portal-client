import React from 'react';
import Navbar from '../Shared/Navbar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <>
         <Navbar></Navbar>
         <Outlet></Outlet>   
        </>
    );
};

export default MainLayout;