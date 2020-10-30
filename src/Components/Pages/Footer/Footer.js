import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="col-md-12 footer">
            <div class="container">
                <h1 class="footer__title">Mahadiul Hasan</h1>
                <p class="footer__description">You can follow me on -</p>

                <div>
                    <a href="https://www.facebook.com/Rasel567.R/" target="_blank" rel="noreferrer" class="footer__link"><i class="fab fa-facebook"></i></a>
                    <a href="https://github.com/Rasel5267" target="_blank" rel="noreferrer" class="footer__link"><i class="fab fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/mahadiul-hasan-0a243b1ba/" target="_blank" rel="noreferrer" class="footer__link"><i class="fab fa-linkedin"></i></a>
                </div>

                <p class="footer__copy">All rights reserved by Mahadiul - 2020</p>
            </div>
        </div>
    );
};

export default Footer;