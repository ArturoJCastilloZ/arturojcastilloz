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