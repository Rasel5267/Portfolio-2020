import React from 'react';
import work1 from '../../../images/Work/work1.jpg';
import work2 from '../../../images/Work/work2.jpg';
import work3 from '../../../images/Work/work3.jpg';
import work4 from '../../../images/Work/work4.jpg';
import work5 from '../../../images/Work/work5.jpg';
import work6 from '../../../images/Work/work6.jpg';
import './Project.css';

const Projects = () => {
    return (
        <section class="works section" id="work">
            <div className="container">
                <p class="section-subtitle text-center">My Portfolio</p>
                <h2 class="section-title">Recent Works</h2>

                <div class="row">
                    <div className="col-md-4 col-sm-12">
                        <div class="works__img">
                            <img src={work1} alt="" />

                            <div class="works__data">
                                <a href="# " class="works__link"><i class="bx bx-link-alt"></i></a>
                                <span class="works__title">Creative Agency</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <div class="works__img">
                            <img src={work2} alt="" />

                            <div class="works__data">
                                <a href="# " class="works__link"><i class="bx bx-link-alt"></i></a>
                                <span class="works__title">Volunteer Network</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <div class="works__img">
                            <img src={work3} alt="" />

                            <div class="works__data">
                                <a href="# " class="works__link"><i class="bx bx-link-alt"></i></a>
                                <span class="works__title">TravelBD</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 col-sm-12">
                        <div class="works__img">
                            <img src={work4} alt="" />

                            <div class="works__data">
                                <a href="# " class="works__link"><i class="bx bx-link-alt"></i></a>
                                <span class="works__title">Ema-John</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <div class="works__img">
                            <img src={work5} alt="" />

                            <div class="works__data">
                                <a href="# " class="works__link"><i class="bx bx-link-alt"></i></a>
                                <span class="works__title">Hard Rock</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <div class="works__img">
                            <img src={work6} alt="" />

                            <div class="works__data">
                                <a href="# " class="works__link"><i class="bx bx-link-alt"></i></a>
                                <span class="works__title">Facebook</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;