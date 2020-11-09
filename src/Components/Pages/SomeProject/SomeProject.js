import React from 'react';
import './SomeProject.css';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import work1 from '../../../images/Work/work1.jpg';
import work2 from '../../../images/Work/work2.jpg';
import work3 from '../../../images/Work/work3.jpg';

const projects = [
    { title: 'Creative Agency', projectDtl: 'Users can buy Default Services or Order a Custom One.review and Services and it also shows in the review section.Users can see the Services and Order they ordered.Users and Admin different dashboard.Admin can create new Services, See all the pending orders.New Services also show in Services Section.Admin can update status by admin panel and delete existing Services and Orders.', image:`${work1}`, technology: {dtl:'React Js, JavaScript, ES2015, Node js, FirebaseReact, Bootstrap, React Router, Express js, Redux js, MongoDB, Heroku, HTML5, CSS3'}, githubClient: "https://github.com/Rasel5267/creative-agency-client", gitHubServer: 'https://github.com/Rasel5267/creative-agency-server', liveSite: 'https://volunteer-network-associations.firebaseapp.com/'},
    { title: 'Volunteer Network', projectDtl: 'A user can choose any event and register as a volunteer.And see their Activities and register for volunteer Services.Admin can see all the volunteer lists.New Volunteer Activities also show in the Volunteer Activities Section.Admin can delete existing Volunteer Activities.', image:`${work2}`, technology: {dtl:'React Js, JavaScript, ES2015, Node js, FirebaseReact, Bootstrap, React Router, Express js, Redux js, MongoDB, Heroku, HTML5, CSS3'}, githubClient: "https://github.com/Rasel5267/Volunteer-assignment", gitHubServer: 'https://github.com/Rasel5267/Volunteer-assignment-server', liveSite: 'https://volunteer-network-associations.firebaseapp.com/'},
    { title: 'TravelBD', projectDtl: 'Users can book a hotel nearby on his location.Users can see their booking details.Many kinds of rooms are available for booking.Users can sign up using Google, Facebook, and also email and password.And only see their booking details.', image:`${work3}`, technology: {dtl:'React.Js, JavaScript, Node.js, Firebase, React Bootstrap, React Router, Express.js, HTML5, CSS3'}, githubClient: "https://github.com/Rasel5267/travelBD-assaignment", gitHubServer: '', liveSite: 'https://travelbd-anywhere.web.app/'},
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
                    <div className="ml-auto mr-auto">
                        <button className="projectBtn btn"><Link className="link" to="/projects">See All Projects</Link></button>
                    </div>
                </div>
            </div>
        </section>
        </div>
    );
};

export default SomeProject;