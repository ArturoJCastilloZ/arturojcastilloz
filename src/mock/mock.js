import { FaGithub, FaLinkedin, FaMailBulk, FaWhatsapp } from 'react-icons/fa';
import img from '../assets/img1.jpg';

export const data = {
    header: [
        {
            title: "Home",
            url: "/"
        },
        {
            title: "About Me",
            url: "/about"
        },
        {
            title: "Training",
            url: "/training"
        },
        {
            title: "Personal Projects",
            url: "/personal-projects"
        },
    ],
    home: [
        {
            author: "Arturo Castillo",
            presentation: "Software development and management engineer",
            image: img,
            description: `I consider myself a person with the ability to
            web development with different languages, frameworks and libraries, even to be learning and, at the same time, to be developing a project.
            I am a person committed to what I do, I like to work orderly and research on new technologies, I consider that my work is efficient, effective and of quality.`
        }
    ],
    about: [
        {
            title: "Name: ",
            name: "Arturo de Jesús Castillo Zapata",
        },
        {
            title: "Presentation: ",
            name: "Software development and management engineer",
        },
        {
            title: "Age: ",
            name: "29 year's old",
        },
        {
            title: "Primary address: ",
            name: "Las Sombrillas, Santa Catarina, Nuevo León",
        },
        {
            title: "Secondary address: ",
            name: "Privadas de Lincoln, García, Nuevo León",
        }
    ],
    studies: [
        {
            title: "Superior university technician",
            career: "Information and communication technologies",
            date: "From September 2017 to August 2020",
            institution: "Universidad Tecnológica de Santa Catarina",
        },
        {
            title: "Engineering",
            career: "Software development and management",
            date: "From September 2020 to April 2022",
            institution: "Universidad Tecnológica de Santa Catarina"
        }
    ],
    jobs: [
        {
            title: "Web Development Intern",
            institution: "Triple i Soluciones",
            date: "From August 2021 to December 2021",
            activity: `This company has a platform to manage tasks in a very orderly manner, 
                said platform is called Fluxy. As a Web Development Intern, I made updates, 
                fixes and modifications to this platform. Fluxy was created with Angular as FrontEnd, 
                Go! as Backend and on localhost MongoDB was used.`,
        },
        {
            title: "Junior Developer",
            institution: "Tecsa Contact Center",
            date: "From January 2022 to April 2022",
            activity: `Develop web pages requested through tickets by the Continuous Improvement team 
                for departments such as Human Resources, Technical Support, even to motivate advisors 
                with different dynamics taught by the Marketing department. The developments are 
                done with PHP, Laravel, Tailwindcss, Javascript, JQuery and Ajax Requests.`,
        },
        {
            title: "Junior Developer",
            institution: "v09&Co.",
            date: "From April 2022 to July 2022",
            activity: `Make updates or modifications to the Restology and Supercolchones pages, 
                which were created in Magento2.`,
        },
        {
            title: "Web Developer",
            institution: "Consiss",
            date: "From July 2022 to the present",
            activity: `Developing new projects with the technology that best suits the requirement, 
            as well as giving maintenance to projects already created.`,
        },
    ],
    footer: [
        {
            title: "GitHub",
            icon: <FaGithub />,
            url: "https://github.com/ArturoJCastilloZ?tab=repositories"
        },
        {
            title: "LinkedIn",
            icon: <FaLinkedin />,
            url: "https://www.linkedin.com/in/castillo93/"
        },
        {
            title: "Correo",
            icon: <FaMailBulk />,
            url: "mailto:castillo.arturo93@hotmail.com"
        },
        {
            title: "WhatsApp",
            icon: <FaWhatsapp />,
            url: "https://api.whatsapp.com/send?phone=5218116069640"
        }
    ]
}