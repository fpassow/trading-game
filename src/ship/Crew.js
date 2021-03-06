import React from 'react'

/*
 * A component displaying a number of crewperson images equal to the ship's crewSize.
 */

const Crew = ({myShip}) => {
    let crewArr = []
    for (let i = 0; i < myShip.crewSize; i++) {
        crewArr.push(<img key={i} src="img/crew.png" alt="crewperson" />)
    }
    return (
        <div style={{marginTop: '5px'}} >
            {crewArr}
        </div>
    )
}

export default Crew