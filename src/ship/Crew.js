import React from 'react'

const Crew = ({myShip}) => {
    let maybeRed = {color: ((myShip.crew < myShip.crewSize) ? 'red' : 'inherit')}
    return (
        <div>
            <h3>Crew </h3>
            {myShip.crew} <span style={maybeRed}>(need {myShip.crewSize})</span>
        </div>
    )
}

export default Crew