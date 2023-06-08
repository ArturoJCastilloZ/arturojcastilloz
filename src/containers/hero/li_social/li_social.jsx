import * as Icons from 'react-icons/fa';
import { Tooltip } from 'react-tooltip';


const LiSocial = ({ icon, color, url, title }) => {
    if (!Icons[icon]) {
        throw new Error(`Icono invalido: ${icon}`)
    }
    const Icon = Icons[icon]

    return (
        <li className="social-item" style={{ '--color': color, "cursor": "pointer" }}>
            <a href={url} data-tooltip-id={url} data-tooltip-content={title} data-tooltip-place="top"><Icon /></a>
            <Tooltip id={url} />
        </li>
    )
}

export { LiSocial }
