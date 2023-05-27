import React from 'react';
import { useState } from 'react';
import 'aos/dist/aos.css'
import { Header } from './header/header';
import { Hero } from './hero/hero';
import { About } from './about/about';
import { Studies } from './studies/studies';
import { Jobs } from './jobs/jobs';
import { Skills } from './skills/skills';
import { Footer } from './footer/footer';
import useDataFetching from '../controllers/dataFetching';

function Index() {
    const [isOpen, setIsOpen] = useState(false)
    const handleClick = () => setIsOpen(!isOpen)
    const closeMenu = () => setIsOpen(false)
    const { about, header, hero, jobs, skills, social, studies } = useDataFetching();

    return (
        <div>
            <Header
                handleClick={handleClick}
                isOpen={isOpen}
                closeMenu={closeMenu}
                headerList={header}
            />
            <Hero
                hero={hero}
                social={social}
            />
            <About about={about} />
            <Studies studies={studies} />
            <Jobs jobs={jobs} />
            <Skills skills={skills} />
            {/* <Projects projects={projects}/> */}
            <Footer social={social} />
        </div>
    );
};

export default Index;
