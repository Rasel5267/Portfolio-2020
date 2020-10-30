import React from 'react';
import './Resume.css';
import resume1 from '../../../images/resume/resume1.PNG';
import resume2 from '../../../images/resume/resume2.PNG';
import resume3 from '../../../images/resume/resume3.PNG';

const Resume = () => {
    return (
        <div className="resume">
            <div className="container">
                <h1 className="text-center section-title pt-5 mb-5">My Resume..</h1>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <img src={resume1} alt=""/>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <img src={resume2} alt=""/>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12">
                    <img src={resume3} alt=""/>
                </div>
                <div className="resume-Btn">
                    <button  className="btn"><a href="../../..//images/resume/Mahadiul_Resume_2020.pdf" download className="resumeBtn">Download Resume</a></button>
                </div>
            </div>
        </div>
    );
};

export default Resume;