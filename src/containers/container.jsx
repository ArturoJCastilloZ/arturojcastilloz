import React, { useEffect } from 'react';
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
import Loading from './loader/loader';

function Index() {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setisLoading] = useState(true);
    const handleClick = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);
    const { about, header, hero, jobs, skills, social, studies } = useDataFetching();

    useEffect(() => {
        if (
            about.length > 0 &&
            header.length > 0 &&
            hero.length > 0 &&
            jobs.length > 0 &&
            skills.length > 0 &&
            social.length > 0 &&
            studies.length > 0
        ) {
            setisLoading(false)
        };
    }, [about, header, hero, jobs, skills, social, studies])

    return (
        <div>
            <Header
                handleClick={handleClick}
                isOpen={isOpen}
                closeMenu={closeMenu}
                headerList={header}
            />
            {isLoading ? (<Loading isloading={isLoading} />) : (
                <>
                    <Loading isloading={isLoading} />
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
                </>
            )}
        </div>
    );
};

export default Index;
