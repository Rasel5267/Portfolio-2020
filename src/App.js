import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Pages/Home/Home';
import About from './Components/Pages/About/About';
import Projects from './Components/Pages/Projects/Projects';
import Blogs from './Components/Pages/Blogs/Blogs';
import Contact from './Components/Pages/Contact/Contact';
import Navigation from './Components/Pages/Navigation/Navigation';
import Footer from './Components/Pages/Footer/Footer';

function App() {
  return (
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
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
