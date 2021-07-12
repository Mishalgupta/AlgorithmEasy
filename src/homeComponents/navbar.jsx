import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import web from './images/logo.png'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
            <div className="logo-css">
                <img src={web} className="img-fluid logo-img" alt="home img" />
                <NavLink
                    exact className="navbar-brand"
                    to="/"
                >
                    Alogorithm Easy
                </NavLink>
            </div>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="about">
                        <NavLink exact className="nav-link color menu_active" to="/about">About <span className="sr-only">(current)</span></NavLink>
                    </li>
                </ul>
            </div>

        </nav>
    );
}

export default Navbar;