import * as Icons from 'react-icons/fa'
import { docs } from '../../images/images'

const Resume = ({ icon, url, title, color }) => {
    if (!Icons[icon]){
        throw new Error(`Icono invalido: ${icon}`)
    }
    const Icon = Icons[icon]
    const document = docs[url]
  return (
    <li className='footer-item' style={{'--color': color, "cursor": "pointer"}}>
        <a href={document} download={title}><Icon /></a>
    </li>
  )
}

export {Resume}