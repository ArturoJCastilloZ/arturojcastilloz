import React from 'react'
import logo from '../../assets/logo.png'
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-scroll';
import '../../styles/components/header/header.scss';

const Header = ({header}) => {
  const [isOpen, setIsOpen] = useState(false)
  const handleClick = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  return (
    <div className='header'>
      <nav className='header-navbar'>
        <Link to="home" spy={true} smooth={true} offset={-100} duration={700} className='logo'>
          <img src={logo} alt="logo" />
        </Link>
        <div className='header-navbar-hamburguer' onClick={handleClick}>
          {isOpen ? (<FaTimes size={30} style={{ color: '#ffffff'}} />) : (<FaBars size={30} style={{ color: '#ffffff'}}/>)}          
        </div>
        <ul className={isOpen ? 'header-navbar-menu active' : 'header-navbar-menu'}>
          {header.map((header, index) => {
            return (
            <li className='header-navbar-menu-item' key={index} data-aos="zoom-in">
              <Link to={header.url} spy={true} smooth={true} offset={-100} duration={700} onClick={closeMenu}>{header.title}</Link>
            </li>              
            )
          })}            
        </ul>
      </nav>
    </div>
  )
}

export default Header