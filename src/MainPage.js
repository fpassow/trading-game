import React from 'react'
import Cash from './Cash'

const MainPage = ({showWelcomePage}) => (
    <div >
        <h1>main...</h1>
        <Cash />
        <button onClick={showWelcomePage} >Help</button>
    </div>
)

export default MainPage