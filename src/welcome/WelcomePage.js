import React from 'react'
import IntroText from './IntroText'
import PlayingTheGame from './PlayingTheGame'
import AboutShips from './AboutShips'
import AboutCargos from './AboutCargos'
import {seaBlue} from '../styleConstants'

/* This game has two screens: This componet displays the "welcome" screen, which information
 * the player can read before playing.
 * When they're ready, a button takes them to the MainPage componet for actual play.
 */

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
    margin: '0 auto',
    maxWidth: '90%'
}
const buttonStyle = {
    color: 'white',
    background: 'blue',
    fontSize: '20px',
    fontWeight: 'bold',
    borderRadius: '10px'
}
const WelcomePage = ({hideWelcomePage, ticks}) => {
    const buttonText = (ticks > 0) ? 'Return to game' : 'Start the game'
    return (
        <div style={wrapperStyle}>
            <div style={welcomePageStyle}>
                <div style={{textAligh:'right'}}>
                    <button style={buttonStyle} onClick={hideWelcomePage} >{buttonText} >>>></button>
                </div>
                <img src="img/albionsteamclipper_large.png" alt="A ship with steam and sail" style={welcomeImageStyle} />
                <IntroText />
                <PlayingTheGame />
                <AboutShips />
                <AboutCargos />
                <br />
                <button style={buttonStyle} onClick={hideWelcomePage} >{buttonText} >>>></button>
            </div>
        </div>
    )
}

export default WelcomePage