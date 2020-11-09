import React from 'react';
import ContactWithMe from '../ContactWithMe/ContactWithMe';
import Services from '../Services/Services';
import Showcase from '../Showcase/Showcase';
import Skills from '../Skills/Skills';
import SomeBlog from '../SomeBlog/SomeBlog';
import SomeProject from '../SomeProject/SomeProject';

const Home = () => {
    return (
        <div>
            <Showcase />
            <Skills />
            <SomeProject />
            <Services />
            <SomeBlog />
            <ContactWithMe />
        </div>
    );
};

export default Home;