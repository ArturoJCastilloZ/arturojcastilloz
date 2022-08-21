import { FaGithub, FaLinkedin, FaMailBulk, FaWhatsapp } from 'react-icons/fa';

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