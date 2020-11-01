import React from 'react';
import './Services.css';

const Services = () => {
    return (
        <section class="services section">
            <div className="container">
                <p class="section-subtitle text-center">What I Offer</p>
                <h2 class="section-title mb-5">My Services</h2>

                <div class="row">
                    <div className="col-md-6 col-lg-4 col-sm-12">
                        <div class="services__content">
                            <i class="bx bx-code services__icon"></i>
                            <h3 class="services__title">Web Design</h3>
                            <p class="services__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, cum magnam animi in quo officia?</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-sm-12">
                        <div class="services__content">
                            <i class="bx bx-server services__icon"></i>
                            <h3 class="services__title">Web Development</h3>
                            <p class="services__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, cum magnam animi in quo officia?</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-sm-12">
                        <div class="services__content">
                            <i class='bx bxl-wordpress services__icon' ></i>
                            <h3 class="services__title">Wordpress Theme Customization</h3>
                            <p class="services__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, cum magnam animi in quo officia?</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 col-lg-4 col-sm-12">
                        <div class="services__content">
                            <i class='bx bx-search-alt-2 services__icon' ></i>
                            <h3 class="services__title">SEO</h3>
                            <p class="services__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, cum magnam animi in quo officia?</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-sm-12">
                        <div class="services__content">
                            <i class='bx bxs-pencil services__icon' ></i>
                            <h3 class="services__title">Teaching Code</h3>
                            <p class="services__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, cum magnam animi in quo officia?</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-sm-12">
                        <div class="services__content">
                            <i class='bx bx-code services__icon' ></i>
                            <h3 class="services__title">Responsive Design</h3>
                            <p class="services__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, cum magnam animi in quo officia?</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;