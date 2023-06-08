import * as Icons from 'react-icons/fa';
import { Tooltip } from 'react-tooltip';

const FooterContent = ({ icon, url, color, title }) => {
    if (!Icons[icon]){
        throw new Error(`Icono invalido: ${icon}`)
    }
    const Icon = Icons[icon]
  return (
    <li className='footer-item' style={{'--color': color, "cursor": "pointer" }}>
        <a href={url} data-tooltip-id={url} data-tooltip-content={title} data-tooltip-place="top"><Icon /></a>
        <Tooltip id={url} />
    </li>
  )
}

export {FooterContent}