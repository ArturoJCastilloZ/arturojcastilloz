import * as Icons from 'react-icons/fa'

const FooterContent = (props) => {
    if (!Icons[props.icon]){
        throw new Error(`Icono invalido: ${props.icon}`)
    }
    const Icon = Icons[props.icon]
  return (
    <li className='footer-item' style={{'--color': props.color, "cursor": "pointer" }}>
        <a href={props.url}><Icon /></a>
    </li>
  )
}

export {FooterContent}