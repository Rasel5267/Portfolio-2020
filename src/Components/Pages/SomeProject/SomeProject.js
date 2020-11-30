import React from 'react';
import './SomeProject.css';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import work1 from '../../../images/Work/work1.PNG';
import work2 from '../../../images/Work/work2.PNG';
import work3 from '../../../images/Work/work3.PNG';

const projects = [
    { 
        title: 'Ema-john Clone(Full-stack)', 
        projectDtl: 'Improved e-commerce website loading time by 42% by breaking down the data module and website. Implemented end to end projects with different features like product display, login, shopping cart, payment method, etc. Designed the whole system to explore technology.', 
        image:`${work1}`, 
        technology: {dtl:'React Js, JavaScript, ES2015, Node js, FirebaseReact, Bootstrap, React Router, Express js, Redux js, MongoDB, Heroku, HTML5, CSS3'}, 
        githubClient: "https://github.com/Rasel5267/Ema-john-client", 
        gitHubServer: 'https://github.com/Rasel5267/Emajohn-server', 
        liveSite: 'https://emajhon-clone.netlify.app/'},
    { 
        title: 'Creative Agency', 
        projectDtl: 'Developed a selling website for the customer order processing unit. Create a user management system that includes google login, logout, order services, order list by a specific user, and review services. Designed and developed an admin panel for admin and users individually.', 
        image:`${work2}`, 
        technology: {dtl:'React Js, JavaScript, ES2015, Node js, FirebaseReact, Bootstrap, React Router, Express js, MongoDB, Heroku, HTML5, CSS3'}, 
        githubClient: "https://github.com/Rasel5267/creative-agency-client", 
        gitHubServer: 'https://github.com/Rasel5267/creative-agency-server', 
        liveSite: 'https://creative-agency-bd.firebaseapp.com/'},
    
    { 
        title: 'Apartment-Hunt(Team-work)', 
        projectDtl: 'Build a website for the customer, they can book a rent house. Implemented end to end projects with different features like house display, booking a rent house, google login, logout, booking list by a specific user, admin panel, etc. Designed the whole system to explore how to work with a team.', 
        image:`${work3}`, 
        technology: {dtl:'React.Js, JavaScript, Node.js, Firebase, React Bootstrap, React Router, Express.js, MongoDB, Heroku, HTML5, CSS3'}, 
        githubClient: "https://github.com/Rasel5267/Apartment-Hunt-Client", 
        gitHubServer: 'https://github.com/Rasel5267/Apartment-Hunt-Server', 
        liveSite: 'https://apartment-hunt-basic.web.app/'},
]

const SomeProject = () => {
    return (
        <div>
            <section class="works section m-0">
            <div className="container">
                <p class="section-subtitle text-center">My Portfolio</p>
                <h2 class="section-title mb-5">Some of my Projects</h2>

                <div class="row">
                    { 
                        projects.map(project =>
                            <div className="col-md-4 col-sm-12">
                                <Card className="projectCard mb-4">
                                    <Card.Img variant="top" style={{height: '230px'}} src={project.image} />
                                    <Card.Body>
                                        <Card.Title>{project.title}</Card.Title>
                                        <Card.Text><b>Summary: </b>{project.projectDtl}</Card.Text>
                                    </Card.Body>
                                    <ListGroup className="list-group-flush">
                                        <ListGroupItem><b>technology: </b>{project.technology.dtl}</ListGroupItem>
                                    </ListGroup>
                                    <Card.Body>
                                        <Card.Link className="cardLink" target="_blank" rel="noopener" href={project.githubClient}>GitHub Client</Card.Link>
                                        <Card.Link className="cardLink" target="_blank" rel="noopener" href={project.gitHubServer}>GitHub Server</Card.Link>
                                        <Card.Link className="cardLink" target="_blank" rel="noopener" href={project.liveSite}>Live Preview</Card.Link>
                                    </Card.Body>
                                </Card>
                            </div>
                        )
                    }
                </div>
                <div className="row">
                    <div className="ml-auto mr-auto mt-4">
                        <button className="projectBtn btn"><Link className="link" to="/projects">See All Projects</Link></button>
                    </div>
                </div>
            </div>
        </section>
        </div>
    );
};

export default SomeProject;