import * as Icons from 'react-icons/fa'

const FooterContent = ({ icon, url, color }) => {
    if (!Icons[icon]){
        throw new Error(`Icono invalido: ${icon}`)
    }
    const Icon = Icons[icon]
  return (
    <li className='footer-item' style={{'--color': color, "cursor": "pointer" }}>
        <a href={url}><Icon /></a>
    </li>
  )
}

export {FooterContent}