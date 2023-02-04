import * as Icons from 'react-icons/fa'

const LiSocial = (props) => {
  if (!Icons[props.icon]){
    throw new Error(`Icono invalido: ${props.icon}`)
  }
  const Icon = Icons[props.icon]

  return (
        <li className='social-item' style={{'--color':props.color, "cursor": "pointer"}}>
            <a href={props.url} download={props.title}><Icon /></a>
        </li>
  )
}

export {LiSocial}
