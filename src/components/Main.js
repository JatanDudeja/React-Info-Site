import React from 'react'
import reactHalfLogo from '../images/react-icon-large.png'
function Main(){
    return(
        <main className='main--container'>
            {/* <img
                src={reactHalfLogo}
                alt = 'React Half Logo'
                className='main--react_half_logo'
            /> */}
            <h1>Fun facts about React</h1>
            <ul>
                <li>Was first release in 2013</li>
                <li>Was orignally create by Jordan Walke</li>
                <li>Has well over 100k stars in Github</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </main>
    )
}

export default Main