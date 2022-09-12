import React, { useEffect } from 'react';
import Header from './header/header';
import Hero from './hero/hero';
import About from './about/about';
import Studies from './studies/studies';
import Jobs from './jobs/jobs';
// import Projects from './projects/projects';
import Footer from './footer/footer';
import { data } from '../mock/mock';
import '../styles/index.scss';
import Aos from 'aos'
import 'aos/dist/aos.css'

const { header, social, hero, about, studies, jobs } = data;

const Index = () => {
    useEffect(() => {
        Aos.init({ duration: 3000 });
      }, [])
    return (
        <div>
            <Header header={header} />
            <Hero hero={hero} social={social}/>
            <About about={about} />
            <Studies studies={studies} />
            <Jobs jobs={jobs}/>
            {/* <Projects project={project}/> */}
            <Footer social={social}/>
        </div>
    );
};


export default Index;
