import { useState } from 'react';
import '../../styles/components/header/header.scss';

const Header = (props) => {
    /** change header color when scroll */
    const [color, setColor] = useState(false)
    const changeColor = () => {
        if (window.scrollY >= 90) {
            setColor(true)
        } else {
            setColor(false)
        }
    }

    window.addEventListener('scroll', changeColor)

  return (
    <div className={color ? 'header header-bg' : 'header'}>
      {props.children}
    </div>
  )
}

export {Header}