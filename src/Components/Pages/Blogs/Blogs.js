import React from 'react';
import { Card } from 'react-bootstrap';
import './Blogs.css';
import javascript1 from '../../../images/blog/javascript1.jpg';
import javascript2 from '../../../images/blog/javascript2.jpg';
import javascript3 from '../../../images/blog/javascript3.jpg';
import javascript4 from '../../../images/blog/javascript4.jpg';
import reactJs from '../../../images/blog/react.jpg';
import interview from '../../../images/blog/interview.jpg';
import html from '../../../images/blog/html.jpg';
import css from '../../../images/blog/css.jpg';

const blogs = [
    { title: 'Introduction to JavaScript: Basic #JS Tutorial part1', image:`${javascript1}`, link: 'https://mahadiul-hasan.medium.com/introduction-to-javascript-basic-js-tutorial-part1-cdd53d689adb'},
    { title: 'JavaScript core concept: #Javascript tutorial part2', image:`${javascript2}`, link: 'https://mahadiul-hasan.medium.com/javascript-core-concept-strings-numbers-arrays-javascript-tutorial-part2-e9199ed7886'},
    { title: 'JavaScript core concept: ES6, Function #JS Tutorial part3', image:`${javascript3}`, link: 'https://mahadiul-hasan.medium.com/javascript-core-concept-es6-function-js-tutorial-part3-45e56e595ba5'},
    { title: 'ReactJs Fundamental concept: 10 important things', image:`${reactJs}`, link: 'https://mahadiul-hasan.medium.com/reactjs-fundamental-concept-10-important-things-c33e0dc71b18'},
    { title: 'Some JavaScript interview question topic', image:`${javascript4}`, link: 'https://mahadiul-hasan.medium.com/some-javascript-interview-question-topic-7ebe40680678'},
    { title: 'Most Common Interview Question 2020', image:`${interview}`, link: 'https://mahadiul-hasan.medium.com/most-common-interview-question-2020-a49d756f8c0a'},
    { title: 'Top 50 HTML Interview Question 2020', image:`${html}`, link: 'https://mahadiul-hasan.medium.com/top-50-html-interview-question-2020-cd19a578de77'},
    { title: 'Top 50 CSS Interview Questions 2020', image:`${css}`, link: 'https://mahadiul-hasan.medium.com/top-50-css-interview-questions-2020-c2f8ac0e7ea9'},
    { title: 'JavaScript Coding Interview Question', image:`${javascript1}`, link: 'https://mahadiul-hasan.medium.com/javascript-coding-interview-question-f0947dd952e0'},
]

const Blogs = () => {
    return (
        <section className="blogs section">
            <div className="container">
                <h2 class="section-title mb-5">My Recent Blogs</h2>
                <div class="row">
                    { 
                        blogs.map(blog =>
                            <div className="col-md-4 col-sm-12">
                                <Card className="blogCard mb-4">
                                    <Card.Img variant="top" style={{height: '230px'}} src={blog.image} />
                                    <Card.Body>
                                        <a className="blogLink" href={blog.link} target="_blank" rel="noreferrer"><Card.Title>{blog.title}</Card.Title></a>
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

export default Blogs;