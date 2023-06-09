import React from 'react';
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
    const { isLoading, about, header, hero, jobs, skills, social, studies } = useDataFetching();

    return (
        <div>
            {isLoading ? (<Loading isloading={isLoading} />) : (
                <>
                    <Loading isloading={isLoading} />
                    <Header headerList={header}/>
                    <Hero hero={hero} social={social} />
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
