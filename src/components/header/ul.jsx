

const ListaDesordenada = (props) => {
  return (
    <ul className={props.isOpen ? 'header-navbar-menu active' : 'header-navbar-menu'}>
        {props.children}
    </ul>
  )
}

export {ListaDesordenada}