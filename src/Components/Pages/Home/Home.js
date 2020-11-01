import React from 'react';
import ContactWithMe from '../ContactWithMe/ContactWithMe';
import Services from '../Services/Services';
import Showcase from '../Showcase/Showcase';
import Skills from '../Skills/Skills';
import SomeProject from '../SomeProject/SomeProject';

const Home = () => {
    return (
        <div>
            <Showcase />
            <Skills />
            <SomeProject />
            <Services />
            <ContactWithMe />
        </div>
    );
};

export default Home;