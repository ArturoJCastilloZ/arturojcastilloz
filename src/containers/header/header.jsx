import { useState, useEffect } from 'react';
import '../../styles/components/header/header.scss';
import { Navbar } from './content/navbar';
import { ListaDesordenada } from './ul_header/ul';
import { Enlaces } from './li_header/li';

const Header = ({ headerList }) => {
    const [color, setColor] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const changeColor = () => {
        setColor(window.scrollY >= 90);
    };

    const handleClick = () => {
        setIsOpen(prevIsOpen => !prevIsOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        window.addEventListener('scroll', changeColor);
        return () => {
            window.removeEventListener('scroll', changeColor);
        };
    }, []);

    return (
        <div className={color ? 'header header-bg' : 'header'}>
            <Navbar handleClick={handleClick} isOpen={isOpen}>
                <ListaDesordenada isOpen={isOpen}>
                    {headerList
                        .sort((a, b) => a._id - b._id)
                        .map((data, index) => (
                            <Enlaces
                                key={index}
                                url={data.Enlace}
                                offset={data.offset}
                                closeMenu={closeMenu}
                                title={data.Titulo}
                            />
                        ))}
                </ListaDesordenada>
            </Navbar>
        </div>
    );
};

export default Header;


export { Header }