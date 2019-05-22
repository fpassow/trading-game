import React from 'react'

const Crew = ({myShip}) => {
    let crewArr = []
    for (let i = 0; i < myShip.crewSize; i++) {
        crewArr.push(<img key={i} src="img/crew.png" alt="crewperson" />)
    }
    return (
        <div>
            <h3>Crew </h3>
            {crewArr}
        </div>
    )
}

export default Crew