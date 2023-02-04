import React, { useEffect } from 'react';
import { useState } from 'react';
import Header from './header/header';
import Hero from './hero/hero';
import About from './about/about';
import Studies from './studies/studies';
import Jobs from './jobs/jobs';
import Skills from './skills/skills';
// import Projects from './projects/projects';
import Footer from './footer/footer';
import { data } from '../mock/mock';
import '../styles/index.scss';
import Aos from 'aos'
import 'aos/dist/aos.css'

const { header, social, hero, about, studies, jobs, skills } = data;

const Index = () => {
    /** change header color when scroll */
    const [color, setColor] = useState(false)
    const changeColor = () => {
        if (window.scrollY >= 90) {
            setColor(true)
        } else {
            setColor(false)
        }
    }

    window.addEventListener('scroll', changeColor)

    /* mobile header */
    const [isOpen, setIsOpen] = useState(false)
    const handleClick = () => setIsOpen(!isOpen)

    /* close menu header */
    const closeMenu = () => setIsOpen(false)

    /** effect AOS */
    useEffect(() => {
        Aos.init({ duration: 3000 });
      }, [])
    return (
        <div>
            <Header
                header={header}
                handleClick={handleClick}
                closeMenu={closeMenu}
                isOpen={isOpen}
                color={color}
            />
            <Hero hero={hero} social={social}/>
            <About about={about} />
            <Studies studies={studies} />
            <Jobs jobs={jobs}/>
            <Skills skills={skills}/>
            {/* <Projects projects={projects}/> */}
            <Footer social={social}/>
        </div>
    );
};


export default Index;
