import React from 'react'


const WelcomePage = ({hideWelcomePage}) => (
    <div >
        <h1>Hi!</h1>
        <button onClick={hideWelcomePage} >Hide</button>
    </div>
)

export default WelcomePage