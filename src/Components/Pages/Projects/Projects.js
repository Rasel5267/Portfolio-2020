import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import work1 from '../../../images/Work/work1.PNG';
import work2 from '../../../images/Work/work2.PNG';
import work3 from '../../../images/Work/work3.PNG';
import work4 from '../../../images/Work/work4.PNG';
import work5 from '../../../images/Work/work5.PNG';
import work6 from '../../../images/Work/work6.PNG';
import './Project.css';

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
    { title: 'Volunteer Network', projectDtl: 'A user can choose any event and register as a volunteer.And see their Activities and register for volunteer Services.Admin can see all the volunteer lists.New Volunteer Activities also show in the Volunteer Activities Section.', image:`${work4}`, technology: {dtl:'React Js, JavaScript, ES2015, Node js, FirebaseReact, Bootstrap, React Router, Express js, Redux js, MongoDB, Heroku, HTML5, CSS3'}, githubClient: "https://github.com/Rasel5267/Volunteer-assignment", gitHubServer: 'https://github.com/Rasel5267/Volunteer-assignment-server', liveSite: 'https://volunteer-network-associations.firebaseapp.com/'},
    { title: 'TravelBD', projectDtl: 'Users can book a hotel nearby on his location.Users can see their booking details.Many kinds of rooms are available for booking.Users can sign up using Google, Facebook, and also email and password.And only see their booking details.', image:`${work5}`, technology: {dtl:'React.Js, JavaScript, Node.js, Firebase, React Bootstrap, React Router, Express.js, HTML5, CSS3'}, githubClient: "https://github.com/Rasel5267/travelBD-assaignment", liveSite: 'https://travelbd-anywhere.web.app/'},
    { title: 'Athena Design(Team-work)', projectDtl: 'Improved design website for users. Develop best design with best team. Implemented end to end projects with different features like Services, Pricing, etc. Designed the whole system to explore how to in a team.', image:`${work6}`, technology: {dtl:'React.Js, JavaScript, Firebase, React Bootstrap, React Router, Express.js, HTML5, CSS3'}, githubClient: "https://github.com/Rasel5267/Athena-Design", liveSite: 'https://athena-design-team9.netlify.app/'},
]

const Projects = () => {
    return (
        <section class="works section">
            <div className="container">
                <p class="section-subtitle text-center">My Portfolio</p>
                <h2 class="section-title mb-5">My Recent Works</h2>

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
            </div>
        </section>
    );
};

export default Projects;