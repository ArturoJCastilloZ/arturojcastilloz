import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa'
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Navbar = ({ handleClick, isOpen, image, children }) => {
  return (
    <nav className='header-navbar'>
        <Link to="home" spy={true} smooth={true} offset={-100} duration={700} className='logo'>
            <LazyLoadImage src={image} alt="logo" />
        </Link>
        <div className='header-navbar-hamburguer' onClick={handleClick}>
            {isOpen ? (<FaTimes size={30} style={{ color: '#ffffff'}} />) : (<FaBars size={30} style={{ color: '#ffffff'}}/>)}
        </div>
        {children}
    </nav>
  )
}

export {Navbar}