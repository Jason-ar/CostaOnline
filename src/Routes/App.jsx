import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '../Layout/Layout'
import { Home } from '../Pages/Home';
import { Employees } from '../Pages/Work/Employees';




const App = () => {
    return (
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />;
            <Route path='/busqueda-empleos' element={<Employees />} />;
          </Routes>
        </Layout>                                                                                                                                     
      </BrowserRouter>
    );
  };
  
  export { App };