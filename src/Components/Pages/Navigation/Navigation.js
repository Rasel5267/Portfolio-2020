import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
import Headroom from 'react-headroom';

const Navigation = () => {

    return (
        <Headroom style={{transition: 'all .5s ease-in-out'}}>
            <nav class="navbar navbar-expand-lg navbar-dark">
                <div className="container">
                    <Link className="brand__link navbar-brand"to="/">Portfo<span>lio.</span></Link>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item">
                                <Link className="link-item nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
                            </li>
                            <li class="nav-item">
                                <Link className="link-item nav-link" to="/about">About</Link>
                            </li>
                            <li class="nav-item">
                                <Link className="link-item nav-link" to="/projects">Projects</Link>
                            </li>
                            <li class="nav-item">
                                <Link className="link-item nav-link" to="/blogs">Blogs</Link>
                            </li>
                            <li class="nav-item">
                                <Link className="link-item nav-link" to="/contact">Contact</Link>
                            </li>
                            <li class="nav-item">
                                <Link className="link-item nav-link" to="/resume">Resume</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </Headroom>
    );
};

export default Navigation;