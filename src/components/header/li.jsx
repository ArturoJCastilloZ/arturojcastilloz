import { Link } from 'react-scroll';

const Li = ({ url, offset, closeMenu, title }) => {
  return (
    <li className='header-navbar-menu-item' data-aos="zoom-in">
        <Link to={url} spy={true} smooth={true} offset={offset} duration={700} onClick={closeMenu}>{title}</Link>
    </li>
  )
}

export {Li}