const ListaDesordenada = ({ isOpen, children }) => {
  return (
    <ul className={isOpen ? 'header-navbar-menu active' : 'header-navbar-menu'}>
        {children}
    </ul>
  )
}

export {ListaDesordenada}