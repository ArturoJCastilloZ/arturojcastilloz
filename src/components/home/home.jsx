import React from 'react';
import '../../styles/components/home/home.scss';

const Home = ({home}) => {
    return (
            <div>
            {home.map((home, index) => {
                return (
                    <div className='home' key={index}>
                        <img className='home-imagen' src={ home.image } alt={ home.author } />
                        <h1 className='home-author'>{ home.author }</h1>
                        <span className='home-presentation'>{ home.presentation }</span>
                        <p className='home-description'>{ home.description }</p>
                    </div>
                )
            })}
            </div>
    );
}

export default Home;
