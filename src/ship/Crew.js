import React from 'react'

const Crew = ({myShip}) => {
    let maybeRed = {color: ((myShip.crew < myShip.crewSize) ? 'red' : 'inherit')}
    let crewArr = []
    for (let i = 0; i < myShip.crew; i++) {
        crewArr.push(<img key={i} src="crew.png" alt="crewperson" />)
    }
    return (
        <div>
            <h3>Crew </h3>
            {crewArr} <span style={maybeRed}>(need {myShip.crewSize})</span>
        </div>
    )
}

export default Crew