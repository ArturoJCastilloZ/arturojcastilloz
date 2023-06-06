import { fetchImages } from '../../controllers/firebaseData';
import { useState, useEffect } from 'react';
import '../../styles/components/header/header.scss';
import { Navbar } from './content/navbar';
import { ListaDesordenada } from './ul_header/ul';
import { Enlaces } from './li_header/li';


const Header = ({ handleClick, isOpen, closeMenu, headerList }) => {
    /** change header color when scroll */
    const [color, setColor] = useState(false)
    const [images, setImages] = useState([]);
    const changeColor = () => {
        if (window.scrollY >= 90) {
            setColor(true)
        } else {
            setColor(false)
        }
    }

    useEffect(() => {
        const fetchImageData = async () => {
          const aboutData = await fetchImages(['logo.png']);
          setImages(aboutData)
        };
        fetchImageData();
      }, [headerList])

    window.addEventListener('scroll', changeColor)

    return (
        <div className={color ? 'header header-bg' : 'header'}>
            <Navbar handleClick={handleClick} isOpen={isOpen} image={images[0]}>
                <ListaDesordenada isOpen={isOpen}>
                    {headerList
                    .sort((a, b) => a._id - b._id)
                    .map((data, index) => {
                        return (
                            <Enlaces
                            key={index}
                            url={data.Enlace}
                            offset={data.offset}
                            closeMenu={closeMenu}
                            title={data.Titulo} />
                        )
                    })}
                </ListaDesordenada>
            </Navbar>
        </div>
    )
}

export {Header}