import React from 'react';
import './Contact.css';
import { Form } from 'react-bootstrap';

const Contact = () => {
    return (
        <div className="contact">
            <div className="container">
                <h1 className="text-center section-title pt-5 mb-5">Contact with Me..</h1>
                <Form action="https://formspree.io/f/moqpwvld" method="POST" className="contactForm">
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
                    <button className="btn contactBtn mt-3 mb-5" type="submit">
                        Send Message
                    </button>
                </Form>
            </div>
        </div>
    );
};

export default Contact;