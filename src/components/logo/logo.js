import React from 'react';
import Tilt from 'react-tilt'
import horus from './horus.png';
import './logo.css';

const Logo = () => {
    return (
        <div className= 'ma4 mt0'>
            <Tilt className="Tilt" options={{ max : 25 }} style={{ height: 150, width: 150 }} >
            <div className="Tilt-inner"> 
                <img style={{paddingTop:'0px'}} alt ='logo' src={horus}/> 
            </div>
            </Tilt>
        </div>
    )
}

export default Logo;