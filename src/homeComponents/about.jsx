import React, { Component } from 'react';
import Navbar from '../homeComponents/navbar';
import Footer from '../homeComponents/footer';
import { Link } from 'react-router-dom';
import profile from './images/banner.jpg'
import './about.css'
const About = () => {
    const [header] = React.useState({
        subHeader: "About Me",
        text:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text.",
    });
    const [state] = React.useState([
        { id: 1, title: "Name:", text: "Jonathan Doe" },
        { id: 2, title: "Email:", text: "example@domain.com" },
        { id: 3, title: "Phone:", text: "+1 023 454 345" },
        { id: 4, title: "Linkedin", text: "Jonathan_123" },
    ]);
    return (
        <>
            <Navbar />
            <div className="container-fluid main_header">
                <div className="row">
                    <div className="col-md-10 col-12 mx-auto">
                        <div className="row">
                            <div className="col-md-6 col-12 main_header_right align-items-center">
                                <figure>
                                    <img src={profile} alt="mishalimg" class="img-fluid" title="mishal gupta" />
                                </figure>
                            </div>
                            <div className="col-md-6 col-12 main_header_left">
                                <h1>I am Mishal Gupta .... <br /><span class="text_clr">Mern stack developer </span><br /> & a Java Programmer</h1>
                                <a href="https://www.linkedin.com/in/mishal-gupta-42550a194" target="_blank">  <button>Hire me</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default About;



