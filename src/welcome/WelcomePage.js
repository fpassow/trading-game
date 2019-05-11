import React from 'react'
import AboutShips from './AboutShips'
import IntroText from './IntroText'
import PlayingTheGame from './PlayingTheGame'
import {seaBlue} from '../styleConstants'

const wrapperStyle = {
    background: seaBlue,
    padding: '40px'
}
const welcomePageStyle = {
    maxWidth: '800px',
    margin: '0px auto',
    padding: '20px',
    background: 'white',
    borderRadius: '40px'
}
const welcomeImageStyle = {
    display: 'block',
    margin: '0 auto'
}
const WelcomePage = ({hideWelcomePage}) => (
    <div style={wrapperStyle}>
        <div style={welcomePageStyle}>
            <div style={{textAligh:'right'}}> <button onClick={hideWelcomePage} >Play</button> </div>
            <img src="img/albionsteamclipper_large.png" alt="A ship with steam and sail" style={welcomeImageStyle} />
            <IntroText />
            <PlayingTheGame />
            <AboutShips />
            <button onClick={hideWelcomePage} >Play</button>
        </div>
    </div>
)

export default WelcomePage