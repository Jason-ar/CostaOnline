import React from 'react';
import { EmployeesContainer } from '../../Containers/Work/EmployeesContainer';
import { Button } from 'react-bootstrap';
//import { Link } from "react-router-dom";
//import Button from '@mui/material/Button';
//import { Button } from 'react-bootstrap';


const Employees = () => {
    return (
        <div className="container text-center justify-content-center align-items-center h-100">
            <h1>Costa Empleos</h1>
            <br></br>
            <p>Subí tu perfil, encontrá trabajo más rápido.</p>
            <Button as="a" variant="primary" target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSepbuti9X4GA9yzEK_9nQ9l9rFFHB0JcUoUg08TbIhaOvp0Qg/viewform?usp=sf_link">
                Subir perfil
            </Button>
            <br></br>
            <br></br>
            <h3>Personas que estan buscando empleo</h3>
            <EmployeesContainer />
            <br></br>
        </div>
    );
}

export { Employees };