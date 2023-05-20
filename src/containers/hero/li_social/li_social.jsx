import * as Icons from 'react-icons/fa'

const LiSocial = ({ icon, color, url, title }) => {
  if (!Icons[icon]){
    throw new Error(`Icono invalido: ${icon}`)
  }
  const Icon = Icons[icon]

  return (
        <li className='social-item' style={{'--color':color, "cursor": "pointer"}}>
            <a href={url} download={title}><Icon /></a>
        </li>
  )
}

export {LiSocial}
