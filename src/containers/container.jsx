import React, { useEffect } from 'react';
import { useState } from 'react';
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Header } from './header/header';
import { Hero } from './hero/hero';
import { About } from './about/about';
import { Studies } from './studies/studies';
import { Jobs } from './jobs/jobs';
import { Skills } from './skills/skills';
import { Footer } from './footer/footer';
import fetchData from '../controllers/controller';

function Index() {
    /* mobile header */
    const [isOpen, setIsOpen] = useState(false)
    const handleClick = () => setIsOpen(!isOpen)

    /* close menu header */
    const closeMenu = () => setIsOpen(false)

    const [data, setData] = useState({
        about: [],
        docs: [],
        header: [],
        hero: [],
        jobs: [],
        skills: [],
        social: [],
        studies: [],
    });

    /** effect AOS y datos almacenados en estado */
    useEffect(() => {
        Aos.init({ duration: 3000 });
        async function fetchDataFromFirebase(){
            const aboutData = await fetchData('about');
            const docsData = await fetchData('docs');
            const headerData = await fetchData('header');
            const heroData = await fetchData('hero');
            const jobsData = await fetchData('jobs');
            const skillsData = await fetchData('skills');
            const socialData = await fetchData('social');
            const studiesData = await fetchData('studies');
            setData({
                about: aboutData,
                docs: docsData,
                header: headerData,
                hero: heroData,
                jobs: jobsData,
                skills: skillsData,
                social: socialData,
                studies: studiesData,
            });
        }
        fetchDataFromFirebase();
    }, [])

    const { about, docs, header, hero, jobs, skills, social, studies } = data;

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
                docs={docs}
            />
            <About about={about} />
            <Studies studies={studies} />
            <Jobs jobs={jobs} />
            <Skills skills={skills} />
            {/* <Projects projects={projects}/> */}
            <Footer
                social={social}
                docs={docs}
            />
        </div>
    );
};

export default Index;
