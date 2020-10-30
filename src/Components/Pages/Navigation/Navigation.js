import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {

    return (
        <div className="navigation">
            <Navbar collapseOnSelect expand="md" fixed className="nav__color">
                <div className="container">
                    <Navbar.Brand><Link className="brand__link"to="/">Portfo<span>lio.</span></Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" className="navBtn"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link><Link className="link-item" to="/">Home</Link></Nav.Link>
                            <Nav.Link><Link className="link-item" to="/about">About</Link></Nav.Link>
                            <Nav.Link><Link className="link-item" to="/projects">Projects</Link></Nav.Link>
                            <Nav.Link><Link className="link-item" to="/blogs">Blogs</Link></Nav.Link>
                            <Nav.Link><Link className="link-item" to="/contact">Contact</Link></Nav.Link>
                            <Nav.Link><Link className="link-item" to="/resume">Resume</Link></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        </div>
    );
};

export default Navigation;