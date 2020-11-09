import React, {Suspense, lazy} from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Pages/Home/Home';
const About = lazy(()=> import('./Components/Pages/About/About'));
const Projects= lazy(()=> import('./Components/Pages/Projects/Projects'));
const Blogs = lazy(()=> import('./Components/Pages/Blogs/Blogs'));
const Contact = lazy(()=> import('./Components/Pages/Contact/Contact'));
const Navigation = lazy(()=> import('./Components/Pages/Navigation/Navigation'));
const Resume = lazy(()=> import('./Components/Pages/Resume/Resume'));
const Footer = lazy(()=> import('./Components/Pages/Footer/Footer'));


function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/blogs">
            <Blogs />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </Suspense>
  );
}

export default App;
