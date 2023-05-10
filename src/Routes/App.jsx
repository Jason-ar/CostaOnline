import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../Pages/Home';
import { Layout } from '../Layout/Layout'



const App = () => {
    return (
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />;
          </Routes>
        </Layout>                                                                                                                                     
      </BrowserRouter>
    );
  };
  
  export { App };