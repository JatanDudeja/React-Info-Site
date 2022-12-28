import React from 'react'
import reactLogo from '../images/react-icon-small.png'

function Navbar(){
    return(
        <nav>
            <img 
                src={reactLogo}
                alt="React Logo"
                className='react-logo'
            />
            <h3>Read Facts</h3>
            <h4>React Course - Project 1</h4>
        </nav>
    )
}


export default Navbar