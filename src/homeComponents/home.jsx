import React, { Component } from 'react';
import Navbar from "./navbar";
import TypeWriterC from "./typewriter";
import Cards from "./cards";
import Footer from "./footer";

const Home = () => {
    return (
        <>
            <Navbar />
            <TypeWriterC />
            <Cards />
            <Footer />
        </>
    );
}

export default Home;