import React from 'react';
import '../../styles/components/footer/footer.scss';

const Footer = ({footer}) => {
    return (
        <div className='footer'>
            <div className='footer-items'>
                <ul className='footer-items-item'>
                {footer.map((footer, index) => {
                    return (
                        <li key={footer.title + index}>
                            <a href={footer.url} className='footer-items-item-icons'>{footer.icon} {footer.title}</a>
                        </li>
                        )
                })}
                </ul>
            </div>
        </div>
    );
}

export default Footer;
