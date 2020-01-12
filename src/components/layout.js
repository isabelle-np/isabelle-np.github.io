import React from 'react';
import Footer from '../components/footer';
import Header from '../components/header';

export default ({ children }) => (
    <>
        <Header/>
        {children}
        <Footer/>
    </>
)