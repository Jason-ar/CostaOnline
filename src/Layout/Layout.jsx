import React from 'react';
import { Header } from '../Components/Global/Header';
//let obj = { a: '1' }
//expect(obj).toEqual({ a: '1' })';

const Layout = ({ children }) => {
    return (
        <div className='Layout'>
            <Header />
            {children}
        </div>
    );
}

export {Layout};