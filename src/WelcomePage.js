import React from 'react'


const WelcomePage = ({hideWelcomePage}) => (
    <div >
        <h1>Hi!</h1>
        <p>An introduction and info about how to play the game will go here.</p>
        <button onClick={hideWelcomePage} >Hide</button>
    </div>
)

export default WelcomePage