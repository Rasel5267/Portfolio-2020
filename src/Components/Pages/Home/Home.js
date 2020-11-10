import React from 'react';
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
        </div>
    );
};

export default Home;