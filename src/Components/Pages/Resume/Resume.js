import React from 'react';
import './Resume.css';
import resume1 from '../../../images/resume/resume1.PNG';
import resume2 from '../../../images/resume/resume2.PNG';
import resume3 from '../../../images/resume/resume3.PNG';

const Resume = () => {
    return (
        <div className="resume section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="text-center section-title mb-5">My Resume..</h1>
                    </div>
                </div>
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
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <img src={resume3} alt=""/>
                    </div>
                </div>
                <div className="resume-Btn pb-5">
                    <button  className="btn"><a href="https://drive.google.com/file/d/1blipk6zAE8uxfwxKZTYM7wtokT9LT7zW/view?usp=sharing" download className="resumeBtn">Download Resume</a></button>
                </div>
            </div>
        </div>
    );
};

export default Resume;