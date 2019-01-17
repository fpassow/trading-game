import React from 'react'
import Cash from './Cash'

const MainPage = ({showWelcomePage}) => (
    <div >
        <Cash />
        <button onClick={showWelcomePage} >Help</button>
    </div>
)

export default MainPage