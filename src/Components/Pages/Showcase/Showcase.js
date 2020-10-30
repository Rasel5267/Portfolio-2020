import React from 'react';
import { Link } from 'react-router-dom';
import './Showcase.css';

const Showcase = () => {
    return (
        <div className="Showcase">
            <div className="wrapper">
                <div id="stars"></div>
                <div id="stars2"></div>
                <div id="stars3"></div>
                <div id="title">
                    <p>Hi I'm</p>
                    <h1>Mahadiul Hasan</h1>
                    <p>I'm a <span>Web Developer</span></p>
                    <button className="btn"><Link to="/resume" className="resumeBtn">Download Resume</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Showcase;