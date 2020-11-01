import React from 'react';
import './Contact.css';
import { Form } from 'react-bootstrap';

const Contact = () => {
    return (
        <div className="section contact">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="text-center section-title mb-5">Contact with Me..</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 col-sm-12 contactForm mb-5">
                        <Form action="https://formspree.io/f/moqpwvld" method="POST">
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Name</Form.Label>
                                <Form.Control required name="name" type="text" placeholder="Enter Name" />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control required name="email" type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Message</Form.Label>
                                <Form.Control required name="message" as="textarea" rows={3} />
                            </Form.Group>
                            <button className="btn contactBtn mt-3" type="submit">
                                Send Message
                            </button>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;