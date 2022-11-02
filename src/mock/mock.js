import { FaDownload, FaFileDownload, FaGithub, FaLinkedin, FaMailBulk, FaWhatsapp } from 'react-icons/fa';
import img from '../assets/img1.jpg';
import miweb from '../assets/mi-web.png';
import miweb2 from '../assets/miweb2.png';
import memo from '../assets/memorama.png';
import work from '../assets/work-project.png';
import utsc from '../assets/utsc.png'
import consiss from '../assets/consiss.jpg'
import triplei from '../assets/triplei.png'
import wild from '../assets/wild.jpg'
import tecsa from '../assets/tecsa.jpg'
import arturo from '../assets/img1.png';
import resume from '../assets/resume.pdf';
import react from '../assets/react.png';
import css from '../assets/css.png';
import js from '../assets/js.png';
import laravel from '../assets/laravel.png';
import mysql from '../assets/mysql.png';
import python from '../assets/python.png';
import sass from '../assets/sass.png';
import php from '../assets/php.png';

export const data = {
    header: [
        {
            title: "Home",
            url: "home",
            offset: '100'
        },
        {
            title: "About",
            url: "about",
            offset: '-0'
        },
        {
            title: "Studies",
            url: "studies",
            offset: '-1'
        },
        {
            title: "Jobs",
            url: "jobs",
            offset: '-1'
        },
        {
            title: "Skills",
            url: "skills",
            offset: '-1'
        },
        {
            title: "Projects",
            url: "projects",
            offset: '-1'
        },
    ],
    hero: [
        {
            greeting: "Hello guest!",
            author: "I am Arturo Castillo",
            presentation: "Software development and management engineer",
            image: img,
            mun: "Santa Catarina",
            cdest: "Monterrey, Nuevo León",
            mun2: "García",
            cdest2: "Monterrey, Nuevo León",
        }
    ],
    about: [
        {
            img: arturo,
            profesion: "Software development and management engineer",
            description: `I consider myself a person with the ability to web
            development with different languages, frameworks and
            libraries, even to be learning and, at the same time,
            to be developing a project. I am a person committed to
            what I do, I like to work orderly and research on
            new technologies, I consider that my work is efficient,
             effective and of quality.`,
            document: resume
        }
    ],
    studies: [
        {
            img: utsc,
            title: "University technician in information and communication technologies",
            institution: "Universidad Tecnológica de Santa Catarina",
            date: "From September 2017 to August 2020",
        },
        {
            img: utsc,
            title: "Software development and management engineering",
            institution: "Universidad Tecnológica de Santa Catarina",
            date: "From September 2020 to April 2022",
        }
    ],
    jobs: [
        {
            img: consiss,
            title: "Web Developer",
            institution: "Consiss",
            date: "July 2022 to the present",
            activity: `Developing new projects with the technology that best suits the requirement,
            as well as giving maintenance to projects already created.`,
        },
        {
            img: wild,
            title: "Junior Developer",
            institution: "v09&Co.",
            date: "April to July 2022",
            activity: `Make updates or modifications to the Restology and Supercolchones pages,
                which were created in Magento2.`,
        },
        {
            img: tecsa,
            title: "Junior Developer",
            institution: "Tecsa Contact Center",
            date: "January to April 2022",
            activity: `Develop web pages requested through tickets by the Continuous Improvement team
                for departments such as Human Resources, Technical Support, even to motivate advisors
                with different dynamics taught by the Marketing department. The developments are
                done with PHP, Laravel, Tailwindcss, Javascript, JQuery and Ajax Requests.`,
        },
        {
            img: triplei,
            title: "Web Development Intern",
            institution: "Triple i Soluciones",
            date: "August to December 2021",
            activity: `This company has a platform to manage tasks in a very orderly manner,
                said platform is called Fluxy. As a Web Development Intern, I made updates,
                fixes and modifications to this platform. Fluxy was created with Angular as FrontEnd,
                Go! as Backend and on localhost MongoDB was used.`,
        },
    ],
    social: [
        {
            title: "GitHub",
            icon: <FaGithub  />,
            url: "https://github.com/ArturoJCastilloZ?tab=repositories",
            color: '#ff8000'
        },
        {
            title: "LinkedIn",
            icon: <FaLinkedin />,
            url: "https://www.linkedin.com/in/castillo93/",
            color: '#0072b1'
        },
        {
            title: "Correo",
            icon: <FaMailBulk />,
            url: "mailto:castillo.arturo93@hotmail.com",
            color: '#e3d002'
        },
        {
            title: "WhatsApp",
            icon: <FaWhatsapp />,
            url: "https://api.whatsapp.com/send?phone=5218116069640",
            color: '#3eff5f'
        },
        {
            title_d: "Arturo Castillo Resume",
            icon_d: <FaFileDownload />,
            url_d: resume,
            color: '#00FFFF'
        }
    ],
    skills: [
        {
            skill: "Reactjs",
            image: react,
            width: "120px"
        },
        {
            skill: "SASS",
            image: sass,
            width: "130px"
        },
        {
            skill: "CSS",
            image: css,
            width: "90px"
        },
        {
            skill: "JS",
            image: js,
            width: "100px"
        },
        {
            skill: "PHP",
            image: php,
            width: "130px"
        },
        {
            skill: "MySql",
            image: mysql,
            width: "160px"
        },
        {
            skill: "Laravel",
            image: laravel,
            width: "230px"
        },
        {
            skill: "Python",
            image: python,
            width: "200px"
        }
    ],
    projects: [
        {
            img: miweb,
            title: "My first web CV",
            url: "https://arturocastillocv.vercel.app/",
            repo: "https://github.com/ArturoJCastilloZ/arturocastillocv",
            description: `My first hosted web development was my resume.
                I liked how my page was taking shape while I was learning to use the reactjs framework.
                Although it is something basic and simple, it is motivating to see how to get things out even without having prior knowledge of this framework.`,
        },
        {
            img: miweb2,
            title: "My second web CV",
            url: "https://castillocvweb.vercel.app/",
            repo: "https://github.com/ArturoJCastilloZ/castillocvweb",
            description: `This is another web page dedicated to my resume, which was created with Reactjs and a javascript tool was used for the transitions when scrolling the page.`
        },
        {
            img: memo,
            title: "Memorama",
            url: "https://memorama-nu.vercel.app/",
            repo: "https://github.com/ArturoJCastilloZ/memorama",
            description: `Memorama game with programming images created in Javascript.`
        },
        {
            img: work,
            title: "Viakable e-commerce",
            url: "https://viakable.pcel.com/",
            repo: "https://viakable.pcel.com/",
            description: `E-commerce site recently created for the company Viakable.
                This website was created by the PCEL team of developers, to which I currently belong, using Opencart, which is a specialized Framework for e-commerce. `
        }
    ]
}