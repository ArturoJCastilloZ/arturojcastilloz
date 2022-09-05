import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/components/header/header.scss';


const Header = ({header}) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
       <section>
        <div className='navbar'>
            <a href="/" className='navbar-logo'>
                <span>ArturoJCastilloZ</span>
            </a>
            <div className={`navbar-items ${isOpen && "open"}`}>
                {header.map((header, index) => {
                    return (
                        <NavLink 
                            key={index} 
                            to={header.url}
                            className={({isActive}) => "navbar-items-item" + (isActive ? "-active" : "")}
                            onClick={() => setIsOpen(!isOpen)}
                        >{header.title}</NavLink>
                    )
                })}
            </div>
            <div className={`navbar-toggle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
                <div className='navbar-toggle-bar'></div>
            </div>
        </div>
       </section>
    );
};


Header.propTypes = {

};


export default Header;
