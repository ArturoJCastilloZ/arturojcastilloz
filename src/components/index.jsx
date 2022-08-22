import React from 'react';
import Home from './home/home';
import Header from './header/header';
import Footer from './footer/footer';
import About from './about/about';
import Training from './training/training';
import Projects from './projects/projects';
import { useState } from 'react';
import { data } from '../mock/mock';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const { header, footer, home, about } = data;

const Index = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const openSidebar = () => {
      setSidebarOpen(true);
    };
  
    const closeSidebar = () => {
      setSidebarOpen(false);
    };
    return (
        <Router>
            <Header header={header} sidebarOpen={sidebarOpen} openSidebar={openSidebar} closeSidebar={closeSidebar}/>
            <div>
                <Routes>
                    <Route path="/" exact={true} element={<Home home={home} />} />
                    <Route path="/about" exact={true} element={<About about={about} footer={footer} />} />
                    <Route path="/training" exact={true} element={<Training />} />
                    <Route path="/personal-projects" exact={true} element={<Projects />} />
                </Routes>
            </div>
            <Footer footer={footer}/>
        </Router>
    );
};


export default Index;
