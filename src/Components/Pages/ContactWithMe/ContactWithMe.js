import React from 'react';
import { Link } from 'react-router-dom';

function ContactWithMe(){
    return (
        <div className="section pb-3">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 ml-auto mr-auto">
                        <h1 className="text-center section-title mb-5">Contact with Me..</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="ml-auto mr-auto mb-5">
                        <button className="projectBtn  btn"><Link className="link" to="/contact">Contact Me</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactWithMe;