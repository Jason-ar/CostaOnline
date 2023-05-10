import React from 'react';
import { HomeServiciosContainer } from '../Containers/Home/CardsContainer';
//import { Link } from "react-router-dom";
//import Button from '@mui/material/Button';
//import { Button } from 'react-bootstrap';


const Home = () => {
    return (
        <div className="container text-center justify-content-center align-items-center h-100">
            <h1>Costa Online</h1>
            <br></br>
            <p>Subí tu perfil laboral, contratá servicios y mucho más.</p>
            <HomeServiciosContainer />
        </div>
    );
}

export { Home };