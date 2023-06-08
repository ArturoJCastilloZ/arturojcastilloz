import { useState, useEffect } from 'react';
import Aos from 'aos';
import { fetchData } from './firebaseData';

const useDataFetching = () => {
    const [data, setData] = useState({
        about: [],
        header: [],
        hero: [],
        jobs: [],
        skills: [],
        social: [],
        studies: [],
        loading: true
    });

    useEffect(() => {
        fetchDataFromFirebase();
    }, []);

    const fetchDataFromFirebase = async () => {
        Aos.init({ duration: 3000 });
        const aboutData = await fetchData('about');
        const headerData = await fetchData('header');
        const heroData = await fetchData('hero');
        const jobsData = await fetchData('jobs');
        const skillsData = await fetchData('skills');
        const socialData = await fetchData('social');
        const studiesData = await fetchData('studies');
        setData({
            about: aboutData,
            header: headerData,
            hero: heroData,
            jobs: jobsData,
            skills: skillsData,
            social: socialData,
            studies: studiesData,
            loading: false
        });
    };

    return data;
};

export default useDataFetching;
