import React, { useEffect } from 'react';
import { useState } from 'react';
import '../styles/index.scss';
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Header } from './header/header';
import { Navbar } from '../components/header/navbar';
import { ListaDesordenada } from '../components/header/ul';
import { Li } from '../components/header/li';
import { Content } from '../components/hero/content';
import { Social } from '../components/hero/social';
import { LiSocial } from '../components/hero/li_social';
import { Hero } from './hero/hero';
import { About } from './about/about';
import { ContentAbout } from '../components/about/content';
import { Studies } from './studies/studies';
import { StudiesContent } from '../components/studies/studies_content';
import { Jobs } from './jobs/jobs';
import { JobsContent } from '../components/jobs/jobs_content';
import { Skills } from './skills/skills';
import { SkillsContent } from '../components/skills/skills_content';
import { Footer } from './footer/footer';
import { FooterContent } from '../components/footer/footer_content';
import { Resume } from '../components/footer/enlaces';
import fetchData from '../controllers/services';

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
            const aboutData = await fetchData('/about');
            const docsData = await fetchData('/docs');
            const headerData = await fetchData('/header');
            const heroData = await fetchData('/hero');
            const jobsData = await fetchData('/jobs');
            const skillsData = await fetchData('/skills');
            const socialData = await fetchData('/social');
            const studiesData = await fetchData('/studies');
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
            <Header>
                <Navbar
                    handleClick={handleClick}
                    isOpen={isOpen}
                >
                    <ListaDesordenada isOpen={isOpen}>
                    {header.map((headerData, index) => {
                        return (
                            <Li
                                key={index}
                                url={headerData.url}
                                offset={headerData.offset}
                                closeMenu={closeMenu}
                                title={headerData.title}
                            />
                        )
                    })}
                    </ListaDesordenada>
                </Navbar>
            </Header>
            <Hero>
                {hero.map((heroData, index) => {
                    return (
                        <Content
                            key={index}
                            greeting={heroData.greeting}
                            author={heroData.author}
                            presentation={heroData.presentation}
                            mun={heroData.mun}
                            cdest={heroData.cdest}
                            mun2={heroData.mun2}
                            cdest2={heroData.cdest2}
                        >
                            <Social>
                                {heroData.heroSocial.map((data, index) => {
                                    return (
                                        <LiSocial
                                            key={index}
                                            title={data.title}
                                            icon={data.icon}
                                            url={data.url}
                                            color={data.color}
                                        />
                                        )
                                    })}
                                {docs.map((dataDocs, index) => {
                                    return (
                                        <Resume
                                            key={index}
                                            color={dataDocs.color}
                                            icon={dataDocs.icon}
                                            url={dataDocs.url}
                                            title={dataDocs.title}
                                        />
                                        )
                                    })}
                            </Social>
                        </Content>
                    )
                })}
            </Hero>
            <About>
                {about.map((dataAbout, index) => {
                    return(
                        <ContentAbout
                            key={index}
                            image={dataAbout.image}
                            profesion={dataAbout.profesion}
                            description={dataAbout.description}
                        />
                    )
                })}
            </About>
            <Studies>
                {studies.map((dataStudies, index) => {
                    return (
                        <StudiesContent
                            key={index}
                            title={dataStudies.title}
                            institution={dataStudies.institution}
                            date={dataStudies.date}
                        />
                    )
                })}
            </Studies>
            <Jobs>
                {jobs.map((dataJobs, index) => {
                    return (
                        <JobsContent
                            key={index}
                            title={dataJobs.title}
                            institution={dataJobs.institution}
                            date={dataJobs.date}
                            activity={dataJobs.activity}
                        />
                    )
                })}
            </Jobs>
            <Skills>
                {skills.map((dataSkills, index) => {
                    return (
                        <SkillsContent
                            key={index}
                            skill={dataSkills.skill}
                            image={dataSkills.image}
                            width={dataSkills.width}
                        />
                    )
                })}
            </Skills>
            {/* <Projects projects={projects}/> */}
            <Footer>
                {social.map((dataFooter, index) => {
                    return (
                        <FooterContent
                            key={index}
                            color={dataFooter.color}
                            icon={dataFooter.icon}
                            url={dataFooter.url}
                            title={dataFooter.title}
                        />
                        )
                    })}
                {docs.map((dataDocs, index) => {
                    return (
                        <Resume
                            key={index}
                            color={dataDocs.color}
                            icon={dataDocs.icon}
                            url={dataDocs.url}
                            title={dataDocs.title}
                        />
                    )
                })}
            </Footer>
        </div>
    );
};


export default Index;
