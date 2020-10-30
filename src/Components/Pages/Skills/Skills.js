import React from 'react';
import './Skills.css';

const Skills = () => {
    return (
        <section class="skills pb-5 section" id="skills">
            <div className="container">
                <p class="section-subtitle text-center">Why Choose Me</p>
                <h2 class="section-title">My expertise Area</h2>

                <div class="row">
                    <div class="skills__content col-md-6 col-sm-12">
                        <h3 class="skills__subtitle">Frontend</h3>

                        <div class="skills__data">
                            <span class="skills__name">HTML/CSS</span>
                            <span class="skills__number">85%</span>
                            <span class="skills__bar skills__html"></span>
                        </div>
                        <div class="skills__data">
                            <span class="skills__name">Bootstrap</span>
                            <span class="skills__number">90%</span>
                            <span class="skills__bar skills__bootstrap"></span>
                        </div>
                        <div class="skills__data">
                            <span class="skills__name">JavaScript</span>
                            <span class="skills__number">85%</span>
                            <span class="skills__bar skills__js"></span>
                        </div>
                        <div class="skills__data">
                            <span class="skills__name">React</span>
                            <span class="skills__number">90%</span>
                            <span class="skills__bar skills__react"></span>
                        </div>
                    </div>
                    <div class="skills__content col-md-6 col-sm-12">
                        <h3 class="skills__subtitle">Backend</h3>

                        <div class="skills__data">
                            <span class="skills__name">Firebase</span>
                            <span class="skills__number">80%</span>
                            <span class="skills__bar skills__firebase"></span>
                        </div>
                        <div class="skills__data">
                            <span class="skills__name">NodeJs</span>
                            <span class="skills__number">50%</span>
                            <span class="skills__bar skills__node"></span>
                        </div>
                        <div class="skills__data">
                            <span class="skills__name">MongoDB</span>
                            <span class="skills__number">60%</span>
                            <span class="skills__bar skills__mongodb"></span>
                        </div>
                        <div class="skills__data">
                            <span class="skills__name">ExpressJs</span>
                            <span class="skills__number">55%</span>
                            <span class="skills__bar skills__express"></span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;