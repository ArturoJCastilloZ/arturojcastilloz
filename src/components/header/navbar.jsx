import logo from '../../assets/logo.png'
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = (props) => {
  return (
    <nav className='header-navbar'>
        <Link to="home" spy={true} smooth={true} offset={-100} duration={700} className='logo'>
            <img src={logo} alt="logo" />
        </Link>
        <div className='header-navbar-hamburguer' onClick={props.handleClick}>
            {props.isOpen ? (<FaTimes size={30} style={{ color: '#ffffff'}} />) : (<FaBars size={30} style={{ color: '#ffffff'}}/>)}
        </div>
        {props.children}
    </nav>
  )
}

export {Navbar}