import React from 'react'
import AboutShips from './AboutShips'
import IntroText from './IntroText'


const WelcomePage = ({hideWelcomePage}) => (
    <div >
        <div style={{textAligh:'right'}}> <button onClick={hideWelcomePage} >Hide</button> </div>
        <h1>A Steampunk Traiding Game</h1>
        <IntroText />
        <AboutShips />
        <button onClick={hideWelcomePage} >Hide</button>
    </div>
)

export default WelcomePage