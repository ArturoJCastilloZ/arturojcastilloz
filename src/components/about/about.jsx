import React from 'react';
import '../../styles/components/about/about.scss';

const About = ({about}) => {
    return (
        <div>
            <h1 className='about-title'>About me &darr;</h1>
            <div className='about'>
                <div className='about-info'>
                {about.map((about, index) => {
                    return (
                        <p key={about.title + index}> <b>{ about.title }</b> { about.name }</p>
                    )
                })}
                </div>
            </div>
        </div>
    );
}

export default About;
