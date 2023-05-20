import { Link } from 'react-scroll';

const Enlaces = ({ url, offset, closeMenu, title }) => {
  return (
    <li className='header-navbar-menu-item' data-aos="zoom-in">
        <Link to={url} spy={true} smooth={true} offset={offset} duration={700} onClick={closeMenu}>{title}</Link>
    </li>
  )
}

export {Enlaces}