import React from 'react'
import AboutShips from './AboutShips'


const WelcomePage = ({hideWelcomePage}) => (
    <div >
        <div style={{textAligh:'right'}}> <button onClick={hideWelcomePage} >Hide</button> </div>
        <h1>Steam Punk Traiding Game</h1>
        <p>An introduction and info about how to play the game will go here.</p>
        <AboutShips />
        <button onClick={hideWelcomePage} >Hide</button>
    </div>
)

export default WelcomePage