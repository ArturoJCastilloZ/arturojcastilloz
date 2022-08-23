import React from 'react';
import { FaBars,FaTimes } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import '../../styles/components/header/header.scss';


const Header = ({header, navbarOpen, closeNavbar, openNavbar}) => {
    return (
        <div className='header'>
            <div className='header-items'>
                <div className="nav__icon" onClick={() => openNavbar()}><FaBars /></div>
                <ul className={navbarOpen ? "sidebar-responsive" : "header-items-item"}>
                <div className="nav__icon-close" onClick={() => closeNavbar()}><FaTimes /></div>
                {header.map((header, index) => {
                    return (
                        // <li key={header.title + index}><a href={header.url}>{header.title}</a></li>
                        <li key={header.title + index}>
                            <NavLink to={header.url} className={({ isActive }) => "header-items-item-nav-link" + (isActive ? "-active" : "")} onClick={() => closeNavbar()}>{header.title}</NavLink>
                        </li>
                    )
                })}
                </ul>
            </div>
        </div>
    );
};


Header.propTypes = {

};


export default Header;
