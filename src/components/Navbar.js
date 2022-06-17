import React from 'react'
import troll from '../images/troll-face.png'

export default function Navbar() {
    return (
        <nav>
            <div className='logo'>
                <img className='logo--img' src={troll} />
                <h1 className='logo--text'>Meme Generator</h1>
            </div>
            <h2 className='course-title'>
                React Course - Project 3
            </h2>
        </nav>
    )
}