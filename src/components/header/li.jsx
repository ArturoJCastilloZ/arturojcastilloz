import { Link } from 'react-scroll';

const Li = (props) => {
  return (
    <li className='header-navbar-menu-item' data-aos="zoom-in">
        <Link to={props.url} spy={true} smooth={true} offset={-props.offset} duration={700} onClick={props.closeMenu}>{props.title}</Link>
    </li>
  )
}

export {Li}