import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import brain from './brain.png';

const Logo = () => {
    return(
        <div className='ma4 mt0'>             
            <Tilt className="Tilt br-2 shadow-2" options={{ max : 25 }} style={{ height: '150px', width: '150px' }} >
            <div className="Tilt-inner pa3"> <img style={{paddingTop: '20px'}}src={brain} alt='logo'></img></div>
            </Tilt>
        </div>
    );
}

export default Logo;