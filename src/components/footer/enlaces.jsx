import * as Icons from 'react-icons/fa'
import { docs } from '../../mock/images'

const Resume = (props) => {
    if (!Icons[props.icon]){
        throw new Error(`Icono invalido: ${props.icon}`)
    }
    const Icon = Icons[props.icon]
    const document = docs[props.url]
  return (
    <li className='footer-item' style={{'--color': props.color, "cursor": "pointer"}}>
        <a href={document} download={props.title}><Icon /></a>
    </li>
  )
}

export {Resume}