import React, { Component } from 'react';
import Typewriter from "typewriter-effect";
import './style.css'
const TypeWriterC = () => {

    return (
        <div className="type display-3">
            <span className="badge badge-dark type-font">
                <Typewriter className="type-font"
                    options={{
                        strings: ['Seive Algorithm', 'Searching Algorithms', 'Sorting Algorithms'],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </span>
        </div>
    );
}

export default TypeWriterC;