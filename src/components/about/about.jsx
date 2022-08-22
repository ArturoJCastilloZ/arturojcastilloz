import React from 'react';
import '../../styles/components/about/about.scss';

const About = ({about}) => {
    return (
        <div className='about'>
            <h1 className='about-title'>About me &darr;</h1>
            <div className='about-info'>
            {about.map((about, index) => {
                return (
                    <p key={about.title + index}> <b>{ about.title }</b> { about.name }</p>
                )
            })}
            </div>
        </div>
    );
}

export default About;
