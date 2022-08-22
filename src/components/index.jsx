import React from 'react';
import Home from './home/home';
import Header from './header/header';
import Footer from './footer/footer';
import About from './about/about';
import Training from './training/training';
import Projects from './projects/projects';
import { useState } from 'react';
import { data } from '../mock/mock';
import '../styles/index.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const { header, footer, home, about, studies, jobs, project } = data;

const Index = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    const openNavbar = () => {
      setNavbarOpen(true);
    };
  
    const closeNavbar = () => {
      setNavbarOpen(false);
    };
    return (
        <Router>
            <div className='body'>
            <Header header={header} navbarOpen={navbarOpen} openNavbar={openNavbar} closeNavbar={closeNavbar}/>
                <Routes>
                    <Route path="/" exact={true} element={<Home home={home} />} />
                    <Route path="/about" exact={true} element={<About about={about} footer={footer} />} />
                    <Route path="/training" exact={true} element={<Training studies={studies} jobs={jobs}/>} />
                    <Route path="/my-projects" exact={true} element={<Projects project={project}/>} />
                </Routes>
            <Footer footer={footer}/>
            </div>
        </Router>
    );
};


export default Index;
