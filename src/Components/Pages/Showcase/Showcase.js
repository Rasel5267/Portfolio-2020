import React from 'react';
import './Showcase.css';
import Typical from 'react-typical';
import Particles from 'react-particles-js';

const Showcase = () => {
    return (
        <div className="Showcase">
            <div className="wrapper">
                <Particles  />
                <div id="title">
                    <p>Hi I'm</p>
                    <h1>Mahadiul Hasan</h1>
                    <p>I'm a{' '}
                        <Typical
                            loop={Infinity}
                            wrapper="b"
                            steps={[
                                'Web Developer',
                                1000,
                                'Front-End Developer',
                                1000
                            ]}
                        />
                    </p>
                    <button className="btn"><a href="https://drive.google.com/file/d/1blipk6zAE8uxfwxKZTYM7wtokT9LT7zW/view?usp=sharing" target="_blank" rel="noreferrer" download className="resumeBtn">Download Resume</a></button>
                </div>
            </div>
        </div>
    );
};

export default Showcase;