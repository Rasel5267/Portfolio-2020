import React from 'react';
import './About.css';
import aboutImg from '../../../images/MyPic/profile.jpg';

const About = () => {
    return (
        <section class="about section" id="about">
            <div className="container">
                <p class="section-subtitle text-center">My intro</p>
                <h2 class="section-title text-center pb-5">About Me</h2>
                <div className="row">
                    <div class="about__container mb-5 col-md-6 col-sm-12">
                        <div class="about__data">
                            <p class="about__description">Hi, I'm a Web developer. Knowledgeable Web Development and Design
                            with expert knowledge of - <b>HTML,
                            CSS, Bootstrap, Java Script, Reactjs,
                            WordPress theme customization, nodejs, mongoDB, Firebase, Express.js . </b>
                            Also planning, designing and
                            implementing website structure
                            and navigation layouts. I’m a quick
                            learner also.
                            </p>
                            <img class="about__img" src={aboutImg} alt="" />
                        </div>
                    </div>
                    <div className="mb-5 col-md-6 col-sm-12">
                        <div class="about__information">
                            <h3 class="about__information-title">Information</h3>

                            <div class="about__information-data">
                                <i class="bx bx-user about__information-icon"></i>
                                <span>Mahadiul Hasan</span>
                            </div>
                            <div class="about__information-data">
                                <i class="bx bx-phone about__information-icon"></i>
                                <span>01773826249</span>
                            </div>
                            <div class="about__information-data">
                                <i class="bx bx-envelope about__information-icon"></i>
                                <span>mahadiulhasan49@gmail.com</span>
                            </div>
                        </div>
                        <div class="about__information">
                            <h3 class="about__information-title">Experience and support</h3>
        
                            <div class="about__information-data">
                                <i class="bx bx-medal about__information-icon"></i>
                                <div>
                                    <span class="about__information-subtitle">1 Year Practice Work Experience</span>
                                    <span class="about__information-subtitle-small">Experience</span>
                                </div>
                            </div>
                            <div class="about__information-data">
                                <i class="bx bx-briefcase about__information-icon"></i>
                                <div>
                                    <span class="about__information-subtitle">15 Project</span>
                                    <span class="about__information-subtitle-small">Completed</span>
                                </div>
                            </div>
                            <div class="about__information-data">
                                <i class="bx bx-support about__information-icon"></i>
                                <div>
                                    <span class="about__information-subtitle">Support</span>
                                    <span class="about__information-subtitle-small">Online 24/7</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;